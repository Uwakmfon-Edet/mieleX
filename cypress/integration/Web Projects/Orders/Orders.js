import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import OrdersPage from "../Orders/OrdersPage"
import 'cypress-iframe'
cy.frameLoaded('[data-cy="the-frame"]')

Given("I am on the nopCommerce demo store home page", () => {
  OrdersPage.loadURL()
})
When("I select the product to purchase", () => {
  //  OrdersPage.selectMacBookPro()
  cy.iframe().find('.product-title').should('have.text', 'Apple MacBook Pro 13-inch').click()

})
And("I add it to Cart", () => {

})
Then("I should be able to checkout after logging in", () => {

})
And("Order should be placed successfully", () => {

})
