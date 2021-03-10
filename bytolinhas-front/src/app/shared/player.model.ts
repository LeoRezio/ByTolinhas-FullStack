export class Player {
  constructor(
    public _id: string,
    public imgHero: string,
    public name: string,
    public nick: string,
    public role: [string, string],
    public instagram: string,
    public date: string,
    public city: string
  ) {}
}
