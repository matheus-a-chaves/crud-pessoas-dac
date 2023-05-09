export class Endereco {
  constructor(
    public id?: number,
    public rua?: string,
    public numero?: number,
    public cidade?: string,
    public estado?: string,
    public residencial?: boolean
  ) {}
}
