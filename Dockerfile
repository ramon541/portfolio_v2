# ========================
# PRODUCTION
# ========================
FROM base AS production

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# cria usuário sem privilégios
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# permissões
RUN chown -R nextjs:nextjs /app

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]