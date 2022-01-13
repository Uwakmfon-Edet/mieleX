import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/loginPage"

Given("I am on the Admin portal login page", () => {
 LoginPage.loadAdminPortal()
});
When(
  "I input valid SAPID as {string} and Password ss {string}",
  (SAPID, Password) => {
    LoginPage.enterLoginCreds(SAPID, Password)
    });
And("click the submit button", () => {
  LoginPage.clickSubmitButton()
});
Then("user should be navigated to the token page", () => {
  cy.get('.with-icon > svg').should("be.visible")
});
When("user enters token as {string} and validates", (Token) => {
  LoginPage.enterToken(Token)
});
Then("user should be navigated to the dashboard", () => {
  LoginPage.confirmDashboard()
 });
