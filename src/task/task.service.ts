import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './repositories/task.repository';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class TaskService {
    constructor(
        @InjectRepository(TasksRepository)
        private tasksRepository: TasksRepository,
  ) {}

    createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
        return this.tasksRepository.createTask(createTaskDto, user);
    }
}
