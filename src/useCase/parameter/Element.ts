import { Parameter } from './Parameter';

export class Element extends Parameter {
  override hashToNumber(hash: string, slide: number): number {
    return (parseInt(hash.substring(slide * 4, (slide + 1) * 4), 16) % 6) + 1;
  }

  get element(): string {
    switch (this._parameter) {
      case 0:
        return '炎';
      case 1:
        return '水';
      case 2:
        return '地';
      case 3:
        return '風';
      case 4:
        return '光';
      case 5:
        return '闇';
      default:
        return '';
    }
  }
}
