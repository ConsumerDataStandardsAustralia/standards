## NPP Services

```diff
From 1.34.0: Added NPP services
```

The [_service_ enumeration](#cdr-banking-api_schemas_tocSnpppaymentservice) provides the values for specifying New Payments Platform (NPP) payments by their NPP service category. These are explained in the following tables:

**NPP Service Overlay Codes**

| Value | Description |
| ----- | ----------- |
| X2P1 | Represents the Osko payment service that allow consumers and businesses to send money between eligible accounts in near real-time. |
| BSCT | Basic Single Credit Transfers means a credit payment message sent over the NPP without an overlay. It is an individual transaction that will be cleared then settled. |
| CATSCT | Category Purpose Payments denote categorised payments for super, tax and payroll payments. This service helps third parties to instruct financial institutions on the purpose of the payment and priority. These payments may represent additional reference information in the payment message, which can be presented to the payee. For example, "Adjustment pay for week ending 20/1/19" or "Commission payment for Quarter 1", up to date details of hours paid, superannuation contributions or details relevant to the employee payslip. |
| IFTI | International Funds Transfers Instructions (IFTIs) are payments sent between an Australian financial institution and an overseas financial institution. |
