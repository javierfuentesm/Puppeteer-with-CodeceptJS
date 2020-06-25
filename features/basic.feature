Feature: Login
  In order to enter the page
  As a persona
  I want to be login into the system

  Scenario: Normal login
    Given Im on the right page
    And I click on login
    And I type my email
    And I type my password
    And I submit the form
    Then I should see the home page



