Feature: Testing GET requests to NASA asteroid API

    Scenario: Perform GET request to asteroid API and validate response body

        Given I set up the query parameters to send to the API URL

        When I make the request to the API

        Then I perform multiple validations on the response body