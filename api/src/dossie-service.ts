import axios from "axios";
import { getSystemConfig } from "../systems";
import { DossieBody, SingleDossieRequest } from "types/dossie";

export const startProcess = async (items: DossieBody[]) => {
  const payloads = items
    .flatMap((dossieItem) => {
      const config = getSystemConfig(dossieItem.system);

      const { contractor, documents, endDate, startDate, supplier, employees } =
        dossieItem;

      const dossies = employees?.map(
        (employee) =>
          ({
            config,
            contractor,
            documents,
            employee,
            endDate,
            startDate,
            supplier,
          } as SingleDossieRequest)
      );

      return dossies;
    })
    .filter((item) => Boolean(item.config));

  await Promise.all(payloads.map(sendToProcess));
};

const sendToProcess = async ({
  config,
  contractor,
  documents,
  employee,
  endDate,
  startDate,
  supplier,
}: SingleDossieRequest) => {
  await axios.post(config.url_envio_dossie, {
    contractor,
    documents,
    employee,
    endDate,
    startDate,
    supplier,
  });
};
