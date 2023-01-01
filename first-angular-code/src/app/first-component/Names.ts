export class Names {
  constructor(public name: string) { }
  public isDone = false;
  done() { this.isDone = !this.isDone; }
}
