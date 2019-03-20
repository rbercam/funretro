/// <reference types="Cypress" />

describe("My suite - Automated Test FunRetro", function(){
    var faker = require('faker');
    it("My case - SignUp FunRetro", function(){
        cy.visit('')
        cy.get('.home-button').click()
        cy.get('#name').type(faker.name.findName())
        cy.get('#email').type(faker.internet.email())
        cy.get('#password').type(faker.internet.password())
        cy.get('#accept-terms').check()
        cy.get('#accept-subs').check()
        cy.get('.button').click()
    })
    it("My case - Create Board Name", function(){
        cy.get('.dashboard-item')
        .click()

        cy.get('#newBoardName')
        .type('Fun Retro Teste Rafael')
        .screenshot('boardName')

        cy.get(':nth-child(3) > button')
        .click()
    })
    it("My case - Create Went Well Item", function(){
        cy.get('.selected > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()

        cy.get('.selected > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()
    })
    it("My case - Create To Improve Item", function(){
        cy.get('[data-column-id="2"] > .column-header > .add-card > .fa').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words())
        cy.get('.editing > button').click()
    })
    it("My case - Create Actions Item", function(){
        cy.get('[data-column-id="3"] > .column-header > .add-card').click()
        cy.get('[style="position: relative;"] > .ng-pristine').click()
        .type(faker.lorem.words(), { delay: 150 })
        cy.get('.editing > button').click()

    })

})