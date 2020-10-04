export class Restaurant{
    

    constructor(public name:string,
        public image:string,
        public icon:string,
        public price:number,
        public rating:number,
        public reviewsCount:number,
        public tags:Array<string>){}
    
}