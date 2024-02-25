import Fastify from "fastify";
import {routes} from "./routes";
import cors from "@fastify/cors";
import * as config from "./plugins/config";

const app = Fastify({logger: true});
const host = config.HOST || "localhost";
const port = config.PORT || 3000;

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    const address = app.listen({port, host});
  } catch (err) {
    process.exit(1);
  }
};

start();
