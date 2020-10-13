@ignore
Feature: Can we find this on google?
  search for somehing on google
	
  Scenario Outline: Find "<Animals>" images on google
    Given We open google
    When I search for "<Animals>"
    Then Google will return us images of "<Animals>"
    
  Examples:
	| 	Animals	|
	| 	kittens	|
	| 	puppies |