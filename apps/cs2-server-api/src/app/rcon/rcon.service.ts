import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRcon } from '@the-software-compagny/nestjs_module_rcon';
import { Rcon } from 'rcon-client';
import { MAPS, WORKSHOP_MAPS } from './constants/';

@Injectable()
export class RconService {
  constructor(@InjectRcon() private readonly rconClient: Rcon) {}

  async changeMap(map: MAPS) {
    if (!Object.keys(MAPS).includes(map)) {
      throw new BadRequestException('Map not found');
    }

    if (Object.keys(WORKSHOP_MAPS).includes(map)) {
      return this.rconClient.send(`host_workshop ${map}`);
    }

    return this.rconClient.send(`changelevel ${map}`);
  }

  async isOn() {
    return this.rconClient.authenticated;
  }
}
