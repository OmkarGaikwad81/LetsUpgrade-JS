/*
Imagine you are going out to do some grocery shopping. 
So you have an array called shoppingList with all the products you want to buy. 
Javascript Essentials | Batch 1 
 
Now that you are inside of the shop, you have a basket with all the products from your list, but you want to add a few more. 
Create a new array called shoppingBasket, that will be a copy of the shoppingList array, and add some new products into it.
*/


let shopping_List =["Shirt","t-shirt","Perfume","goggles","Belt","Shoes","sandels",];

console.log("My shopping list is: ",shopping_List);

let Bucket_List  = [...shopping_List,"Headphones","Locket","Mobile Backcover"];

console.log("My final Bucket List is : ",Bucket_List);