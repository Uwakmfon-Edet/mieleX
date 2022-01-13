import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../login/loginPage";
import PasswordResetPage_Maker from "./PasswordResetPage_Maker";
import PasswordReset_Checker from "./PasswordReset_Checker";

Given("I am on the Admin portal login page", () => {
  LoginPage.loadAdminPortal();
});

When(
  "I log in as Mar using SAPID {string} and Password {string} with token {string}",
  (SAPID, Password, Token) => {
    LoginPage.loginComplete(SAPID, Password, Token);
  }
);
And(
  "i click on the Account menu and search with user {string}",
  (OnePAssID) => {
    PasswordResetPage_Maker.clickAccountLink();
    PasswordResetPage_Maker.searchUser(OnePAssID);
     }
);

Then("user details should be displayed", () => {
  PasswordResetPage_Maker.confirmUserDetails();
});
When("i select Actions", () => {
  PasswordResetPage_Maker.clickActions();
});
And("pick option to reset password", () => {
  PasswordResetPage_Maker.resetPassword();
});
Then("password reset should be intiated successfully", () => {
  PasswordResetPage_Maker.confirmSubmission();
});

/*
    These steps cater for the Checker's (Approval) actions
    */

And("i click on the Requests tab", () => {
  PasswordReset_Checker.clickRequests();
});
Then("pending requests should be displayed", () => {
  PasswordReset_Checker.confrimPending();
});
When("I select More", () => {
  PasswordReset_Checker.clickMore();
});
And("pick option to approve requests", () => {
  PasswordReset_Checker.approveRequest();
});
Then(
  "password reset should be approved successfully and password sent to the user",
  () => {
    PasswordResetPage_Maker.confirmSubmission();
  }
);
