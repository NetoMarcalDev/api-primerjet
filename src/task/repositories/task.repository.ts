import { Repository, EntityRepository, QueryFailedError } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { User } from 'src/auth/entities/user.entity';
import { TaskStatus } from '../enums/task-status.enum';
import { ConflictException } from '@nestjs/common';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {     
  try {
    const { title, description } = createTaskDto;
    const task = await this.create({
      title,
      description,
      status: TaskStatus.ABERTO,
      user
    });
      await this.save(task);
      return task;
  } catch (error) {
    if (error.code === '23505') {
      throw new ConflictException("Título já cadastrado.");
    } else {
       throw new ConflictException("Erro ao cadastrar tarefa", error);
    }
  }    
  }
}
