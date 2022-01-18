import 'cypress-iframe'


describe("Orders e2e", function () {
  it("Selects the product to purchase", function () {
    cy.visit('https://frontend.nopcommerce.com/')
    cy.frameLoaded('iframe')
    cy.iframe().find('.product-title').should('be.visible')
    cy.iframe().find('.product-title > a')
    .last()
    .click()
   })
  /*
  it("Click on Input Forms link", function () {
    ajaxFormPage.clickInputForm();
  })
  it("Click Ajax Form Submit", function () {
    ajaxFormPage.clickAjaxForm();
  })
  it("Fill form details and submit", function () {
    ajaxFormPage.enterName();
    ajaxFormPage.enterComment();
    ajaxFormPage.clickSubmit();
  });
  it("Verify form is submitted", function () {
    ajaxFormPage.verifySubmit();
  });
  */
});
