import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ type: 'enum', enum: ['OPEN', 'DONE'] })
  status: 'OPEN' | 'DONE';

  constructor(id, title: string, description: string, status: 'OPEN' | 'DONE') {
    this.title = title;
    this.id = id.toString()
    this.description = description;
    this.status = status;
     this.status = 'OPEN'; // 
  }

  setDescription(newDescription: string): void {
    this.description = newDescription;
  }
}
