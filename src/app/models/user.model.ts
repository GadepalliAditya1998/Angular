export class User {
  id: number;
  name: string;

  constructor(args: any) {
    this.id = args.id;
    this.name = args.name;
  }
}
