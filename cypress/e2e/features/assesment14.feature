Feature: Click on Notification Messages and get the notification message available on the page.

As a user i want to Navigate notification message page and validate message is available on the page.

  Scenario: Navigate to multiple window and click on new window link and get the tittle
    Given I am on the basic authentication page
    When I click on Notification Message and it should open notification message page.
    Then Get the notification message available on the page or not
    