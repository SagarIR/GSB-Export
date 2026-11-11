# ==============================================================================
# Multi-Stage Production Dockerfile for GSB Export Web Application
# ==============================================================================

# --- Stage 1: Base Alpine Environment ---
FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat openssl
WORKDIR /app

# --- Stage 2: Install Dependencies ---
FROM base AS deps
COPY package.json package-lock.json* ./
COPY prisma ./prisma
RUN npm ci

# --- Stage 3: Build the Next.js Application ---
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_STANDALONE=true
ENV NODE_ENV=production

RUN npx prisma generate
RUN npm run build

# --- Stage 4: Production Runtime Container ---
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Security: Create non-root group and user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy public static files
COPY --from=builder /app/public ./public

# Set permissions for prerender cache
RUN mkdir .next && chown nextjs:nodejs .next

# Copy standalone output and static chunks
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
