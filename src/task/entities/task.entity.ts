import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Unique } from 'typeorm';
import { TaskStatus } from '../enums/task-status.enum';
import { User } from 'src/auth/entities/user.entity';
import { Exclude } from 'class-transformer';
@Entity()
@Unique(["title"])
export class Task {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    @Unique(["title"])
    title: string;

    @Column()
    description: string;

    @Column()
    status: TaskStatus;
    
    @ManyToOne((type) => User, (user) => user.tasks, { eager: false } )
    @Exclude ({ toPlainOnly: true })
    user: User;

}
