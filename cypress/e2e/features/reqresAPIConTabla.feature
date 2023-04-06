Feature: Testing the GET method and validating with table

    Scenario Outline: Validating that a User is in the API database
    Given I set up the GET request for the API to get user with table data id: '<id>' first name: '<firstName>' last name: '<lastName>' and email: '<email>'
    
    When I send the GET request to the API to get user to validate with table

    Then I validate the user with the information obtained from Examples table
    
    Examples:
        |id  |firstName     |lastName   |email                       |
        |7   |Michael       |Lawson     |michael.lawson@reqres.in    |
        |2   |Janet         |Weaver     |janet.weaver@reqres.in      |
        |6   |Tracey        |Ramos      |tracey.ramos@reqres.in      |