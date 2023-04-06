/// <reference types="Cypress" />
import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
let baseURL;
let userID
let userName;
let userLastname;
let userEmail;

//Start of GET Request Scenario
Given('I set up the GET request for the API to get user with table data id: {string} first name: {string} last name: {string} and email: {string}', (id,firstName,lastName,email) => {
    baseURL = 'https://reqres.in/api/users/';
    userID = id;
    userName = firstName;
    userLastname = lastName;
    userEmail = email;

})

When('I send the GET request to the API to get user to validate with table', () => {
    cy.request({method :'GET',
                url    : baseURL+String(userID),//this concatenates the ID from json file to allow for different user validations
            }).as('GETRequest');
})

Then('I validate the user with the information obtained from Examples table', () => {
    cy.get('@GETRequest').then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('id',Number(userID));//validate ID match
        expect(response.body.data).to.have.property('first_name',userName);//validate first name match
        expect(response.body.data).to.have.property('last_name',userLastname);//validate last name match
        expect(response.body.data).to.have.property('email',userEmail);//validate email match
        expect(response.body).to.have.property('support');
        cy.log('The user contact email is: '+response.body.data.email);// print user email
        })
})