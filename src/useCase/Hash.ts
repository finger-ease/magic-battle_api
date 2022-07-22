import crypto from 'crypto';

export class Hash {
  private _hash: string;

  constructor(name: string) {
    this._hash = crypto.createHash('sha256').update(name, 'utf8').digest('hex');
  }

  get hash(): string {
    return this._hash;
  }
}
