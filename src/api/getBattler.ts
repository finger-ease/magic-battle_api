import { Battler } from '../model/Battler';
import { BattlerType } from '../types/Battler';

export const getBattler = (name: string): BattlerType =>
  new Battler(name).params;
