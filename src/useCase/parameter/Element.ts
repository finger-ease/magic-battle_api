import elements from '../../data/elements.json';
import { elementType } from '../../types/element';
import { Parameter } from './Parameter';

export class Element extends Parameter {
  override hashToNumber(hash: string, slide: number): number {
    return (
      (parseInt(hash.substring(slide * 4, (slide + 1) * 4), 16) %
        elements.length) +
      1
    );
  }

  get element(): elementType {
    return elements[0];
    // elements.forEach((element) => {
    //   return element.id === this._parameter && element;
    // });
  }
}
