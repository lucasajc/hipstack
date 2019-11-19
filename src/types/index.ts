export type item = {
    id: number,
    name: string,
    description: string,
    quantity: number,
    imageUrl: string,
    type: itemType,
}

export enum itemType {
    frame = 'FRAME',
    accessories = 'ACCESSORIES',
}
