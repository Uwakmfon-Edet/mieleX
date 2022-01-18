Feature: Orders
    I want to be able to place order for a product on nopCommerce website

    Scenario: Order for HTC cellPhone
        Given I ma on the nopCommerce home page
        When  I log in successfully
        And I select the product to purchase
        Then I add product to Cart
        When I checkout
        And Enter shipping details
        Then Order should be placed successfully
