Feature: I want to check if there are 13 objects in the http response

  Scenario: Check number of objects in http response
    Given I send a GET request to "https://api.restful-api.dev/objects" and store the response
    Then I parse the response as JSON
    Then the response status code should be 200
    And the response should contain 13 objects