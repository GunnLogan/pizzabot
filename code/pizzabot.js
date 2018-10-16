const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

const pizza=["Vegetarian","Hawian","Pepperoni"]

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`)

let orderName = prompt("Enter the name of the pizza you want to order today.")
if (pizza){}

//When the user enters the orderName prompt, add an if-statement
//to check if the input text matches any of the pizza name variables
//(vegetarian, hawaiian, pepperoni).


//Finally, clean up your code by moving some code into functions and then
//calling that function when needed.
//The functions should all reflect the tasks we've completed so far.
//So, the functions should be:
//checkOrderName() which should take the orderName variable as an
//argument and return true or false if the pizza is on the menu or not.
//totalCost() which takes orderQuantity as an argument and returns the
//total cost for the order.
//cookingTime() which takes orderQuantity and returns the number of
//minutes it will take to finish the order.

let orderQuantity = prompt(`How many of ${orderName} do you want?`)

let orderTotal = pizzaPrice * orderQuantity


const getCookingTime = (numberOfPizza) => {
  if (numberOfPizza >= 1 && numberOfPizza <= 2) {
    return 10
  } if (numberOfPizza >= 3 && numberOfPizza <= 5) {
    return 15
  } if (numberOfPizza >= 6) {
    return 20
  }
}



const cookingTime = getCookingTime(orderQuantity)



alert(`Great I'll get started on your ${orderName} right away, it will cost you ${orderTotal} kr. The pizzas will take ${cookingTime} minutes.`)
