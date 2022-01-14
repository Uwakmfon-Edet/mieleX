/*
This file contains all page elements
*/
const URL = "https://frontend.nopcommerce.com/"
const a_macBookPro = "/html/body/div[6]/div[3]/div/div/div/div/div[4]/div[2]/div[2]/div/div[2]/h2/a"
//"body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div > div.product-grid.home-page-product-grid > div.item-grid > div:nth-child(2) > div > div.details > h2 > a"


class OrdersPage {
  static loadURL() {
    cy.visit(URL);
  }
  static selectMacBookPro() {
  cy.xpath(a_macBookPro).click()
    }
    
}
export default OrdersPage;
