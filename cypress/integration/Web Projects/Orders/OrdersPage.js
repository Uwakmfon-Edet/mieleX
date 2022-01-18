/*
This file contains all page elements
*/


const URL = "https://frontend.nopcommerce.com/"
//const a_macBookPro = ".dropdown-toggle"
const a_macBookPro = ".top-menu notmobile > li"
const a_macBookPro_1 = ".theme-desc"


class OrdersPage {
  static loadURL() {
    cy.visit(URL);
  }
  static selectMacBookPro() {
    cy.getIframeBody().find('.product-title').should('have.text', 'Apple MacBook Pro 13-inch').click()
  }

}
export default OrdersPage;
