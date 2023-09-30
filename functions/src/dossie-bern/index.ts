/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { BexDossieBody } from "./types/dossie";
import { AppDataSourceDBBERN } from "./database/db-config";
import { BernDocumentsResponse } from "./types/documents";
import { BERN_DOCUMENTS_QUERY } from "./database/bern-query";



/**
 * Function responsible to create a dossie from bexUP system
 */
const listener = async (req: functions.Request, res: functions.Response) => {
  try {
    const bernConnection = await AppDataSourceDBBERN.initialize();
    const filter = req.body as BexDossieBody;

    const result = await bernConnection.manager.query<BernDocumentsResponse[]>(BERN_DOCUMENTS_QUERY);

    console.log(result)
    // TODO: ENVIAR PARA O DOCS
    // TODO: Salvar os documentos na base

    logger.info("Bern Dossie: started.", JSON.stringify(filter));

    logger.info("Bern Dossie: finished.");

    res.json({ filter, status: 'ok' });
  } catch (error) {
    logger.error("Bern Dossie: failed.", error);

    // TODO: Salvar que deu erro no

    // throw new Error(error);
  }
};

export const bernDossieFunction = functions.https
  .onRequest(listener);
