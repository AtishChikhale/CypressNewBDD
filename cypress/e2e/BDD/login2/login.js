import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('Visit orange Hrm Site', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter the Username and Password', (dataTables) => {
    dataTables.hashes().forEach(element => {
        cy.get('[name="username"]').type(element.Username)
        cy.get('[name="password"]').type(element.Password)
    });
})

When('Click the login button', () => {
    cy.get('[type="submit"]').click()
})

Then('Then valid the Dashboard', () => {
    cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('be.visible')
})

Given('Visit Swag labs Site', () => {
    cy.visit('https://www.saucedemo.com/')
})

When('Enter the {string} and {string}', (username, password) => {
    cy.get('[id="user-name"]').type(username)
    cy.get('[id="password"]').type(password)
})

When('Click on submit button', () => {
    cy.get('[id="login-button"]').click()
})

Then('Validate the product', () => {
    cy.get('.title').should('be.visible')
})