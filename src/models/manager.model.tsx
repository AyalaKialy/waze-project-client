export type Manager = {
  _id?: string,
  userId: string,
  systemId:string,
  active: boolean;
  display_name: string;
  role: Role;
// invitation_sent
}

export enum Role{
    admin,
    manager,
}