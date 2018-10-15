# Scenarios 

## Calculator
```gherkin  
Feature: Gas bill calculator
  A user wants to calculate his bills

  Scenario: It should correctly calculate the total sum for gas
    Given I am logged in
    When I enter my bill amount and a gas plan amount
    Then I should have a calculated gas sum
```

```gherkin  
Feature: Electicity bill calculator
  A user wants to calculate his bills

  Scenario: It should correctly calculate the total sum for electicity
    Given I am logged in
    When I enter my bill amount and a electicity plan amount
    Then I should have a calculated electicity sum
```

```gherkin  
Feature: Tazalyk bill calculator
  A user wants to calculate his bills

  Scenario: It should correctly calculate the total sum for tazalyk
    Given I am logged in
    When I enter my bill amount and a tazalyk plan amount
    Then I should have a calculated tazalyk sum
```

```gherkin  
Feature: Central heating bill calculator
  A user wants to calculate his bills

  Scenario: It should correctly calculate the total sum for central heating
    Given I am logged in
    When I enter my bill amount and a central heating plan amount
    Then I should have a calculated central heating sum
```

## Bills
```gherkin  
Feature: Payment calendar view
  A user wants to see what payments did he make and when

  Scenario: It should show a calendar with payments
    Given I am a logged in user with payments
    When I look at the calendar view
    Then The payments are rendered in the correspondant day
```

```gherkin  
Feature: Payment creation
  A user wants to create a payment

  Scenario: It should create a payment
    Given I am logged in
    When I enter my bill information
    Then The system should add a new entry of the bill
```

## Finance graph statistics

```gherkin  
Feature: Payments statistics graph
  A user wants to see the statistics of his bills

  Scenario: It should show a graph with payments
    Given I am a logged in user with payments
    When I look at the graph view
    Then The graph is rendered
```

## Payments notifications

```gherkin  
Feature: Payments email notifications
  A user wants to be reminded when he should make a payment

  Scenario: It should send a notification by an email
    Given I set up a payment email notification
    When It's time to make a payment
    Then It should send a notification by an email to make a payment
```

```gherkin  
Feature: Payments text message notifications
  A user wants to be reminded when he should make a payment

  Scenario: It should send a notification by a text message
    Given I set up a payment text message notification
    When It's time to make a payment
    Then It should send a notification by a text message to make a payment
```

```gherkin  
Feature: Set a preferred notification method
  A user wants to set a preferred notification method

  Scenario: It should set a preferred notification method
    Given I am logged in user in a profile page
    When I set up a payment email notification
    Then It should set a preferred notification method
```

## Autocharge

```gherkin  
Feature: Autocharging
  A user wants to be autocharged when payment is due

  Scenario: It should charge a preferred bank card
    Given I am logged in user with set up autocharge settings
    When The payment is due
    Then It should try charge a preferred bank card
```

```gherkin  
Feature: Autocharging turn on/ turn off
  A user wants to be able to turn on/ turn off autocharging

  Scenario: It should turn on/ turn off autocharging
    Given I have a bank card connected
    When I click on the switch on autocharge radio button
    Then It should turn on/ turn off autocharging
```

```gherkin  
Feature: Connect autocharging bank card
  A user wants to be able to add a bank card for autocharging

  Scenario: It should add a bank card
    Given I am logged in user
    When I add bank card data to bank cards
    Then It should add a bank card
```

```gherkin  
Feature: Payment autocharge success notification
  A user wants to receive a notification when the autocharge is successful

  Scenario: It should send a success notification
    Given I set up autocharge settings
    When Autocharge is successful
    Then It should send a notification about successful payment
```

```gherkin  
Feature: Payment autocharge failure notification
  A user wants to receive a notification when the autocharge is failed

  Scenario: It should send a failure notification
    Given I set up autocharge settings
    When Autocharge is failed
    Then It should send a notification about failed payment
```
