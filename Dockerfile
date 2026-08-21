# ========================
# BASE
# ========================
FROM node:20-alpine@sha256:afdf98210b07b586eb71fa22ba2e432e058e4cd1304d31ed60888755b8c865fb AS base

RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
RUN mkdir -p /app && chown nextjs:nextjs /app

WORKDIR /app

# ========================
# DEPS
# ========================
FROM base AS deps

USER nextjs

COPY --chown=nextjs:nextjs package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# ========================
# BUILDER
# ========================
FROM base AS builder

USER nextjs

COPY --from=deps --chown=nextjs:nextjs /app/node_modules ./node_modules
COPY --chown=nextjs:nextjs . .

ENV NEXT_TELEMETRY_DISABLED=1

# SITE_URL is baked into metadata/sitemap/robots at build time.
ARG SITE_URL=https://ramondias.dev.br
ENV SITE_URL=$SITE_URL

RUN yarn build

# ========================
# PRODUCTION
# ========================
FROM base AS production

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]