import { useApi } from './api'
import type { ObjetoAnaliseResponse, Tabela } from '~/types'

interface ListParams {
  tabela: Tabela
  contratanteId: string
  contratadaId: string
}
function list(params: ListParams) {
  const { tabela, contratanteId, contratadaId } = params

  return useApi<ObjetoAnaliseResponse>(
    `listar-objetos-analise/${tabela}/${contratanteId}/${contratadaId}`,
  )
}

export default {
  list,
}
