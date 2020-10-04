import { Category } from "./categories.model";

export class CategoriesService{
    private categories:Category[]=[
        {
            "name": "burger",
            "image": "http://www.myiconfinder.com/uploads/iconsets/256-256-8a98392e8674eb71887ee57b861dd1c0-Burger.png",
            "restaurants": 20
          },
          {
            "name": "pizza",
            "image": "http://icons.iconarchive.com/icons/sonya/swarm/256/Pizza-icon.png",
            "restaurants": 43
          },
          {
            "name": "taco",
            "image": "https://image.flaticon.com/icons/png/128/129/129201.png",
            "restaurants": 13
          },
          {
            "name": "noodles",
            "image": "http://www.myiconfinder.com/uploads/iconsets/256-256-22e427c0cdcb235e6639fa4f3ee8ac39-noodles.png",
            "restaurants": 30
          },
          {
            "name": "pasta",
            "image": "https://cdn6.aptoide.com/imgs/8/8/6/886e30ce059746507dfd41ee5b590174_icon.png?w=256",
            "restaurants": 29
          }
    ]

    getCategories(){
        return this.categories.slice();
    }
}