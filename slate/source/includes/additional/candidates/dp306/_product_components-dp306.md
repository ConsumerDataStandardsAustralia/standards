## Product & Account Components

<a id="productfeaturetypedoc"></a>
<h3 id="tocSproductfeaturetypedoc">Product Feature Types</h3>

Description of the usage of the `featureType` field as it applies to products.


|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|ADDITIONAL_CARDS|Additional cards can be requested|The maximum number of additional cards. If no maximum then should be set to null|
|BALANCE_TRANSFERS|Balance transfers can be made to the account (eg. for credit cards)|NA|
|BILL_PAYMENT|The product can be attached to an automatic budgeting and bill payment service|Optional name of the service|
|BONUS_REWARDS|Bonus loyalty rewards points are available|Number of points available|
|CARD_ACCESS|A card is available for the product to access funds|Text describing list of card types that this product can be linked to|
|CASHBACK_OFFER | Subject to terms, conditions and eligibility criteria, the product has a cashback offer for opening an account or by spending at a certain retailer. | The amount of the cashback offer (in AUD) |
|COMPLEMENTARY_PRODUCT_DISCOUNTS|Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available|Description of the complementary offering|
|EXTRA_DOWN_PAYMENT|An ability to make a larger than usual down-payment to reduce a repayment amount outstanding. This may enable a purchase that would otherwise have been rejected due to exceeding a credit limit|NA|
|DIGITAL_BANKING|Access is available to online banking features for the product|NA|
|DIGITAL_WALLET|A Digital wallet can be attached to the product|The name or brand of the wallet|
|DONATE_INTEREST|Indicates that interest generated from the product can be automatically donated to a charity or community group|NA|
|EXTRA_REPAYMENTS|Indicates that the product has the option to accept extra repayments without incurring additional charges (for example Buy Now, Pay Later (BNPL) or line of credit products may offer the facility to repay instalments on an adhoc basis).|NA|
|FRAUD_PROTECTION | The product includes fraud protection features. | NA |
|FREE_TXNS|A set number of free transactions available per month|The number of free transactions|
|FREE_TXNS_ALLOWANCE|A set amount of transaction fee value that is discounted per month|The amount of transaction fee discounted (in AUD)|
|FUNDS_AVAILABLE_AFTER|Deposited funds are available after a specified time period. This is distinct from a term deposit duration | The specified time period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|GUARANTOR | Subject to terms and conditions, the customer may be able to nominate a guarantor during the origination process. | NA |
|INSTALMENT_PLAN | The product has the option to pay for eligible purchases over time with a set number of payments. | NA |
|INSURANCE|Insurance is provided as an additional feature of the product|Text description of the type of insurance (e.g. Travel Insurance)|
|INTEREST_FREE|Interest free period for purchases|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|INTEREST_FREE_TRANSFERS|Interest free period for balance transfers|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|LOYALTY_PROGRAM|A points based loyalty program is available|Name of the loyalty program|
|MAX_BALANCE|A maximum balance is defined for the product | The maximum balance in AmountString format|
|MAX_LIMIT|A maximum limit exists (such as a maximum loan balance denoting the borrowable amount or maximum allowable credit limit) | The maximum limit in AmountString format|
|MAX_TXNS|A maximum number of transactions per month is defined for the product  | The maximum number of transactions|
|MIN_BALANCE|A minimum balance is required for the product | The minimum balance in AmountString format|
|MIN_LIMIT|A minimum limit exists (such as a minimum loan balance denoting the borrowable amount or minimum credit limit) | The minimum limit in AmountString format|
|NOTIFICATIONS|Advanced notifications are available for the product|Description of the notification capability|
|NPP_ENABLED|An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment|NA|
|NPP_PAYID|An account of this product type can be used as the target of an NPP PayID|NA|
|OFFSET|An offset account can be connected to the product|NA|
|OTHER|Another feature that can not be included in any of the other categories. The `additionalInfo` field is mandatory for this type|NA|
|OVERDRAFT|An overdraft can be applied for|NA|
|REDRAW|Redraw of repaid principal above minimum required is available|NA|
|RELATIONSHIP_MANAGEMENT | Relationship management is available for eligible customers. | NA |
|UNLIMITED_TXNS|Unlimited free transactions available|NA|



<a id="productconstrainttypedoc"></a>
<h3 id="tocSproductconstrainttypedoc">Product Constraint Types</h3>

Description of the usage of the `constraintType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|MAX_BALANCE|A maximum balance is required for the product|The maximum balance in AmountString format|
|MAX_LIMIT|A maximum limit exists (such as a maximum loan balance denoting the borrowable amount or maximum allowable credit limit)|The maximum limit in AmountString format|
|MIN_BALANCE|A minimum balance is required for the product|The minimum balance in AmountString format|
|MIN_LIMIT|A minimum limit exists (such as a minimum loan balance denoting the borrowable amount or minimum credit limit)|The minimum limit in AmountString format|
|OPENING_BALANCE|An opening balance is required for the product|The minimum opening balance in AmountString format|
|OTHER|Another constraint that can not be included in any of the other categories. The `additionalInfo` field is mandatory for this type|NA|



<a id="producteligibilitytypedoc"></a>
<h3 id="tocSproducteligibilitytypedoc">Product Eligibility Types</h3>

Description of the usage of the `eligibilityType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|Only business may apply for the account|NA|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|MAX_AGE|Only customers younger than a maximum age may apply|The maximum age in years|
|MIN_AGE|Only customers older than a minimum age may apply|The minimum age in years|
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the product|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover may apply|Minimum turnover in AmountString format|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|OTHER|Another eligibility criteria exists as described in the `additionalInfo` field (if this option is specified then the `additionalInfo` field is mandatory)|NA|
|PENSION_RECIPIENT|Only a recipient of a government pension may apply for the product|Optional. If present, MUST contain a description of which pensions qualify.|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|STAFF|Only a staff member of the provider may apply|NA|
|STUDENT|Only students may apply for the product|Optional. If present, MUST contain a description of who qualifies as a student, e.g. do apprentices qualify?.|



<a id="productfeecategorydoc"></a>
<h3 id="tocSproductfeecategorydoc">Product Fee Categories</h3>

Description of the usage of the `feeCategory` field as it applies to products. Used to classify <a href="#tocSproductfeetypedoc">Product Fee Types</a>.

|Value|Description|
|-----|-----------|
| APPLICATION | Fees associated with the application or origination of a product |
| ATM | Fees associated with the usage of ATMs |
| BRANCH | Fees associated with in-branch or over-the-counter interactions |
| BUY_NOW_PAY_LATER | Fees associated with a Buy Now, Pay Later product or feature |
| CARD | Fees associated with the usage of cards |
| CHEQUE | Fees associated with cheques or cheque books |
| CLOSURE | Fees associated with the closure of an account or service |
| CORRESPONDENCE | Fees associated with correspondence, including paper statements or other types of document requests |
| FOREIGN_EXCHANGE | Fees associated with foreign currency exchange services |
| OTHER | Another fee category that can not be included in any of the other categories. The `additionalInfo` field is mandatory for this type |
| POS | Fees associated with value-added Point-Of-Sale (POS) services |
| SERVICE | Fees associated with general product or account service and maintenance requests |
| TELEGRAPHIC_TRANSFER | Fees associated with SWIFT or 'Telegraphic Transfer' transactions |
| TELEPHONE_BANKING | Fees associated with services available via telephone banking |
| TERMS_CONDITIONS | Fees associated with breaches or requests for variations to contracts or other product terms and conditions |
| THIRD_PARTY | Fees associated with services that incur third-party costs |
| TRANSACTION | Fees associated with making transactions that are not aligned to other more specific categories |



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>

Description of the usage of the `feeType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|CASH_ADVANCE|A fee associated with a cash advance |NA|
|DEPOSIT|A fee associated with making a deposit|NA|
|DISHONOUR|A fee associated with a dishonour |NA|
|ENQUIRY|A fee associated with an enquiry, including a balance enquiry |NA|
|EVENT|A fee in relation to a particular event (e.g. ordering a new card, viewing a balance or stopping a cheque)|NA|
|EXIT|A fee for closing the product|NA|
|OTHER|Another fee that can not be included in any of the other categories. The `additionalInfo` field is mandatory for this type |NA|
|PAYMENT|A fee associated with making a payment|NA|
|PAYMENT_LATE|A fee associated with making a payment after a due date|Number of days late, after which the associated fee will be applied |
|PERIODIC|A periodic fee such as a monthly account servicing fee|The period of charge. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|PURCHASE|A fee associated with making a purchase at a merchant|NA|
|REPLACEMENT|A fee associated with a receiving a replacement, including cards, cheques, statements, security tokens |NA|
|TRANSACTION|A fee associated with any transaction (incorporates `WITHDRAWAL`, `DEPOSIT`, `PAYMENT` and `PURCHASE`)|NA|
|UPFRONT|A fee paid at the beginning of the product lifecycle, such as an establishment fee, loyalty program fee or application fee|NA|
|UPFRONT_PER_PLAN|A fee paid at the creation of a new payment plan, such as an instalment plan|NA|
|VARIATION|A fee associated with a request for a variation, including to an existing process, instruction or terms |NA|
|WITHDRAWAL|A fee associated with making a withdrawal|NA|



<a id="productdiscounttypedoc"></a>
<h3 id="tocSproductdiscounttypedoc">Product Discount Types</h3>

Description of the usage of the `discountType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BALANCE|Discount on a fee for maintaining a set balance. As the discount applies to a fee the period is the same as for the fee|The minimum balance in AmountString format|
|DEPOSITS|Discount for depositing a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee|The minimum deposit amount in AmountString format|
|ELIGIBILITY_ONLY|Discount applies based on customer eligibility (eligibility array must be populated)|N/A|
|FEE_CAP|The `amount`, `balanceRate`, `transactionRate`, `accruedRate` or `feeRate` fields of the discount represent the maximum amount charged in a time period|The time period for which the fee cap applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|PAYMENTS|Discount for outbound payments from the account under a certain amount of money in a period. As the discount applies to a fee the period is the same as for the fee|The payment threshold amount in AmountString format|



<a id="productdiscounteligibilitydoc"></a>
<h3 id="tocSproductdiscounteligibilitydoc">Product Discount Eligibility Types</h3>

Description of the usage of the `discountEligibilityType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|A business or other non-person legal entity|NA|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|INTRODUCTORY|The discount is only available during an introductory period|The period of time for the introductory discount. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|MAX_AGE|Only customers younger than a maximum age receive the discount|The maximum age in years
|MIN_AGE|Only customers older than a minimum age receive the discount|The minimum age in years|
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the discount|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover is eligible|Minimum turnover in AmountString format|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|OTHER|Another eligibility criteria exists as described in the `additionalInfo` field (if this option is specified then the `additionalInfo` field is mandatory)|NA|
|PENSION_RECIPIENT|Only a recipient of a government pension may receive the discount|Optional. If present, MUST contain a description of which pensions qualify.|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|STAFF|Only a staff member of the provider may receive the discount|NA|
|STUDENT|Only students may receive the discount|Optional. If present, MUST contain a description of who qualifies as a student, e.g. do apprentices qualify?.|



<a id="productdepositratetypedoc"></a>
<h3 id="tocSproductdepositratetypedoc">Product Deposit Rate Types</h3>

Description of the usage of the `depositRateType` field as it applies to products.

<a id="productdepositbaseratetypedoc"></a>
<ul><li id="tocSproductdepositbaseratetypedoc"><b>Deposit Base Rate Types</b></li></ul>

A deposit product is expected to present a single Base rate corresponding to relevant selection criteria including the rate `tiers` and `additionalValue`, where applicable.

Value | Description | Use of additionalValue Field
-- | -- | --
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
VARIABLE | A variable base rate for the product | NA


<a id="productdepositadjustmentratetypedoc"></a>
<ul><li id="tocSproductdepositadjustmentratetypedoc"><b>Deposit Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

Value | Description | Use of additionalValue Field
-- | -- | --
BONUS | A bonus rate available by meeting specific criteria. A description of the bonus rate, including criteria to obtain the bonus is to be provided in the `additionalInfo` field, or `applicabilityConditions` where relevant. If the bonus is obtained by originating or maintaining a bundle instead of a standalone product, the bundle name is specified in the associated `adjustmentBundle` field. | The period of time for the bonus rate if applicable. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)



<a id="productlendingratetypedoc"></a>
<h3 id="tocSproductlendingratetypedoc">Product Lending Rate Types</h3>

Description of the usage of the `lendingRateType` field as it applies to products.


<a id="productlendingbaseratetypedoc"></a>
<ul><li id="tocSproductlendingbaseratetypedoc"><b>Lending Base Rate Types</b></li></ul>

A lending product is expected to present a single Base rate corresponding to relevant selection criteria including the rate `tiers` and `additionalValue`, where applicable.

Card products may have two or more base rates, including `CASH_ADVANCE` and `PURCHASE` as they may apply to different transaction types within an account. The `PURCHASE` lendingRateType is considered the rate commonly applicable to a card.

Value | Description | Use of additionalValue Field
-- | -- | --
BALANCE_TRANSFER | Specific rate applied to balance transfers to the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only | NA
CASH_ADVANCE | Specific rate applied to cash advances from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only | NA
FEE | A fee-based amount rather than a rate applies to the account | NA
FIXED | Fixed rate for a period of time | The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
FLOATING | A floating rate is relatively fixed but still adjusts under specific circumstances | Details of the float parameters
MARKET_LINKED | A rate that is linked to a specific market, commodity or asset class | Details of the market linkage
PURCHASE | Specific rate applied to purchases from the account. This is expected to apply to products in the `CRED_AND_CHRG_CARDS` category only | NA
VARIABLE | A variable base rate for the product | NA



<a id="productlendingadjustmentratetypedoc"></a>
<ul><li id="tocSproductlendingadjustmentratetypedoc"><b>Lending Adjustment Rate Types</b></li></ul>

A product may have zero, one, or multiple adjustment rates that are taken to apply to a Base rate.

Value | Description | Use of additionalValue Field
-- | -- | --
DISCOUNT | A discount rate reduces the interest payable. A description of the discount rate is to be provided in the `additionalInfo` field. Where applicable, the discount is applied to the rate specified in the `adjustmentToBase` field. If the discount is obtained by originating or maintaining a bundle instead of a standalone product, the bundle name is specified in the associated `adjustmentBundle` field. | The period of time for the discounted rate if applicable. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)
PENALTY | A penalty rate increases the interest payable. A description of the penalty rate is to be provided in the `additionalInfo` field. Where applicable, the penalty is applied to the rate specified in the `adjustmentToBase` field. | The period of time for the penalty rate if applicable. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)



<a id="bankingtermdepositaccountedoc"></a>
<h3 id="tocSbankingtermdepositaccountypedoc">Banking Term Deposit Account Types</h3>

Description of the usage of the `maturityInstructions` field as it applies to accounts.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|HOLD_ON_MATURITY|Funds are held in a facility or similar mechanism managed by the data holder for a period of time until the customer provides instructions or the maximum period of the hold has elapsed. Funds may be renewed or withdrawn upon instructions by the customer|NA|
|PAID_OUT_AT_MATURITY|Funds are to be paid out at maturity|NA|
|ROLLED_OVER|Funds are to be rolled over at maturity|NA|



<a id="bankingproductrateconditiondoc"></a>
<h3 id="tocSbankingproductrateconditiondoc">Rate and Tier Applicability Types</h3>

Description of the usage of the `rateApplicabilityType` field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
| DEPOSITS_MIN | When a minimum number of deposits is made in a month, or the month prior | Minimum number of deposits |
| DEPOSITS_MIN_AMOUNT | When a minimum deposit amount is made in a month, or the month prior | Minimum deposit in AmountString format |
| DEPOSIT_BALANCE_INCREASED | When the overall balance of the account, excluding interest, has increased over the month prior  | Minimum amount in AmountString format |
| EXISTING_CUST | Applicable to existing customers of the brand | NA |
| NEW_ACCOUNTS | Applicable to new accounts | NA |
| NEW_CUSTOMER | Applicable to new customers to the brand | NA |
| NEW_CUSTOMER_TO_GROUP | Applicable to new customers to a group of brands | NA |
| ONLINE_ONLY | Applicable to accounts originated online | NA |
| OTHER | Applicable under other conditions. The `additionalInfo` field is mandatory for this type | NA |
| PURCHASES_MIN | When a minimum number of purchases is made and settled in a month, or the month prior | Minimum number of purchases |
| WITHDRAWALS_MAX | Applicable up to a maximum number of withdrawals in a month, or the month prior | Maximum number of withdrawals |
| WITHDRAWALS_MAX_AMOUNT | Applicable up to a maximum amount withdrawn in a month, or the month prior | Maximum withdrawn in AmountString format |



<a id="bankingproductplanfeaturedoc"></a>
<h3 id="tocSbankingproductplanfeaturedoc">Plan Feature Types</h3>

Description of the usage of the `planFeatureType` field as it applies to card plans.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
| BALANCE_TRANSFER_ENDS_INTEREST_FREE | A balance transfer will end any existing interest-free period on the plan | NA |
| INSTALMENTS | The plan supports converting purchases into instalments | NA |
| INTEREST_FREE | The plan offers an interest-free period | Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations) |
