## Product & Account Components

<a id="productfeaturetypedoc"></a>
<h3 id="tocSproductfeaturetypedoc">Product Feature Types</h3>

Description of the usage of the featureType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|CARD_ACCESS|A card is available for the product to access funds|Text describing list of card types that this product can be linked to|
|ADDITIONAL_CARDS|Additional cards can be requested|The maximum number of additional cards.  If no maximum then should be set to null|
|UNLIMITED_TXNS|Unlimited free transactions available|NA|
|FREE_TXNS|A set number of free transactions available per month|The number of free transactions|
|FREE_TXNS_ALLOWANCE|A set amount of transaction fee value that is discounted per month|The amount of transaction fee discounted (in AUD)|
|LOYALTY_PROGRAM|A points based loyalty program is available|Name of the loyalty program|
|OFFSET|An offset account can be connected to the product|NA|
|OVERDRAFT|An overdraft can be applied for|NA|
|REDRAW|Redraw of repaid principal above minimum required is available|NA|
|INSURANCE|Insurance is provided as an additional feature of the product|Text description of the type of insurance (e.g. Travel Insurance)|
|BALANCE_TRANSFERS|Balance transfers can be made to the account (eg. for credit cards)|NA|
|INTEREST_FREE|Interest free period for purchases|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|INTEREST_FREE_TRANSFERS|Interest free period for balance transfers|Interest free period. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|DIGITAL_WALLET|A Digital wallet can be attached to the product|The name or brand of the wallet|
|DIGITAL_BANKING|Access is available to online banking features for the product|NA|
|NPP_PAYID|An account of this product type can be used as the target of an NPP PayID|NA|
|NPP_ENABLED|An account of this product type can be used to receive funds as a result of a BSB/Number based NPP payment|NA|
|DONATE_INTEREST|Indicates that interest generated from the product can be automatically donated to a charity or community group|NA|
|BILL_PAYMENT|The product can be attached to an automatic budgeting and bill payment service|Optional name of the service|
|COMPLEMENTARY_PRODUCT_DISCOUNTS|Indicates that complementary, discounted offerings (such as gift cards, or discounted travel) is available|Description of the complementary offering|
|BONUS_REWARDS|Bonus loyalty rewards points are available|Number of points available|
|NOTIFICATIONS|Advanced notifications are available for the product|Description of the notification capability|
|OTHER|Another feature that can not be included in any of the other categories.  The additionalInfo field is mandatory for this type|NA|



<a id="productconstrainttypedoc"></a>
<h3 id="tocSproductconstrainttypedoc">Product Constraint Types</h3>

Description of the usage of the constraintType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|MIN_BALANCE|A minimum balance is required for the product|The minimum balance in AmountString format|
|MAX_BALANCE|A maximum balance is required for the product|The maximum balance in AmountString format|
|OPENING_BALANCE|An opening balance is required for the product|The minimum opening balance in AmountString format|
|MAX_LIMIT|A maximum credit limit exists|The maximum limit in AmountString format|
|MIN_LIMIT|A minimum credit limit exists|The minimum limit in AmountString format|



<a id="producteligibilitytypedoc"></a>
<h3 id="tocSproducteligibilitytypedoc">Product Eligibility Types</h3>

Description of the usage of the eligibilityType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|Only business may apply for the account|NA|
|PENSION_RECIPIENT|A recipient of a government pension may apply for the product|NA|
|MIN_AGE|Only customers older than a minimum age may apply|The minimum age in years|
|MAX_AGE|Only customers younger than a maximum age may apply|The maximum age in years|
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the product|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover may apply|Minimum turnover in AmountString format|
|STAFF|Only a staff member of the provider may apply|NA|
|STUDENT|Only students may apply for the product|NA|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|OTHER|Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory)|NA|



<a id="productfeetypedoc"></a>
<h3 id="tocSproductfeetypedoc">Product Fee Types</h3>

Description of the usage of the feeType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|PERIODIC|A periodic fee such as a monthly account servicing fee|The period of charge.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|TRANSACTION|A fee associated with any transaction (incorporates WITHDRAWAL, DEPOSIT, PAYMENT and PURCHASE)|NA|
|WITHDRAWAL|A fee associated with making a withdrawal|NA|
|DEPOSIT|A fee associated with making a deposit|NA|
|PAYMENT|A fee associated with making a payment|NA|
|PURCHASE|A fee associated with making a purchase at a merchant|NA|
|EVENT|A fee in relation to a particular event (e.g. NA ordering a new card, viewing a balance or stopping a cheque)|NA|
|UPFRONT|A fee paid at the beginning of the product NA lifecycle, such as an establishment fee, loyalty program fee or application fee|NA|
|EXIT|A fee for closing the product|NA|



<a id="productdiscounttypedoc"></a>
<h3 id="tocSproductdiscounttypedoc">Product Discount Types</h3>

Description of the usage of the discountType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BALANCE|Discount on a fee for maintaining a set balance.  As the discount applies to a fee the period is the same as for the fee|The minimum balance in AmountString format|
|DEPOSITS|Discount for depositing a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee|The minimum deposit amount in AmountString format|
|PAYMENTS|Discount for outbound payments from the account under a certain amount of money in a period.  As the discount applies to a fee the period is the same as for the fee|The payment threshold amount in AmountString format|
|FEE_CAP|The amount, balanceRate, transactionRate or calculatedInterestRate fields of the discount represent the maximum amount charged in a time period|The time period for which the fee cap applies. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|ELIGIBILITY_ONLY|Discount applies based on customer eligibility (eligibility array must be populated)|N/A|



<a id="productdiscounteligibilitydoc"></a>
<h3 id="tocSproductdiscounteligibilitydoc">Product Discount Eligibility Types</h3>

Description of the usage of the discountEligibilityType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|BUSINESS|A business or other non-person legal entity|NA|
|PENSION_RECIPIENT|A recipient of a government pension may receive the discount|Optional. Should contain a description of which pensions qualify|
|MIN_AGE|Only customers older than a minimum age receive the discount|The minimum age in years|
|MAX_AGE|Only customers younger than a maximum age receive the discount|The maximum age in years
|MIN_INCOME|The customer must have an income greater than a specified threshold to obtain the discount|Minimum income in AmountString format|
|MIN_TURNOVER|Only a business with greater than a minimum turnover is eligible|Minimum turnover in AmountString format|
|STAFF|Only a staff member of the provider may receive the discount|NA|
|STUDENT|Only students may receive the discount|Optional. Should contain a description of who qualifies as a student, e.g. do apprentices qualify?|
|EMPLOYMENT_STATUS|An eligibility constraint based on employment status applies|A description of the status required|
|RESIDENCY_STATUS|An eligibility constraint based on residency status applies|A description of the status required|
|NATURAL_PERSON|The customer must be a natural person rather than another legal entity|NA|
|INTRODUCTORY|The discount is only available during an introductory period|The period of time for the introductory discount.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|OTHER|Another eligibility criteria exists as described in the additionalInfo field (if this option is specified then the additionalInfo field is mandatory)|NA|




<a id="productdepositratetypedoc"></a>
<h3 id="tocSproductdepositratetypedoc">Product Deposit Rate Types</h3>

Description of the usage of the depositRateType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|FIXED|Fixed rate for a period of time|The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|BONUS|A bonus rate available by meeting a specific criteria|A description of the criteria to obtain the bonus|
|BUNDLE_BONUS|A bonus rate obtained by originating a bundle instead of a standalone product|The name of the bundle|
|VARIABLE|A variable base rate for the product|NA|
|INTRODUCTORY|An introductory bonus that will expire after a set period|The period of time for the introductory rate.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|FLOATING|A floating rate is relatively fixed but still adjusts under specific circumstances|Details of the float parameters|
|MARKET_LINKED|A rate that is linked to a specific market, commodity or asset class|Details of the market linkage|



<a id="productlendingratetypedoc"></a>
<h3 id="tocSproductlendingratetypedoc">Product Lending Rate Types</h3>

Description of the usage of the lendingRateType field as it applies to products.

|Value|Description|Use of additionalValue Field|
|-----|-----------|----------------------------|
|FIXED|Fixed rate for a period of time|The period of time fixed. Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|VARIABLE|A variable base rate for the product|NA|
|INTRODUCTORY|An introductory discount that will expire after a set period|The period of time for the introductory rate.  Formatted according to [ISO 8601 Durations](https://en.wikipedia.org/wiki/ISO_8601#Durations)|
|DISCOUNT|A specific discount rate that may be applied.  A discount rate reduces the interest payable|Description of the discount rate that is applicable|
|PENALTY|A specific penalty rate that may be applied.  A penalty rate increases the interest payable|Description of the penalty rate that is applicable|
|FLOATING|A floating rate is relatively fixed but still adjusts under specific circumstances|Details of the float parameters|
|MARKET_LINKED|A rate that is linked to a specific market, commodity or asset class|Details of the market linkage|
|CASH_ADVANCE|Specific rate applied to cash advances from the account|NA|
|PURCHASE|Specific rate applied to purchases from the account|NA|
|BUNDLE_DISCOUNT_FIXED|A discount rate off the fixed rate obtained by originating a bundle instead of a standalone product|The name of the bundle|
|BUNDLE_DISCOUNT_VARIABLE|A discount rate off the variable rate obtained by originating a bundle instead of a standalone product|The name of the bundle|
