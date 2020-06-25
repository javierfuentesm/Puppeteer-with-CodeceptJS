Feature: Login with Page Object Model
 In an example of a Page object Model

  Scenario Outline: Normal login
    Given Im on the right page
    And I login with my <user>$ and <password>$
    Then I should see the home page

    Examples:
      | user | password |
      | username    | password    |
