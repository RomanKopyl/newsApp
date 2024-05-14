export interface Post {
    createdAt?: string
    title?: string
    text?: string
    imageUrl?: string
    link?: string
}

export enum ButtonType {
    action = 'action',
    delete = 'delete',
    close = 'cancel'
}