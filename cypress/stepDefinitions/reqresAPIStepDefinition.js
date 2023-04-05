import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
const testUser = require('../support/pageObject/testData/userToValidate.json');
let baseURL;
let userName;
let userJob;

//Start of POST Request Scenario
Given('I set up the data and url for the POST Request', () => {
    baseURL = 'https://reqres.in/api/users';
    userName = 'Aaron';
    userJob = 'QA Analyst';
})

When('I send the POST Request to the API', () => {
    cy.request({method :'POST',
            url     :    baseURL,
            body    : {name:userName, job:userJob}
            }).as('POSTRequest');
})

Then('I validate that the POST response code is 201 and the response body', () => {
    cy.get('@POSTRequest').then((response) =>{
        expect(response.status).to.equal(201)
        expect(response.body).to.have.property('name','Aaron');
        expect(response.body).to.have.property('job','QA Analyst');
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('createdAt');
        })
})
//End of POST Request Scenario

//Start of the PUT Request Scenario
Given('I set up the data and url for the PUT Request', () => {
    baseURL = 'https://reqres.in/api/users/2';
    userName = 'Aaron';
    userJob = 'Video Game Streamer';
})

When('I send the PUT Request to the API', () => {
    cy.request({method :'PUT',
            url     :    baseURL,
            body    : {name:userName, job:userJob}
            }).as('PUTRequest');
})

Then('I Validate that the PUT response code is 200 and the response body', () => {
    cy.get('@PUTRequest').then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('name','Aaron');
        expect(response.body).to.have.property('job','Video Game Streamer');//validates the job field was updated
        expect(response.body).to.have.property('updatedAt'); //verifies the response corresponds to a PUT request
        })
})
//End of the PUT REQUEST scenario

//Start of the DELETE REQUEST SCENARIO
Given('I set up the data and url for the DELETE Request', () => {
    baseURL = 'https://reqres.in/api/users/2';
    userName = 'Aaron';
    userJob = 'Video Game Streamer';
})

When('I send the DELETE Request to the API', () => {
    cy.request({method :'DELETE',
            url     :    baseURL,
            body    : {name:userName, job:userJob}
            }).as('DELETERequest');
})

Then('I Validate that the DELETE response code is 204', () => {
    cy.get('@DELETERequest').then((response) =>{
        expect(response.status).to.equal(204);
        })
})
//End of DELETE Request Scenario

//Start of GET Request Scenario
Given('I set up the data and url for the GET Request', () => {
    baseURL = 'https://reqres.in/api/users/';
})

When('I send the GET Request to the Reqres API', () => {
    cy.request({method :'GET',
                url    : baseURL+String(testUser.id),//this concatenates the ID from json file to allow for different user validations
            }).as('GETRequest');
})

Then('I Validate that the GET response code is 200 and user data matches Json file', () => {
    cy.get('@GETRequest').then((response) =>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('data');
        expect(response.body.data).to.have.property('id',testUser.id);//validate ID match
        expect(response.body.data).to.have.property('first_name',testUser.first_name);//validate first name match
        expect(response.body.data).to.have.property('last_name',testUser.last_name);//validate last name match
        expect(response.body.data).to.have.property('avatar',testUser.avatar);//validate avatar imagefile match
        expect(response.body.data).to.have.property('email',testUser.email);//validate email match
        expect(response.body).to.have.property('support');
        cy.log('The user contact email is: '+response.body.data.email);// print user email
        })
})