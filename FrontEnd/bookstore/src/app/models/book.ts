import { Category } from './category';

export class Book{
    public id: number;
    public name: string;
    public sku: string;
    public description: string;
    public price: number;
    public image: string;
    public active: boolean;
    public stock: number;
    public category: Category;
}