# testTask_Mortgage

This is a backend tool, that allows you to use the online bank storage.

1. To get the full list of existing banks in the storage send a GET request to endpoint 'api/banks';

2. To add your bank send a POST request to endpoint 'api/banks' with a \*body.
  
3. To delete an existing bank send a POST request to endpoint 'api/banks/:bankId/delete'.

4. To edit existing bank send a PUT request to endpoint 'api/banks/:bankId' with a \*body.

----------------------------------------------------------------------------------------------------------

\* body, you need to send with the request should have a list of fields:
- Parameter name - "name". Name of the bank, required, nust be unique. If you sent an empty value or it isn't unique, you'll get an error 400.
- Parameter name - "interestRate". Interest rate, from 0 to 1 (percents divided by 100), required. Description - the annual percentage rate that expresses the amount of money the bank charges additionally for the use of assets the person borrowed money for.
- Parameter name - "maximumLoan". Maximum loan from $0 to $100 000 000, required. Description - he maximum amount of money a bank is able to borrow.
- Parameter name - "minimumDownPayment". Minimum down payment, from 0 to 1 (percents divided by 100), required. Description - the amount of money a person needs to pay upfront (if a person takes a loan of $300.000 and bank minimum down payment is 20%, it means that person must pay the bank $60.000 as an initial mortgage payment).
- Parameter name - "loanTerm". Loan term, from 0 to 100 years, required. Description - a period of time in which a person must pay off the loan (usually banks have several loan programs, but for this task, let’s assume each bank has only one fixed term).
