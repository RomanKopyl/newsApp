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
    delete = 'delete'
}

export interface Data {
    posts?: Post[]
    isLoading?: boolean
}