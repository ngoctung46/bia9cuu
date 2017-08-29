export class Category {
    _id?: string;
    name: string;
    description: string;
    imageUrl: string;
    subCategories: Category[];
    constructor(obj?: any){
        this._id = obj && obj._id || "";
        this.name = obj && obj.name || "";
        this.description = obj && obj.description || "";
        this.imageUrl = obj && obj.imageUrl || "";
        this.subCategories = obj && obj.subCategories || "";
    }
}