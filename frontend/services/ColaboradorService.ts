import { useApi } from './api'
import type { ColaboradorResponse } from '~/types'

interface ListParams {
  tabela: string
  contratanteId: string
  contratadaId: string
}

function list(params: ListParams) {
  const { tabela, contratanteId, contratadaId } = params

  return useApi<ColaboradorResponse>(
    `listar-colaboradores/${tabela}/${contratanteId}/${contratadaId}`,
  )
}

export default {
  list,
}
