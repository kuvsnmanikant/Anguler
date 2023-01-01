// dto means data transwer obj
export class NewNames {
  constructor(
    public name: string = '',
    public age: number = 0,
    public date: Date = new Date()
  ) { }

  public isDone = false;
  done() { this.isDone = !this.isDone; }
}
