## Authorisation Scopes

The following authorisation scopes have been defined for the standards.  Each API end point will specify which scopes are required to access the data available via that end point.

Scope Name | Description
-----------|------------
**Basic Bank Account Data** | This scope would allow for the third party to access basic information of the customer’s accounts.<br/><br/>Includes simple account information including balance.<br/>Does not include account identifiers, product information or transaction data.
**Detailed Bank Account Data** | This scope would allow for the third party to access detailed information of the customer’s accounts. This scope is effectively additional authorisation to the Basic Bank Account Data scope. Granting this authorisation only makes sense if the Bank Account Data scope is also authorised.<br/><br/>Includes basic account information plus account identifiers and product information.<br/>Does not include transaction data.
**Bank Transaction Data** | This scope would allow the third party to access transaction data for accounts.  This scope is effectively additional authorisation to the Basic Bank Account Data scope.  Granting this authorisation only makes sense if the Basic Bank Account Data scope is also authorised.<br/><br/>Includes all account transaction data.
**Bank Payee Data** | This scope allows access to payee information stored by the customer.<br/><br/>Includes payee information such as billers, international beneficiaries and domestic payees.
**Customer Data** | The scope would allow the third party to access personally identifiable information about the customer.  For retail customers this would be information about the customer themselves.  For business customers it would imply information about the specific user but also information about the business.<br/><br/>Includes name, date of birth and contact information.
**Public** | Openly accessible information.  A customer would never need to grant this scope.  This scope is included so that end points that can be called without requiring authorisation can be identified.<br/><br/>Includes access to openly available information such as generic product information.
