Feature: Broken images
  As a user
  I want to check the images count on the page

  Scenario: count the images on the screen
    Given I am on the basic authentication page
    When I click the link "Broken Images"
    Then I should count the images