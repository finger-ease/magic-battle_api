import crypto from 'crypto';
import { BattlerType } from '../types/Battler';

export class Battler {
  private name: string;
  private hp: number;
  private mp: number;
  private str: number;
  private def: number;
  private int: number;
  private res: number;
  private agi: number;
  private hash: string;

  constructor(name: string) {
    this.name = name;
    this.hash = this.nameToHash(name);
    this.hp = this.hashToNumber(this.hash, 0);
    this.mp = this.hashToNumber(this.hash, 1);
    this.str = this.hashToNumber(this.hash, 2);
    this.def = this.hashToNumber(this.hash, 3);
    this.int = this.hashToNumber(this.hash, 4);
    this.res = this.hashToNumber(this.hash, 5);
    this.agi = this.hashToNumber(this.hash, 6);
  }

  private nameToHash(name: string) {
    return crypto.createHash('sha256').update(name, 'utf8').digest('hex');
  }

  private hashToNumber(hash: string, slide: number) {
    return (parseInt(hash.substring(slide * 4, (slide + 1) * 4), 16) % 100) + 1;
  }

  get params(): BattlerType {
    return {
      name: this.name,
      hp: this.hp,
      mp: this.mp,
      str: this.str,
      def: this.def,
      int: this.int,
      res: this.res,
      agi: this.agi,
    };
  }
}
