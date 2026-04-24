import Fastify from 'fastify';

const app = Fastify({ logger: true });

app.get('/health', async () => {
  return { status: 'ok', service: 'refactory-api', version: '0.1.0' };
});

const start = async (): Promise<void> => {
  const port = Number(process.env.PORT) || 3000;
  await app.listen({ port, host: '0.0.0.0' });
};

start().catch((err) => {
  app.log.error(err);
  process.exit(1);
});
