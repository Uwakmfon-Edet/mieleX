const menu_Accounts = ":nth-child(2) > .nav-link";
const txt_search = ".icon";
const btn_search = ".group > .sc-hKgILt";
const display_acctStatus = ".table-status";
const menu_Actions= ":nth-child(7) > .sc-hBEYos";
const select_selectAnAction = ".select-header > .sc-hBEYos";
const option_passwordReset = ".options-list > :nth-child(1)";
const btn_submitRequest = ".gEyXjL";
const txt_success = ".request-success"

class PasswordResetPage_Maker {
  static clickAccountLink() {
    cy.get(menu_Accounts).click({ force: true });
  }
  static searchUser(OnePAssID) {
    cy.get(txt_search).type(OnePAssID);
    cy.get(btn_search).click();
  }
  static confirmUserDetails() {
    cy.get(display_acctStatus).should("be.visible");
  }
  static clickActions(){
    cy.get(menu_Actions).click({ force: true });
  }
  static selectActions(){
    cy.get(select_selectAnAction).click();
  }
  static clickSubmitRequest(){
    cy.get(btn_submitRequest).click();
  }
  static resetPassword(){
    cy.get(select_selectAnAction).click();
    cy.get(option_passwordReset).click();
    cy.get(btn_submitRequest).click();
  }
  static confirmSubmission(){
    cy.get(txt_success).should("be.visible");
  //  cy.get(txt_success).should('contain', 'Request successfully created')
  }

  static serachUserComplete(OnePAssID){
      this.searchUseru(OnePAssID)
      this.confirmUserDetails()
  }
}
export default PasswordResetPage_Maker;
