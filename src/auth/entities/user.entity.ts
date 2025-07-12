/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
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

    tasks: Task[];

}
