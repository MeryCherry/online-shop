export interface CategoriesList{
    name: string;
    key: string;
    type: Array<Category>;
} 
export interface Category {
    name: string;
    key: string;
}