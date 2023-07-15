Feature: E-commerce

    Scenario: Login with valid credentials
        Given Visit orange Hrm Site
        And Enter the Username and Password
            | Username | Password |
            | Admin    | admin123 |
        When Click the login button
        Then Then valid the Dashboard


    Scenario Outline: Login multiple valid credentials
        Given Visit Swag labs Site
        And Enter the "<Username>" and "<Password>"
        When Click on submit button
        Then Validate the product

        Examples:
            | Username                | Password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |
