import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { BexDossieBody } from "./types/dossie";

const TOPIC = "BEX_UP_DOSSIE_FUNCTION";

interface Params {
  json: BexDossieBody;
}

/**
 * Function responsible to create a dossie from bexUP system
 */
const listener = async ({ json }: Params) => {
  try {
    logger.info("BexUP Dossie: started.", JSON.stringify(json));

    logger.info("BexUP Dossie: finished.");
  } catch (error) {
    logger.error("BexUP Dossie: failed.", error);

    // TODO: Salvar que deu erro no

    // throw new Error(error);
  }
};

export const bexUpDossieFunction = functions.pubsub
  .topic(TOPIC)
  .onPublish(listener);
