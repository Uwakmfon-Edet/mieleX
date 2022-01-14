import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import OrdersPage from "../Orders/OrdersPage"

Given("I am on the nopCommerce demo store home page", () => {
  OrdersPage.loadURL()
})
When("I select the product to purchase", () => {
  OrdersPage.selectMacBookPro()
})
And("I add it to Cart", () => {
  
})
Then("I should be able to checkout after logging in", () => {
 
})
And("Order should be placed successfully", () => {

 })
