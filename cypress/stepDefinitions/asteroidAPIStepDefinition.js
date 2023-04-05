/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const asteroids = require('../support/pageObject/testData/asteroids.json');
const apiKey = require('../support/pageObject/testData/api_key.json');
let baseURL;


Given('I set up the query parameters to send to the API URL', () => {
    baseURL = 'https://api.nasa.gov/neo/rest/v1/feed'
})

When('I make the request to the API', () => {
    cy.request({
        method: 'GET',
        url: baseURL,
        qs:{"start_date":asteroids.start_date,"end_date":asteroids.end_date,"api_key":apiKey.token} //passing parameters for the request
      }).as('request');
})

Then('I perform multiple validations on the response body', () => {
    cy.get('@request').then((response) =>{
        //validamos el body de la respuesta
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('element_count')
        expect(response.body).to.have.property('links')
    })        
})
