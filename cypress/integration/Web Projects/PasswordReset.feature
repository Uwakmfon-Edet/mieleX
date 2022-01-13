Feature: Reset Password
    I want to be able to initiate and approve password reset from the Admin portal

    Background: Navigate to landing page
        Given I am on the Admin portal login page

    Scenario: Initiate Password Reset

        When I log in as Mar using SAPID "C004725" and Password "12345" with token "12345"
        And i click on the Account menu and search with user "unitz005"
        Then user details should be displayed
        When i select Actions
        And pick option to reset password
        Then password reset should be intiated successfully

    Scenario: Approve Password Reset
        When I log in as Mar using SAPID "A236903" and Password "12345" with token "12345"
        And i click on the Requests tab
        Then pending requests should be displayed
        When  I select More
        And pick option to approve requests
        Then password reset should be approved successfully and password sent to the user