Feature: Can we log in?

  Scenario Outline: Create a User
    Given I am on the add user page
    When I enter a "<username>" and "<password>"
    And I navigate to the login page
    And I enter my "<username>" and "<password>"
    Then I will be logged in
    
  Examples:
	| 	username	|   password  |
	| 	root    	|   root      |
	| 	user      |   pass      |
	|   gold      |   fish      |