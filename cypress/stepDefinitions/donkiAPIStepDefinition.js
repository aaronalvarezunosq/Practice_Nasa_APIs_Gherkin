/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const donki = require('../support/pageObject/testData/donkiAPI.json');
const apiKey = require('../support/pageObject/testData/api_key.json');
let baseURL;


Given('I prepare de data values to send the GET request', () => {
    baseURL = 'https://api.nasa.gov/DONKI/FLR'
})

When('I send the GET Request to the API', () => {
    cy.request({
        method: 'GET',
        url: baseURL,
        qs:{"startDate":donki.startDate , "endDate":donki.endDate , "api_key":apiKey.token} //passing parameters for the request
      }).as('request');//assigning alias to the request to use later
})

Then('I validate the status code of the response and various Body Parameters', () => {
    cy.get('@request').then((response)=>{
        expect(response.status).to.equal(200); //validate status code 200
        expect(response.body[0]).to.have.property('link'); //validate that first element in body response array has property "link"
        expect(response.body[0]).to.have.property('instruments');//other property validations
        expect(response.body[0].instruments[0]).to.have.property('displayName')
        expect(response.body[0]).to.have.property('beginTime');
        expect(response.body[0]).to.have.property('peakTime');
        expect(response.body[0]).to.have.property('endTime');
        expect(response.body[0]).to.have.property('linkedEvents');
        expect(response.body[0].linkedEvents[0]).to.have.property('activityID');
        cy.log('The first element displayName is: '+response.body[0].instruments[0].displayName)//prints displayName to console
        cy.log('The first element activityID is: '+response.body[0].linkedEvents[0].activityID)//prints activityID to console
            })
})
