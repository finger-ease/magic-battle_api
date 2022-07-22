import { Hash } from '../Hash';
import { Slide } from '../Slide';

export class Parameter {
  protected _parameter: number;

  constructor(name: string) {
    const hash = new Hash(name).hash;
    this._parameter = this.hashToNumber(hash, Slide.increment());
  }

  protected hashToNumber(hash: string, slide: number): number {
    return (parseInt(hash.substring(slide * 4, (slide + 1) * 4), 16) % 100) + 1;
  }

  get parameter(): number {
    return this._parameter;
  }
}
