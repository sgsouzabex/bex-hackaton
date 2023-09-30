import { SystemsConfig } from "./system";

export interface DossieBody {
  contractor: number;
  supplier: number;
  employees?: number[];
  documents: number[];
  startDate: string;
  endDate: string;
  system: string;
}

export interface SingleDossieRequest {
  contractor: number;
  supplier: number;
  employee: number;
  documents: number[];
  startDate: string;
  endDate: string;
  config: SystemsConfig;
}