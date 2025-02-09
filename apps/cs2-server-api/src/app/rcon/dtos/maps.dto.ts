import { IsEnum, IsNotEmpty } from 'class-validator';
import { MAPS } from '../constants/';

export class ChangeMapDto {
  @IsNotEmpty()
  @IsEnum(MAPS)
  map: MAPS;
}
