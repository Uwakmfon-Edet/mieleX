Feature: Orders
    I want to be able to successfully place order on the nopCommerce Store

    Scenario: Place order for an Apple MacBook Pro

      Given I am on the nopCommerce demo store home page
      When I select the product to purchase
      And I add it to Cart
      Then I should be able to checkout after logging in
      And Order should be placed successfully

