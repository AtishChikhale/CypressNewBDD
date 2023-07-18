///<reference types="cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I succefully browse to the application', () => {
    cy.visit('https://codenboxautomationlab.com/');
    cy.url().should('include', 'codenbox')
})

When('I click on the Practice buttton', () => {
    cy.contains('Practice').click()
})

Then('I should able to see the title of the page {string}', (pageTitle) => {
    cy.get('[class="page-title"]').invoke('text').then((text1) => {
        expect(text1).to.eq(pageTitle)
    })
})

Given('visit site', () => { 
    cy.visit('https://codenboxautomationlab.com/practice/')
})

When('I click on static dropdown option', () => {
    cy.get('#dropdown-class-example').select('Selenium')
})

Then('I should able to select selenium option', () => {
    cy.get('#dropdown-class-example').select('Selenium').should('have.value', 'option1')
})

