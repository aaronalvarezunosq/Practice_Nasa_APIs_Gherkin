Feature: Testing a GET request with the DONKI solar flare API

    Scenario: Validating response body of GET request for DONKI API

        Given I prepare de data values to send the GET request

        When I send the GET Request to the API

        Then I validate the status code of the response and various Body Parameters
        