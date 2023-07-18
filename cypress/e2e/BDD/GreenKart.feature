Feature: Ecommerce Site : Green Kart

    Scenario: E-commerce product delivery
        Given Visit Green-Kart Site
        And Search product which is start from ca
        When Add carrot to the carrot
        And Place order and select country
        Then Validate the Thank you message