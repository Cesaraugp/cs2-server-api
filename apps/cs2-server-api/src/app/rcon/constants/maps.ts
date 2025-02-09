import { ConstToUnion } from '../../../helpers/';

export const NATIVE_MAPS = {
  NUKE: 'de_nuke',
  INFERNO: 'de_inferno',
  MIRAGE: 'de_mirage',
  OVERPASS: 'de_overpass',
  PALAIS: 'de_palais',
  WHISTLE: 'de_whistle',
  DUST2: 'de_dust2',
  VERTIGO: 'de_vertigo',
} as const;

export const WORKSHOP_MAPS = {
  MINI_VERTIGO: '3317783114',
  MINI_TRAIN: '3078140567',
  MINI_MIRAGE: '3078159846',
  MINI_DUST2: '3261159046',
  MEMENTO: '3165559377',
  MINI_ANUBIS: '3118830933',
} as const;

export const MAPS = {
  ...NATIVE_MAPS,
  ...WORKSHOP_MAPS,
};

export type NATIVE_MAPS = ConstToUnion<typeof NATIVE_MAPS>;
export type WORKSHOP_MAPS = ConstToUnion<typeof WORKSHOP_MAPS>;

export type MAPS = NATIVE_MAPS | WORKSHOP_MAPS;
