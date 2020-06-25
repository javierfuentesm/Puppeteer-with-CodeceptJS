Feature: Login with Page Object Model
 In an example of a Page object Model

  Scenario Outline: Normal login
    Given Im on the right page
    And I login with my <user>$ and <password>$
    Then I should see the home page

    Examples:
      | user | password |
      | username    | password    |
      | 20    | 20    |
      | 21    | 18.9  |
      | 30    | 27    |
      | 50    | 45    |
