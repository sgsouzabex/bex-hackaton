/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
import * as functions from "firebase-functions";
import { logger } from "firebase-functions";
import { BexDossieBody } from "./types/dossie";
import { BexDocumentsResponse } from "./types/documents";
import { BEX_DOCUMENTS_QUERY } from "./database/bex-query";
import db from "./database/db-config";

/**
 * Function responsible to create a dossie from bexUP system
 */
const listener = async (req: functions.Request, res: functions.Response) => {
  try {
    const filter = req.body as BexDossieBody;
    logger.info("BexUP Dossie: started.", JSON.stringify(filter));

    const { contractor, documents, employee, endDate, startDate, supplier } =
      filter;

    const connection = await db.getManager();

    const foundDocuments = await connection.query<BexDocumentsResponse[]>(
      BEX_DOCUMENTS_QUERY(documents),
      [contractor, supplier, employee, startDate, endDate]
    );

    // TODO: ENVIAR PARA O DOCS
    // TODO: Salvar os documentos na base

    logger.info("BexUP Dossie: finished.");

    res.json({ status: "PROCESSING", foundDocuments });
  } catch (error) {
    logger.error("BexUP Dossie: failed.", error);

    res.status(400).json({ status: "FAILED" });
  }
};

export const bexUpDossie = functions.https.onRequest(listener);
