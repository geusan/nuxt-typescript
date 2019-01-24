import ISample from './interfaces/ISample'

class Sample implements ISample {

  private _Sample: ISample

  constructor(sample: ISample) {
    this._Sample = sample
  }

  get name(): string {
    return this._Sample.name
  }

  get age(): number {
    return this._Sample.age
  }

}

export default Sample
