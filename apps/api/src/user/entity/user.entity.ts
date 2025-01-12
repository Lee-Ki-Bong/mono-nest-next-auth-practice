import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"

@Entity("Users")
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: "varchar", length: 255, unique: true })
  email: string

  @Column({ type: "varchar", length: 100 })
  name: string

  @Column({ type: "varchar", length: 255 })
  password: string

  @Column({ type: "text", nullable: true })
  hashed_refresh_token?: string

  @Column({ type: "varchar", length: 50, default: "USER" })
  role: string

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date

  @UpdateDateColumn({ type: "timestamp" })
  update_at: Date
}
