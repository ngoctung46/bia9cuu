export interface MenuItem {
    _id?: string,
    name: string,
    description: string,
    subItems: MenuItem[]
}