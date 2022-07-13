export interface PostParcel  {
    name: string
    description: string
    weight: number
    destination: string
    photo: string
}


export interface Parcel  {
    name: string
    description: string
    weight: any
    price: number
    parcel_status: any
    destination: any
    photo: {url: string}
}
