import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('Visit Orange HRM Site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter the Username', () => {
    cy.get('[name="username"]').type('Admin')
})

When('Enter the Password', () => {
    cy.get('[name="password"]').type('admin123')
})

When('Click on login button', () => {
    cy.get('[type="submit"]').click()
})

Then('Valid the Dashboard', () => {
    cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
})

Given('Visit Orange HRM Site for invalid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter the Username for invalid', () => {
    cy.get('[name="username"]').type('Admin')
})

When('Enter the Password for invalid', () => {
    cy.get('[name="password"]').type('admin1234')
})

When('Click on login button for invalid', () => {
    cy.get('[type="submit"]').click()
})

Then('Valid the Error message', () => {
    cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
})
