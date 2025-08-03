import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';

@UseGuards(AuthGuard())
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

    @Get()
    getTask(
        @Query() filterDto: GetTaskFilterDto,
        @GetUser() user: User,

    ): Promise<Task[]> {
        return this.taskService.getTask(filterDto, user);
    };

}
