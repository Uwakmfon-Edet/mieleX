/*
This file contains all page lements and interactions with them.
*/
const API_URL = "https://80.248.0.83:8091/UAM.API/swagger/index.html";
const Admin_URL = "https://onepass-backoffice.netlify.app/";
const txt_SAPID = ":nth-child(1) > div > input";
const txt_Password = ".with-icon > input";
const btn_submit = ".sc-hKgILt";
const txt_token = "input[type = 'password']";
const btn_tokenLogin = ".sc-hKgILt";

class LoginPage {
  static loadAPIDoc() {
    cy.visit(API_URL);
  }
  static loadAdminPortal() {
   cy.visit(Admin_URL);
    }
  static enterLoginCreds(SAPID, Password) {
    cy.get(txt_SAPID).type(SAPID);
    cy.get(txt_Password).type(Password);
  }
  static clickSubmitButton() {
    cy.get(btn_submit).last().click();
  }

  static enterToken(Token) {
    cy.wait(9000);
    cy.get(txt_token).type(Token);
    cy.get(btn_submit).click();
      }

      static confirmDashboard(){
        cy.get(' #Capa_1').should("be.visible")
      }

  static loginComplete(SAPID, Password, Token) {
    this.enterLoginCreds(SAPID, Password);
    this.clickSubmitButton();
    this.enterToken(Token);
    this.confirmDashboard();
  }
}
export default LoginPage;
