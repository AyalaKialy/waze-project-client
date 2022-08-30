export type Request = {
    _id?: string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    systemId:string,
    display_name: string,
    status:Status,
    notes:string
}

export enum Status{
  sent,
  pending,
  approve,
  reject,
}
