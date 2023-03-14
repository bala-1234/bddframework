Feature: NNavigate to Frames, click on nested frames.
Get the values of all the text available in different frames.
  As a user
  I want to navigate Frames, and click on nested frames, i should get the available test in different frames

  Scenario: navigate to Frames and get the all text available in different frames
    Given I am on the basic authentication page
    When I click the frames it should open the frames page and i click on Nested Frames
    Then I should get the available text in all frames