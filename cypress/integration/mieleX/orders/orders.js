import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import ordersPage from "../orders/ordersPage";

Given("I am on the nopCommerce home page", () => {
    ordersPage.loadURL()
})
When("I log in successfully", () => {
    ordersPage.registerUser()
    ordersPage.verifyRegistration()
})
And("I select the product to purchase", () => {
    ordersPage.selectProduct()
})
Then("I add product to Cart", () => {
    ordersPage.addToCart()
    ordersPage.goToCart()
})
When("I checkout", () => {
    ordersPage.checkout()
})
And("Enter shipping details", () => {
    ordersPage.enterBillingDetails()
    ordersPage.enterShippingMethod()
    ordersPage.enterPaymentMethod()
    ordersPage.confirmPaymentInfo()
})
Then("Order should be placed successfully", () => {
    ordersPage.confirmOrder()
})