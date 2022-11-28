import { Component } from '@angular/core';

@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {

  nonveg:any=[
    {
      "title":"Burger",
      "image":"https://c.ndtvimg.com/2022-04/k9toe6b8_burger_625x300_23_April_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      "price":"250"
      
    },
    {
      "title":"Club sandwich",
      "image":"https://static.toiimg.com/thumb/83740315.cms?width=1200&height=900",
      "price":"250"

    },
    {
      "title":"Chicken Ham sandwich",
      "image":"https://static.toiimg.com/thumb/84786018.cms?imgsize=390667&width=800&height=800",
      "price":"250"
    },
    {
      "title":"Chicken 'N' Cheese Sandwich",
      "image":"https://d3gy1em549lxx2.cloudfront.net/c41e1f26-d6c0-48d3-88be-54d294b5cec7.jpg",
      "price":"250"
    },
    {
      "title":"Marinated Chicken Club Sandwich",
      "image":"https://img.taste.com.au/epfZdf06/w1200-h630-cfill/taste/2016/11/marinated-chicken-club-sandwich-1970-1.jpeg",
      "price":"250"
    },
    {
      "title":"Pizza",
      "image":"https://5.imimg.com/data5/RI/MN/MY-17758356/imperial-recipe-pizza-non-veg-chicken-heavyweight-i10-500x500.png",
      "price":"250"
    },
    {
      "title":"Chicken Deluxe Pizza",
      "image":"https://5.imimg.com/data5/GW/XW/GLADMIN-15099386/chicken-deluxe-pizza-500x500.png",
      "price":"250"
    }
  ]

}
