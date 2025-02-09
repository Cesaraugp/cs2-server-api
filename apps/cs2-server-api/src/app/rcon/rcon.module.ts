import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  RconModule,
  RconOptions,
} from '@the-software-compagny/nestjs_module_rcon';
import { RconController } from './rcon.controller';
import { RconService } from './rcon.service';

@Module({
  imports: [
    RconModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        return {
          config: config.get<RconOptions>('rcon.options'),
        };
      },
    }),
  ],
  controllers: [RconController],
  providers: [RconService, RconModule],
})
export class RconMod {}
