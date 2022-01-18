const URL = 'https://demo.nopcommerce.com/'

const a_register = '.ico-register'

const a_electronics = '.notmobile > :nth-child(2) > [href="/electronics"]'
const a_cellPhones = ':nth-child(2) > .sub-category-item > .title > a'
const a_HTCphone = ':nth-child(1) > .product-item > .details > .product-title > a'
const btn_addtoCart = '#add-to-cart-button-18'
const div_navBar = '.bar-notification'
const a_addToCart = '.content > a'
const chkbx_termsAgreement = '#termsofservice'
const btn_checkout = '#checkout'

const txt_firstName = '#FirstName'
const txt_lastName = '#LastName'
const txt_email = '#Email'
const txt_password = '#Password'
const txt_passwordConfirm = '#ConfirmPassword'
const btn_register = '#register-button'
const emailRandom = 'testemail' + Math.floor(Math.random() * 100) + '@qa.team'

const div_successReg = '.result'
const btn_continue = '.buttons > .button-1'

const select_country = '#BillingNewAddress_CountryId'
const txt_city = '#BillingNewAddress_City'
const txt_billingAddress1 = '#BillingNewAddress_Address1'
const txt_zipCode = '#BillingNewAddress_ZipPostalCode'
const txt_phoneNo = '#BillingNewAddress_PhoneNumber'
const btn_billingContinue = '#billing-buttons-container > .new-address-next-step-button'

const btn_shippingMethodContinue = '#shipping-method-buttons-container > .button-1'
const btn_paymentMethodContinue = '#payment-method-buttons-container > .button-1'
const btn_paymentInfoContinue = '#payment-info-buttons-container > .button-1'
const btn_confirmOrder = '#confirm-order-buttons-container > .button-1'
const display_orderSuccess = '.section > .title > strong'
const btn_continueComplete = '.buttons > .button-1'

class ordersPage {
    static loadURL() {
        cy.visit(URL);
    }
    static selectProduct() {
        cy.get(a_electronics).click()
        cy.get(a_cellPhones).click()
        cy.get(a_HTCphone).should('be.visible')
        cy.get(a_HTCphone).click()
    }
    static addToCart() {
        cy.get(btn_addtoCart).should('be.visible')
        cy.get(btn_addtoCart).click()
    }
    static goToCart() {
        cy.get(div_navBar).should('be.visible')
        cy.get(a_addToCart).click()
    }
    static checkout() {
        cy.get(btn_checkout).should('be.visible')
        cy.get(chkbx_termsAgreement).click()
        cy.get(btn_checkout).click()
    }
    static registerUser() {
        cy.get(a_register).should('be.visible')
        cy.get(a_register).click()
        cy.get(btn_register).should('be.visible')
        cy.get(txt_firstName).type('test fname')
        cy.get(txt_lastName).type('test lname')
        cy.get(txt_email).type(emailRandom)
        cy.get(txt_password).type('Test123@4')
        cy.get(txt_passwordConfirm).type('Test123@4')
        cy.get(btn_register).click()
    }
    static verifyRegistration() {
        cy.get(div_successReg).should('be.visible').should('have.text', 'Your registration completed')
        cy.get(btn_continue).click()
    }
    static enterBillingDetails() {
        cy.get(btn_billingContinue).should('be.visible')
        cy.get(select_country).select('Nigeria')
        cy.get(txt_city).type('Lagos')
        cy.get(txt_billingAddress1).type('Lagos-mainland-1')
        cy.get(txt_zipCode).type('2340001')
        cy.get(txt_phoneNo).type('09043323345')
        cy.get(btn_billingContinue).click()
    }
    static enterShippingMethod() {
        cy.get(btn_shippingMethodContinue).should('be.visible')
        cy.get(btn_shippingMethodContinue).click()
    }
    static enterPaymentMethod() {
        cy.get(btn_paymentMethodContinue).should('be.visible')
        cy.get(btn_paymentMethodContinue).click()
    }
    static confirmPaymentInfo() {
        cy.get(btn_paymentInfoContinue).should('be.visible')
        cy.get(btn_paymentInfoContinue).click()
    }
    static confirmOrder() {
        cy.get(btn_confirmOrder).should('be.visible')
        cy.get(btn_confirmOrder).click()
        cy.get('h1').should('have.text', 'Thank you')
        cy.get(display_orderSuccess).should('be.visible').should('have.text', 'Your order has been successfully processed!')
        cy.get(btn_continueComplete).should('be.visible')
        cy.get(btn_continueComplete).click()
    }
}
export default ordersPage;
