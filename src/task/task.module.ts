import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksRepository } from './repositories/task.repository';
import { TaskService } from './task.service';

@Module({
  imports: [TypeOrmModule.forFeature([TasksRepository])],
  controllers: [TaskController],
  providers: [TaskService]
})
export class TaskModule {}
