import { Body, Controller, Get, Injectable, Post } from '@nestjs/common';
import { ChangeMapDto } from './dtos/';
import { RconService } from './rcon.service';

@Controller('rcon')
@Injectable()
export class RconController {
  constructor(private readonly rconService: RconService) {}

  @Get('is-on')
  isOn() {
    return this.rconService.isOn();
  }

  @Post('change-map')
  changeMap(@Body() changeMapDto: ChangeMapDto) {
    return this.rconService.changeMap(changeMapDto.map);
  }
}
