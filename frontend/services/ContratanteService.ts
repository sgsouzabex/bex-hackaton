import { useApi } from './api'

type Tabela = `documentos_v${1 | 2 | 3}`

function list(tabela: Tabela) {
  return useApi(`listar-contratantes/${tabela}`)
}

export default { list }
