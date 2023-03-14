Feature: assesment for user id pass word and admin
Scenario: user id pass word and admin
Given I open website
When I enter user name and password as admin it should open the Basuc auth page
Then text uid pwd and signin
