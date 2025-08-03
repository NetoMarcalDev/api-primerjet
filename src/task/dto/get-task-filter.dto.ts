import { IsOptional, IsEnum, isString, IsString } from 'class-validator';
import { TaskStatus } from '../enums/task-status.enum';

export class GetTaskFilterDto {
    @IsOptional()
    @IsEnum()
    status?: TaskStatus;

    @IsOptional()
    @IsString()
    search: string;
}