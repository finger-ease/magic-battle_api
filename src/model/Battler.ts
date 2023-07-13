import { battlerType } from '../types/battler';
import { HitPoint } from '../useCase/parameter/HitPoint';
import { ActionPoint } from '../useCase/parameter/ActionPoint';
import { Strength } from '../useCase/parameter/Strength';
import { Defense } from '../useCase/parameter/Defense';
import { Intelligence } from '../useCase/parameter/Intelligence';
import { Resist } from '../useCase/parameter/Resist';
import { Agility } from '../useCase/parameter/Agility';
import { Element } from '../useCase/parameter/Element';
import { Slide } from '../useCase/Slide';

export class Battler {
  private _name: string;
  private _HitPoint: HitPoint;
  private _ActionPoint: ActionPoint;
  private _Strength: Strength;
  private _Defense: Defense;
  private _Intelligence: Intelligence;
  private _Resist: Resist;
  private _Agility: Agility;
  private _Element: Element;

  constructor(name: string) {
    this._name = name;
    this._HitPoint = new HitPoint(name);
    this._ActionPoint = new ActionPoint(name);
    this._Strength = new Strength(name);
    this._Defense = new Defense(name);
    this._Intelligence = new Intelligence(name);
    this._Resist = new Resist(name);
    this._Agility = new Agility(name);
    this._Element = new Element(name);
    Slide.init();
  }

  get parameters(): battlerType {
    return {
      name: this._name,
      hitPoint: this._HitPoint.parameter,
      actionPoint: this._ActionPoint.parameter,
      strength: this._Strength.parameter,
      defense: this._Defense.parameter,
      intelligence: this._Intelligence.parameter,
      resist: this._Resist.parameter,
      agility: this._Agility.parameter,
      element: this._Element.element.name,
    };
  }
}
