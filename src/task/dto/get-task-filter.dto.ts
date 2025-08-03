import { IsOptional, IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';
export class GetTaskFilterDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
