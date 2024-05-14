export interface Post {
    id?: string
    createdAt?: string
    title?: string
    message?: string
    imageUrl?: string
    link?: string
}

export enum ButtonType {
    action = 'action',
    delete = 'delete',
    close = 'cancel'
}

export interface Data {
    posts?: Post[]
}