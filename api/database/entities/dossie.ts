import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { DossieDocumentos } from "./dossie-document";
import { BaseModel } from "../baseModel";

@Entity("Dossie")
export class Dossie extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  contratante_id!: number;

  @Column()
  contratada_id!: number;

  @Column()
  numero_contrato!: string;

  @Column()
  sistema_origem!: string;

  @Column()
  qtde_documentos!: number;

  @Column()
  qtde_colaboradores!: number;

  @Column()
  status!: string;

  @OneToMany(() => DossieDocumentos, (dossieDocumentos) => dossieDocumentos.dossie)
  documentos: DossieDocumentos[];
}
