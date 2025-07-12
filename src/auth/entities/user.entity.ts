/* eslint-disable prettier/prettier */
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Task } from 'src/task/entities/task.entity'
@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id_user: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany((type) => Task, (task) => task.user, { eager: true })
    tasks: Task[];

}
