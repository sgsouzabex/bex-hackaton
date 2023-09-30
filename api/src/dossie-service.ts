import { getSystemConfig } from "../systems";
import { DossieBody, SingleDossieRequest } from "types/dossie";
import db from "../database/db-config";
import { Dossie } from "../database/entities/dossie";

export const startProcess = async (items: DossieBody[]) => {
  const dossieRequests = items
    .flatMap((dossieItem) => {
      const config = getSystemConfig(dossieItem.system);

      const { contractor, documents, endDate, startDate, supplier, employees } =
        dossieItem;

      return employees?.map(
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
    })
    .filter((item) => Boolean(item.config));

  await saveDossies(dossieRequests);
};

const saveDossies = async (dossies: SingleDossieRequest[]) => {
  try {
    const manager = await db.getManager();

    const toCreate = dossies.map(
      ({
        config,
        contractor,
        documents,
        employee,
        endDate,
        startDate,
        supplier,
      }) => {
        return manager.create(Dossie, {
          contratada_id: supplier,
          contratante_id: contractor,
          numero_contrato: "",
          qtde_colaboradores: 1,
          qtde_documentos: documents.length,
          sistema_origem: config.nome,
          status: "PROCESSING",
        });
      }
    );

    const saved = await manager.save(toCreate);

    console.log(saved);
  } catch (error) {
    console.log(error);
  }
};

const sendToProcess = async (dossie: Dossie) => {
  /* try {
    await axios.post(config.url_envio_dossie, {
      contractor,
      documents,
      employee,
      endDate,
      startDate,
      supplier,
    });
  } catch (error) {
    console.log(error);
  } */
};
