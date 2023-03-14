Feature: Navigate to Challenging DOM and get the value of Answer available in the frame
  As a user
  I want to navigate the challenging DOM and get the answer

  Scenario: navigate and get the answer
    Given I am on the basic authentication page
    When I click the link challenging dom and page should open
    Then I should know get the answer in the frame