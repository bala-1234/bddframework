Feature: Navigate to Multiple Windows and click on New Window link.
Get the title on the new window.

As a user i want to Navigate to multiple window and click on new window link and get the title on the new window.

  Scenario: Navigate to multiple window and click on new window link and get the tittle
    Given I am on the basic authentication page
    When I click on multiple windows and click on new wihdow link
    Then Get the title of the window
    