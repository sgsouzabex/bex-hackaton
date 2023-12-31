import { Request, Response } from "express"
import * as DossieService from "./dossie-service"
import { DossieBody } from "types/dossie";

/**
 * Create a new dossie from provided parameters
 */
export const createDossie = async (req: Request<unknown, DossieBody[]>, res: Response) => {
  try {

    const status = await DossieService.startProcess(req.body)

    return res.json({
      status, body: req.body
    });
  } catch (error) {
    return res.status(400).json({ status: "FAILED" })
  }
}