import { IsString, IsNumber } from 'class-validator';

export class CreateExpenseDto {
  @IsString()
  public title: string;

  @IsString()
  public description: string;

  @IsNumber()
  public amount: number;

  @IsString()
  public category: string;

  @IsNumber()
  public createdDate: number;

  @IsNumber()
  public updatedDate: number;

  @IsNumber()
  public latitude: number;

  @IsNumber()
  public longitude: number;
}
