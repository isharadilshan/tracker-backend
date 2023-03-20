import { IsString, IsNumber } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsString()
  public category: string;

  @IsString()
  public status: string;

  @IsNumber()
  public createdDate: number;

  @IsNumber()
  public updatedDate: number;
}
