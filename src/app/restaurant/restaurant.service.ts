import { Restaurant } from "./restaurant.model";

export class RestaurantService{
    private restaurants:Restaurant[]=[
        {
          "name": "burger king",
          "image": "https://sifu.unileversolutions.com/image/en-AU/recipe-topvisual/2/1260-709/beef-burger-with-deep-fried-bacon-and-thousand-island-dressing-50247463.jpg",
          "icon": "https://www.festisite.com/static/partylogo/img/logos/burger-king.png",
          "price": 11,
          "rating": 2,
          "reviewsCount": 2,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "starbucks",
          "image": "https://images.financialexpress.com/2016/06/starbucks-reu-L.jpg",
          "icon": "https://cdn.i.haymarketmedia.asia/?n=campaign-india%2Fcontent%2F20160517223434760254_starbucks.gif&h=570&w=855&q=100&v=20170226&c=1",
          "price": 15,
          "rating": 4,
          "reviewsCount": 10,
          "tags": [
            "Espresso",
            "Coffee Frappuccino",
            "latte"
          ]
        },
        {
          "name": "Onesta",
          "image": "https://b.zmtcdn.com/data/daily_menus/013/106013/c31e9610163a1c49864eff436ff84743.jpg",
          "icon": "http://aroundmangalore.com/wp-content/uploads/2017/12/Onesta-Pizzeria-Mak-Mall-Kankanady-Mangalore.jpg",
          "price": 15,
          "rating": 3,
          "reviewsCount": 11,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "pizza hut",
          "image": "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/5/e/z/p54-15137566365a3a17dc61544.jpg?w=1200&q=100",
          "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp4TjK1ZHifK-NBWazyWUPan1bmBrL3SiRyRi1Y7Eq7VY48dhe",
          "price": 20,
          "rating": 3,
          "reviewsCount": 2,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "little itali",
          "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpO_7mc1zGnMlmXVKkvCWcHcy8v3-AQF8OZnWzCSwmRn4PKsXlqA",
          "icon": "http://futurearchitectureplatform.org/media/applications/2018/01/06/Logo_Little_Italy.png",
          "price": 25,
          "rating": 4,
          "reviewsCount": 4,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "KFC",
          "image": "https://www.joc.com/sites/default/files/field_feature_image/KFC_0.png",
          "icon": "https://d3r623tes721q0.cloudfront.net/MEf_blgmN3xYpEGM3409ccd179f577fa5d5dc3bf1910f49959e9ae48/kentucky-fried-chicken-kfc-logo-3536_profile.gif",
          "price": 30,
          "rating": 5,
          "reviewsCount": 12,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "dominoss",
          "image": "https://braziljournal.s3.amazonaws.com/covers/c7ca960f-87f8-0002-0003-9fd33b8cf00b.jpg?v=1533296530",
          "icon": "https://bitcoinist.com/wp-content/uploads/2016/01/Dominos-Pizza.png",
          "price": 10,
          "rating": 4,
          "reviewsCount": 17,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "baskin robbins",
          "image": "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/3/a/y/p3449-144016592855d73028d03f9.jpg?w=1200&q=100",
          "icon": "https://pbs.twimg.com/profile_images/973995484749721601/WZEpvJeD_400x400.jpg",
          "price": 100,
          "rating": 5,
          "reviewsCount": 23,
          "tags": [
            "burger",
            "fries",
            "nuggets",
            "Ice-cream",
            "dessert"
          ]
        },
        {
          "name": "taco bell",
          "image": "https://patch.com/img/cdn20/getty/22917092/20180514/020547/styles/T800x600/public/processed_images/gettyimages-489586482-1526318734-6699.jpg",
          "icon": "data:image/png;base64,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",
          "price": 13,
          "rating": 4,
          "reviewsCount": 16,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "mainland china",
          "image": "https://chandigarhx.com/wp-content/uploads/2017/11/mainland-china.jpg",
          "icon": "https://pbs.twimg.com/profile_images/727050706281189376/dxjeJMe7_400x400.jpg",
          "price": 50,
          "rating": 2,
          "reviewsCount": 9,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        },
        {
          "name": "mac donald",
          "image": "https://media-cdn.tripadvisor.com/media/photo-s/0d/3c/2c/62/mcdonald-s.jpg",
          "icon": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq41WW5X2pjhIosUzYNGsHWGZve-j4f5otvOM0uzwFct6KsOw",
          "price": 20,
          "rating": 3,
          "reviewsCount": 200,
          "tags": [
            "burger",
            "fries",
            "nuggets"
          ]
        }
      ]

getRestaurants(){
    return this.restaurants.slice();
}

}