import { Body, Controller, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('task')
export class TaskController {
    constructor( private taskService: TaskService ) {}

    @Post()
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User,
    ) : Promise<Task> {
        return this.taskService.createTask(createTaskDto, user);
    }

}
