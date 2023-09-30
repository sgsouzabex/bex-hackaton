import { SystemsConfig } from "types/system"

export const SystemsConfiguration: SystemsConfig[] = [
  {
    "nome": "BEXUP",
    // "url_envio_dossie": "https://us-central1-bex-hackaton.cloudfunctions.net/bexUpDossie",
    "url_envio_dossie": "http://localhost:5001/bex-hackaton/us-central1/bexUpDossie",
    "url_recebimento_dossie": "https://www.google.com"
  }, {
    "nome": "V1",
    "url_envio_dossie": "https://www.google.com",
    "url_recebimento_dossie": "https://www.google.com"
  }
]

/* Get a systemConfig by name */
export const getSystemConfig = (name: string) => {
  return SystemsConfiguration.find(config => config.nome === name)
}