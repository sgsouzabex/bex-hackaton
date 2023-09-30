/* eslint-disable max-len */
export const BERN_DOCUMENTS_QUERY = `
declare @contratante int = 61;
declare @contratada int = 27257;
declare @objeto_analise_id varchar(255) = null;
declare @colaborador_id varchar(255) = null;

with cte_escopo as 
(
select distinct
       contratante_id
     , contratante_cnpj
     , contratante_descricao
     , contrato_id
     , numero_contrato
     , contratada_id
     , contratada_cnpj
     , contratada_descricao
     , objeto_analise_id
     , objeto_descricao
     , objeto_tipo
     , colaborador_id
     , colaborador_cpf
     , colaborador_nome
     , documento_id
     , documento_nome
     , documento_caminho
     , documento_tamanho
     , documento_data_upload
from   documentos_v3
where 1=1
and (contratante_id = @contratante)
and (contratada_id = @contratada)
)

select * from cte_escopo a
where a.objeto_tipo = 'Empresa'
and (@objeto_analise_id is null or (a.objeto_analise_id in (select value from STRING_SPLIT(@objeto_analise_id,','))))

union all

select * from cte_escopo a
where a.objeto_tipo = 'Trabalhista'
and (@objeto_analise_id is null or (a.objeto_analise_id in (select value from STRING_SPLIT(@objeto_analise_id,','))))
and (@colaborador_id is null or (a.colaborador_id in (select value from STRING_SPLIT(@colaborador_id,','))))
`;
