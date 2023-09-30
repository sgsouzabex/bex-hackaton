export interface BexDossieBody {
  contratante: number
  fornecedor: number
  colaboradores?: number[]
  documentos: number[]
  dataInicial: string
  dataFinal: string
  sistema: string
}