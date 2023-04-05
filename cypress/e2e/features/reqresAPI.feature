Feature: Testing a POST,PUT,DELETE,GET Request on Reqres API for practice

    Scenario: Testing the POST Request in Reqres API

        Given I set up the data and url for the POST Request

        When  I send the POST Request to the API

        Then I validate that the POST response code is 201 and the response body

    Scenario: Testing the PUT Request in Reqres API

        Given I set up the data and url for the PUT Request

        When I send the PUT Request to the API

        Then I Validate that the PUT response code is 200 and the response body

    Scenario: Testing the DELETE Request in Reqres API

        Given I set up the data and url for the DELETE Request

        When I send the DELETE Request to the API

        Then I Validate that the DELETE response code is 204

    
    Scenario: Testing the GET Request in Reqres API and json user validation

        Given I set up the data and url for the GET Request

        When I send the GET Request to the Reqres API

        Then I Validate that the GET response code is 200 and user data matches Json file
