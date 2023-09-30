import { useApi } from './api'
import type { ContratadaResponse, Tabela } from '~/types'

interface ListParams {
  tabela: Tabela
  contratanteId: string
}

function list(params: ListParams) {
  const { tabela, contratanteId } = params

  return useApi<ContratadaResponse>(
    `listar-contratadas/${tabela}/${contratanteId}`,
  )
}

export default {
  list,
}
