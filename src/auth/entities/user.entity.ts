/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/task/entities/task.entity'
@Entity()
@Unique(["username"])
export class User {
    @PrimaryGeneratedColumn('increment')
    id_user: number;

    @Column()
    @Unique(["username"])
    username: string;

    @Column()
    password: string;

    @OneToMany((type) => Task, (task) => task.user, { eager: true })
    tasks: Task[];

}
