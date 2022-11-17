export type Manager = {
  _id?: string,
  userId: string,
  systemId:string,
  active: boolean;
  display_name: string;
  role: Role;
}

export enum Role{
    admin,
    manager,
}