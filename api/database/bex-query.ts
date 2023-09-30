export const QUERY = `
select
    -- Contratante
    c.id              as contratante_id,
    c.cnpj            as contratante_cnpj,
    c.trading_name    as contratante_descricao,
    -- Contrato
    co.id             as contrato_id,
    pro.contract      as numero_contrato,
    -- Fornecedora
    p.id              as contratada_id,
    p.cnpj            as contratada_cnpj,
    p.trading_name    as contratada_descricao,
    -- Documento
    sp.id             as objeto_analise_id,
    sp.name           as objeto_descricao,
    sp.type           as objeto_tipo,
    -- Colaborador
    e.id              as colaborador_id,
    e.document        as colaborador_cpf,
    e.name            as colaborador_nome,
-- Documento
    doc.id            as documento_id,
    doc.filename      as documento_nome,
    doc.bucket_doc_id as documento_caminho,
    doc.size          as documento_tamanho,
    doc.created_at    as documento_data_upload
from document doc
         inner join pendency pe on doc.pendency_id = pe.id and pe.deleted = false
         inner join company c on c.id = pe.company_id
         inner join company p on p.id = pe.provider_id
         inner join employee e on e.id = pe.employee_id
         inner join contract co on e.id = co.employee_id and co.project_id = pe.project_id
         inner join project pro on pro.id = pe.project_id
         inner join system_pendency sp on pe.pendency_id = sp.id
where pe.company_id = 1672
  and pe.provider_id = 1676
  and pe.employee_id = 16791
  and sp.id IN (
                15, 15, 15, 27, 24, 16, 19, 23
    )
  and pe.created_at between '2021-01-01'
    and '2023-12-30'

union

select
    -- Contratante
    c.id              as contratante_id,
    c.cnpj            as contratante_cnpj,
    c.trading_name    as contratante_descricao,
    -- Contrato
    null              as contrato_id,
    null              as numero_contrato,
    -- Fornecedora
    p.id              as contratada_id,
    p.cnpj            as contratada_cnpj,
    p.trading_name    as contratada_descricao,
    -- Documento
    sp.id             as objeto_analise_id,
    sp.name           as objeto_descricao,
    sp.type           as objeto_tipo,
    -- Colaborador
    null              as colaborador_id,
    null              as colaborador_cpf,
    null              as colaborador_nome,
-- Documento
    doc.id            as documento_id,
    doc.filename      as documento_nome,
    doc.bucket_doc_id as documento_caminho,
    doc.size          as documento_tamanho,
    doc.created_at    as documento_data_upload
from document doc
         inner join pendency pe on doc.pendency_id = pe.id and pe.deleted = false
         inner join company c on c.id = pe.company_id
         inner join company p on p.id = pe.provider_id
         inner join project pro on pro.id = pe.project_id
         inner join system_pendency sp on pe.pendency_id = sp.id and sp.type in (
    'PROVIDER'
    )
where pe.company_id = 1672
  and pe.provider_id = 1676
  and pe.project_id in (select project_id
                        from pendency pe
                        where pe.company_id = 1672
                          and pe.provider_id = 1676
                          and pe.employee_id = 16791
                          and pe.pendency_id IN (
                                                 15,
                                                 15,
                                                 15,
                                                 27,
                                                 24,
                                                 16,
                                                 19,
                                                 23
                            )
                          and pe.created_at between '2021-01-01' and '2023-12-30')
  and pe.created_at between '2021-01-01' and '2023-12-30';
`