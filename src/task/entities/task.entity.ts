import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TaskStatus } from '../enums/task-status.enum';
import { User } from 'src/auth/entities/user.entity';
@Entity()
export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
    
    @ManyToOne((type) => User, (user) => user.tasks, { eager: false } )
    user: User;

}
