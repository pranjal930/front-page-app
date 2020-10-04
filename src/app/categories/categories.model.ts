export class Category{
    public name:string;
    public image:string;
    public restaurants:number;

    constructor(name:string,image:string,restaurants:number){
        this.name=name;
        this.image=image;
        this.restaurants=restaurants;
    }
}