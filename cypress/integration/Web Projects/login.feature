Feature: Login to SSO Admin portal
    I want to be able to login to the Admin portal as a Maker and Checker

    Background: Navigate to landing page
        Given I am on the Admin portal login page

    Scenario: Login to Admin portal as a Maker

        When I input valid SAPID as "C004725" and Password ss "12345"
        And click the submit button
        Then user should be navigated to the token page
        When user enters token as "12345" and validates
        Then user should be navigated to the dashboard

    Scenario: Login to Admin portal as a Checker

        When I input valid SAPID as "A236903" and Password ss "12345"
        And click the submit button
        Then user should be navigated to the token page
        When user enters token as "12345" and validates
        Then user should be navigated to the dashboard