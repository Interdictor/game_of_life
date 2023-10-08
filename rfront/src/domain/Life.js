export class Life {
  constructor() {
    this.dev = 'hola'
    this.observers = []
  }

  update() {
    this.dev = 'updateado'
    this._notifyObservers()
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  serialize() {
    return {
      dev: this.dev,
      tissue: [1, 2, 3, 4]
    }
  }

  _notifyObservers() {
    for (const observer of this.observers) {
      observer(this.serialize())
    }
  }
}
