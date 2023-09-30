import { CreateDateColumn, Index, UpdateDateColumn } from "typeorm";

export abstract class BaseModel {
  @Index()
  @CreateDateColumn({ type: "timestamp", name: "created_at" })
  createdAt!: Date;

  @Index()
  @UpdateDateColumn({ type: "timestamp", name: "updated_at" })
  updatedAt: Date | undefined;
}
