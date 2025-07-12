import { Repository, EntityRepository } from 'typeorm';
import { Task } from '../entities/task.entity';
import { CreateTaskDto } from '../dto/create-task.dto';
import { User } from 'src/auth/entities/user.entity';
import { TaskStatus } from '../enums/task-status.enum';

@EntityRepository(Task)
export class TasksRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto, user: User): Promise<Task> {
    const { title, description } = createTaskDto;
    const task = await this.create({
      title,
      description,
      status: TaskStatus.ABERTO,
    });

    await this.save(task);
    return task;
  }
}
