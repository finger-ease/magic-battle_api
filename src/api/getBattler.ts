import { Battler } from '../model/Battler';
import { battlerType } from '../types/battler';

export const getBattler = (name: string): battlerType =>
  new Battler(name).parameters;
