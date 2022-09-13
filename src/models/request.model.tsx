export type Request = {
    _id?: string,
    userId: string,
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    systemId:string,
    display_name: string,
    status:Status,
    notes:string,
    name:string,
    description:string,
    lat: number,
    lng: number
}

export enum Status{
  sent,
  pending,
  approve,
  reject,
}
