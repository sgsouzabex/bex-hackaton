import { useApi } from './api'
import type { ContratanteResponse, Tabela } from '~/types'

function list(tabela: Tabela) {
  return useApi<ContratanteResponse>(`listar-contratantes/${tabela}`)
}

export default { list }
