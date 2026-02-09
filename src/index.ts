import Fastify from "fastify";
import { intorFastifyPlugin, getTranslator } from "intor/fastify";
import { intorConfig } from "./intor-config";

const fastify = Fastify();

fastify.register(intorFastifyPlugin, { config: intorConfig });

fastify.get("/", async function (request, reply) {
  const { t, tRich } = await getTranslator(intorConfig, request);

  reply.send({
    hello: t("hello", { name: "Intor" }),
    rich: tRich("rich", { tag: (children) => `<b>${children}</b>` }),
  });
});

fastify.listen({ port: 3000 }, function (err, address) {
  console.log(`Server is now listening on ${address}`);
});
