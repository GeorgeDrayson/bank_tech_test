# Bank Tech Test

## by George Drayson

## Description

This was a practice tech test as part of the Makers Academy course.

### Requirements
 - You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
 - Deposits, withdrawal.
 - Account statement (date, amount, balance) printing.
 - Data can be kept in memory (it doesn't need to be stored to a database or anything).
 
### Acceptance criteria
 
- Given a client makes a deposit of 1000 on 10-01-2012
- And a deposit of 2000 on 13-01-2012
- And a withdrawal of 500 on 14-01-2012
- When she prints her bank statement
- Then she would see:
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```
## Domain model:

![Domain model](images/bank_test.png "Bank tech test domain model")

## User stories

```
As user,
So that I can put money into my account,
I would like to deposit.

As user,
So that I can take money from my account,
I would like to withdraw.

As user,
So that I can see all my account activity,
I would like to see my statement printed neatly.

As user,
So that I can when I made a deposit/withdrawal,
I would like to see the date of every transaction.

As user,
So that I can how much I deposited/withdrew,
I would like to see the amount of every transaction.

As user,
So that I can see my money after every deposit/withdrawal,
I would like to my balance after each transaction.
```

## Built With

* [JavaScript](https://www.javascript.com/) - Language
* [Jasmine](https://jasmine.github.io/) - The testing framework
* [Atom](https://atom.io/) - Text editor
