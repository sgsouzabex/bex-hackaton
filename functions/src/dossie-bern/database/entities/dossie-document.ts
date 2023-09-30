import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Dossie } from './dossie';
import { BaseModel } from './baseModel';

@Entity({ name: 'DossieDocumentos' })
export class DossieDocumentos extends BaseModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nome!: string;

  @Column()
  caminho!: string;

  @Column()
  tamanho!: number;

  @Column()
  data_upload!: Date;

  @ManyToOne(() => Dossie, dossie => dossie.documentos)
  dossie!: Dossie;
}