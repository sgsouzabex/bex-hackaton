/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { BexDossieBody } from "./types/dossie";
import { AppDataSourceDBBEX } from "./database/db-config";
import { BexDocumentsResponse } from "./types/documents";
import { BEX_DOCUMENTS_QUERY } from "./database/bex-query";

const TOPIC = "BEX_UP_DOSSIE_FUNCTION";

interface Params {
  json: BexDossieBody;
}

/**
 * Function responsible to create a dossie from bexUP system
 */
const listener = async ({ json }: Params) => {
  try {
    const bexConnection = await AppDataSourceDBBEX.initialize();
    const result = await bexConnection.manager.query<BexDocumentsResponse[]>(BEX_DOCUMENTS_QUERY);

    // TODO: ENVIAR PARA O DOCS
    // TODO: Salvar os documentos na base

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
