export interface BernDocumentsResponse {
  contratante_id: number
  contratante_cnpj: string
  contratante_descricao: string
  contrato_id: number | null
  numero_contrato: string | null
  contratada_id: number
  contratada_cnpj: string
  contratada_descricao: string
  objeto_analise_id: number
  objeto_descricao: string
  objeto_tipo: string
  colaborador_id: number | null
  colaborador_cpf: string | null
  colaborador_nome: string | null
  documento_id: number
  documento_nome: string
  documento_caminho: string
  documento_tamanho: number
  documento_data_upload: string
}
