Feature: Practice functions of the application

    As a user i am enable to use all the functions in practice performance_glitch_user

    Scenario: As a user, i should able to see the title of the page
        Given I succefully browse to the application
        When I click on the Practice buttton
        Then I should able to see the title of the page "Automation Practice"

    Scenario: As a user, i should able to select static dropdown
        Given visit site
        When I click on static dropdown option
        Then I should able to select selenium option