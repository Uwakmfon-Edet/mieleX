const menu_Requests = ":nth-child(2) > .nav-link";
const btn_pending = ":nth-child(1) > :nth-child(5) > .table-status";
const menu_More = ":nth-child(1) > :nth-child(8) > .sc-fFubgz";
const display_confirmName = ".input-group > .input > div";
const btn_ApproveRequest = ".gEyXjL";
const display_Success = ".request-success";

class PasswordReset_Checker {
  static clickRequests() {
    cy.get(menu_Requests).click({ force: true });
  }
  static confrimPending() {
    cy.get(btn_pending).should("be.visible");
  }
  static clickMore() {
    cy.get(menu_More).click();
  }
  static approveRequest() {
    cy.get(display_confirmName).should("be.visible");
    cy.get(btn_ApproveRequest).click();
  }
}
export default PasswordReset_Checker;
