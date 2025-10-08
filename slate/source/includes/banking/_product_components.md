## Product & Account Components


<a id="productfeaturetypedoc"></a>
<h3 id="tocSproductfeaturetypedoc">Product Feature Types</h3>



Description of the usage of the _featureType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| ADDITIONAL_CARDS | Additional cards can be requested. | The maximum number of additional cards. If no maximum then should be set to `null`. |
| BALANCE_TRANSFERS | Balance transfers can be made to the account (e.g., for credit cards). | N/A |
| BILL_PAYMENT | The product can be attached to an automatic budgeting and bill payment service. | Optional name of the service. |
| BONUS_REWARDS | Bonus loyalty rewards points are available. | Number of points available. |
| CARD_ACCESS | A card is available for the product to access funds. | Text describing list of card types that this product can be linked to. |
| CASHBACK_OFFER | Subject to terms, conditions and eligibility criteria, the product has a cashback offer for opening an account or by spending at a certain retailer. | The amount of the cashback offer (in AUD). |
| COMPLEMENTARY_PRODUCT_DISCOUNTS | Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available. | Description of the complementary offering. |
| DIGITAL_BANKING | Access is available to online banking features for the product. | N/A |
| DIGITAL_WALLET | A Digital wallet can be attached to the product. | The name or brand of the wallet. |
| DONATE_INTEREST | Indicates that interest generated from the product can be automatically donated to a charity or community group. | N/A |
| EXTRA_DOWN_PAYMENT | When a transaction value would exceed the credit limit available for an instalment plan, there is an ability to make a larger than usual initial down payment to enable the creation of a plan based on a reduced amount outstanding, so it remains within the limit. | N/A |
| EXTRA_REPAYMENTS | Indicates that the product has the option to accept extra repayments without incurring additional charges. For example, Buy Now, Pay Later (BNPL) or line of credit products may offer the facility to repay instalments (after any initial down payment) on an ad hoc basis. | N/A |
| FRAUD_PROTECTION | The product includes fraud protection features. | N/A |
| FREE_TXNS | A set number of free transactions available per month. | The number of free transactions. |
| FREE_TXNS_ALLOWANCE | A set amount of transaction fee value that is discounted per month. | The amount of transaction fee discounted (in AUD). |
| FUNDS_AVAILABLE_AFTER | Deposited funds are available after a specified time period. This is distinct from a term deposit duration. | The specified time period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| GUARANTOR | Subject to terms and conditions, the customer may be able to nominate a guarantor during the origination process. | N/A |
| INSTALMENT_PLAN | The product has the option to pay for eligible purchases over time with a set number of payments. | N/A |
| INSURANCE | Insurance is provided as an additional feature of the product. | Text description of the type of insurance (e.g., Travel Insurance). |
| INTEREST_FREE | Interest free period for purchases. | Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| INTEREST_FREE_TRANSFERS | Interest free period for balance transfers. | Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| LOYALTY_PROGRAM | A points based loyalty program is available. | Name of the loyalty program. |
| NOTIFICATIONS | Advanced notifications are available for the product. | Description of the notification capability. |
| NPP_ENABLED | An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment. | N/A |
| NPP_PAYID | An account of this product type can be used as the target of an NPP PayID. | N/A |
| OFFSET | An offset account can be connected to the product. | N/A |
| OTHER | Another feature that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |
| OVERDRAFT | An overdraft can be applied for. | N/A |
| REDRAW | Redraw of repaid principal above minimum required is available. | N/A |
| RELATIONSHIP_MANAGEMENT | Relationship management is available for eligible customers. | N/A |
| UNLIMITED_TXNS | Unlimited free transactions available. | N/A |



<a id="productconstrainttypedoc"></a>
<h3 id="tocSproductconstrainttypedoc">Product Constraint Types</h3>



Description of the usage of the _constraintType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| MAX_BALANCE | A maximum balance is required for the product. | The maximum balance in [AmountString](#common-field-types) format. |
| MAX_LIMIT | A maximum limit exists (such as a maximum loan balance denoting the borrowable amount or maximum allowable credit limit). | The maximum limit in [AmountString](#common-field-types) format. |
| MAX_LVR | A maximum LVR (Loan to Value Ratio) exists. | The maximum LVR in [RateString](#common-field-types) format. |
| MIN_BALANCE | A minimum balance is required for the product. | The minimum balance in [AmountString](#common-field-types) format. |
| MIN_LIMIT | A minimum limit exists (such as a minimum loan balance denoting the borrowable amount or minimum credit limit). | The minimum limit in [AmountString](#common-field-types) format. |
| MIN_LVR | A minimum LVR (Loan to Value Ratio) exists. | The minimum LVR in [RateString](#common-field-types) format. |
| OPENING_BALANCE | An opening balance is required for the product. | The minimum opening balance in [AmountString](#common-field-types) format. |
| OTHER | Another constraint that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |



<a id="producteligibilitytypedoc"></a>
<h3 id="tocSproducteligibilitytypedoc">Product Eligibility Types</h3>



Description of the usage of the _eligibilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUSINESS | Only business may apply for the account. | N/A |
| EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies. | A description of the status required. |
| MAX_AGE | Only customers younger than a maximum age may apply. | The maximum age in years. |
| MIN_AGE | Only customers older than a minimum age may apply. | The minimum age in years. |
| MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the product. | Minimum income in [AmountString](#common-field-types) format. |
| MIN_TURNOVER | Only a business with greater than a minimum turnover may apply. | Minimum turnover in [AmountString](#common-field-types) format. |
| NATURAL_PERSON | The customer must be a natural person rather than another legal entity. | N/A |
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field. The _additionalInfo_ field is mandatory for this type. | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may apply for the product. | Optional. If present, **MUST** contain a description of which pensions qualify. |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may apply. | N/A |
| STUDENT | Only students may apply for the product. | Optional. If present, **MUST** contain a description of who qualifies as a student, e.g., do apprentices qualify? |



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>



Description of the usage of the _feeType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| CASH_ADVANCE | A fee associated with a cash advance. | N/A |
| DEPOSIT | A fee associated with making a deposit. | N/A |
| DISHONOUR | A fee associated with a dishonour. | N/A |
| ENQUIRY | A fee associated with an enquiry, including a balance enquiry. | N/A |
| EVENT | A fee in relation to a particular event (e.g., ordering a new card, viewing a balance or stopping a cheque). | N/A |
| EXIT | A fee for closing the product. | N/A |
| LATE_PAYMENT | A fee associated with making a payment after a due date. | Number of days late, after which the associated fee will be applied. |
| OTHER | Another fee that can not be included in any of the other categories. The _additionalInfo_ field is mandatory for this type. | N/A |
| PAYMENT | A fee associated with making a payment. | N/A |
| PERIODIC | A periodic fee such as a monthly account servicing fee. | The period of charge. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PURCHASE | A fee associated with making a purchase at a merchant. | N/A |
| REPLACEMENT | A fee associated with a receiving a replacement, including cards, cheques, statements, security tokens. | N/A |
| TRANSACTION | A fee associated with any transaction (incorporates `WITHDRAWAL`, `DEPOSIT`, `PAYMENT` and `PURCHASE`). | N/A |
| UPFRONT | A fee paid at the beginning of the product lifecycle, such as an establishment fee, loyalty program fee or application fee. | N/A |
| UPFRONT_PER_PLAN | A fee paid at the creation of a new payment plan, such as an instalment plan. | N/A |
| VARIATION | A fee associated with a request for a variation, including to an existing process, instruction or terms. | N/A |
| WITHDRAWAL | A fee associated with making a withdrawal. | N/A |



<a id="productdiscounttypedoc"></a>
<h3 id="tocSproductdiscounttypedoc">Product Discount Types</h3>

Description of the usage of the _discountType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BALANCE | Discount on a fee for maintaining a set balance. As the discount applies to a fee the period is the same as for the fee. | The minimum balance in [AmountString](#common-field-types) format. |
| DEPOSITS | Discount for depositing a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee. | The minimum deposit amount in [AmountString](#common-field-types) format. |
| ELIGIBILITY_ONLY | Discount applies based on customer eligibility (_eligibility_ array must be populated). | N/A |
| FEE_CAP | The _amount_, _balanceRate_, _transactionRate_, _accruedRate_ or _feeRate_ fields of the discount represent the maximum amount charged in a time period. | The time period for which the fee cap applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PAYMENTS | Discount for outbound payments from the account under a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee. | The payment threshold amount in [AmountString](#common-field-types) format. |



<a id="productdiscounteligibilitydoc"></a>
<h3 id="tocSproductdiscounteligibilitydoc">Product Discount Eligibility Types</h3>



Description of the usage of the _discountEligibilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUSINESS | A business or other non-person legal entity. | N/A |
| EMPLOYMENT_STATUS | An eligibility constraint based on employment status applies. | A description of the status required. |
| INTRODUCTORY | The discount is only available during an introductory period. | The period of time for the introductory discount. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| MAX_AGE | Only customers younger than a maximum age receive the discount. | The maximum age in years. |
| MIN_AGE | Only customers older than a minimum age receive the discount. | The minimum age in years. |
| MIN_INCOME | The customer must have an income greater than a specified threshold to obtain the discount. | Minimum income in [AmountString](#common-field-types) format. |
| MIN_TURNOVER | Only a business with greater than a minimum turnover is eligible. | Minimum turnover in [AmountString](#common-field-types) format. |
| NATURAL_PERSON | The customer must be a natural person rather than another legal entity. | N/A |
| OTHER | Another eligibility criteria exists as described in the _additionalInfo_ field. The _additionalInfo_ field is mandatory for this type. | N/A |
| PENSION_RECIPIENT | Only a recipient of a government pension may receive the discount. | Optional. If present, **MUST** contain a description of which pensions qualify. |
| RESIDENCY_STATUS | An eligibility constraint based on residency status applies. | A description of the status required. |
| STAFF | Only a staff member of the provider may receive the discount. | N/A |
| STUDENT | Only students may receive the discount. | Optional. If present, **MUST** contain a description of who qualifies as a student, e.g., do apprentices qualify? |



<a id="productdepositratetypedoc"></a>
<h3 id="tocSproductdepositratetypedoc">Product Deposit Rate Types</h3>

Description of the usage of the _depositRateType_ field as it applies to products.

<a id="productdepositbaseratetypedoc"></a>
<ul><li id="tocSproductdepositbaseratetypedoc"><b>Deposit Base Rate Types</b></li></ul>

A deposit product is expected to present a single Base rate corresponding to relevant selection criteria including the rate _tiers_ and _additionalValue_, where applicable.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| FIXED | Fixed rate for a period of time. | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances. | Details of the float parameters. |
| MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class. | Details of the market linkage. |
| VARIABLE | A variable base rate for the product. | N/A |



<a id="productdepositadjustmentratetypedoc"></a>
<ul><li id="tocSproductdepositadjustmentratetypedoc"><b>Deposit Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BONUS | A bonus rate available by meeting a specific criteria. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | A description of the criteria to obtain the bonus. |
| BUNDLE_BONUS | A bonus rate obtained by originating a bundle instead of a standalone product. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | The name of the bundle. |
| INTRODUCTORY | An introductory bonus that will expire after a set period. A deposit 'bonus' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Bonus). | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |



<a id="productlendingratetypedoc"></a>
<h3 id="tocSproductlendingratetypedoc">Product Lending Rate Types</h3>

Description of the usage of the _lendingRateType_ field as it applies to products.

<a id="productlendingbaseratetypedoc"></a>
<ul><li id="tocSproductlendingbaseratetypedoc"><b>Lending Base Rate Types</b></li></ul>



A lending product is expected to present a single Base rate corresponding to relevant selection criteria including the rate _tiers_ and _additionalValue_, where applicable.

Card products may have two or more base rates, including `CASH_ADVANCE` and `PURCHASE` as they may apply to different transaction types within an account. The `PURCHASE` _lendingRateType_ is considered the rate commonly applicable to a card.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BALANCE_TRANSFER | Specific rate applied to balance transfers to the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| CASH_ADVANCE | Specific rate applied to cash advances from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| FIXED | Fixed rate for a period of time. | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances. | Details of the float parameters. |
| MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class. | Details of the market linkage. |
| PURCHASE | Specific rate applied to purchases from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only. | N/A |
| VARIABLE | A variable base rate for the product. | N/A |



<a id="productlendingadjustmentratetypedoc"></a>
<ul><li id="tocSproductlendingadjustmentratetypedoc"><b>Lending Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| BUNDLE_DISCOUNT_FIXED | A discount rate off the fixed rate obtained by originating a bundle instead of a standalone product. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The name of the bundle. |
| BUNDLE_DISCOUNT_VARIABLE | A discount rate off the variable rate obtained by originating a bundle instead of a standalone product. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The name of the bundle. |
| DISCOUNT | A specific discount rate that may be applied. A discount rate reduces the interest payable. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | Description of the discount rate that is applicable. |
| INTRODUCTORY | An introductory discount that will expire after a set period. A lending 'discount' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base-Discount). | The period of time for the introductory rate. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations). |
| PENALTY | A specific penalty rate that may be applied. A penalty rate increases the interest payable. A lending 'penalty' _rate_ value **MUST** be specified as zero or a positive number in the RateString format. The formula to calculate an Effective rate would be (Base+Penalty). | Description of the penalty rate that is applicable. |



<a id="bankingtermdepositaccountedoc"></a>
<h3 id="tocSbankingtermdepositaccountypedoc">Banking Term Deposit Account Types</h3>

Description of the usage of the _maturityInstructions_ field as it applies to accounts.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| HOLD_ON_MATURITY | Funds are held in a facility or similar mechanism managed by the data holder for a period of time until the customer provides instructions or the maximum period of the hold has elapsed. Funds may be renewed or withdrawn upon instructions by the customer. | N/A |
| PAID_OUT_AT_MATURITY | Funds are to be paid out at maturity. | N/A |
| ROLLED_OVER | Funds are to be rolled over at maturity. | N/A |



<a id="bankingproductrateconditiondoc"></a>
<h3 id="tocSbankingproductrateconditiondoc">Rate and Tier Applicability Types</h3>



Description of the usage of the _rateApplicabilityType_ field as it applies to products.

| Value | Description | Use of _additionalValue_ Field |
| ----- | ----------- | ------------------------------ |
| MIN_DEPOSITS | When a minimum number of deposits is made in a month, or the month prior. | Minimum number of deposits. |
| MIN_DEPOSIT_AMOUNT | When a minimum deposit amount is made in a month, or the month prior. | Minimum deposit in [AmountString](#common-field-types) format. |
| DEPOSIT_BALANCE_INCREASED | When the overall balance of the account, excluding interest, has increased over the month prior. | Minimum amount in [AmountString](#common-field-types) format. |
| EXISTING_CUST | Applicable to existing customers of the brand. | N/A |
| NEW_ACCOUNTS | Applicable to new accounts. | N/A |
| NEW_CUSTOMER | Applicable to new customers to the brand. | N/A |
| NEW_CUSTOMER_TO_GROUP | Applicable to new customers to a group of brands. | N/A |
| ONLINE_ONLY | Applicable to accounts originated online. | N/A |
| OTHER | Applicable under other conditions. The _additionalInfo_ field is mandatory for this type. | N/A |
| MIN_PURCHASES | When a minimum number of purchases is made and settled in a month, or the month prior. | Minimum number of purchases. |
| MAX_WITHDRAWALS | Applicable up to a maximum number of withdrawals in a month, or the month prior. | Maximum number of withdrawals. |
| MAX_WITHDRAWAL_AMOUNT | Applicable up to a maximum amount withdrawn in a month, or the month prior. | Maximum withdrawn in [AmountString](#common-field-types) format. |
