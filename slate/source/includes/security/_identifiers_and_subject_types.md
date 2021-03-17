<a id="identifiers"></a>
## Identifiers and Subject Types  
### sub claim
The identifier for an authenticated end-user (subject) MUST be passed in the `sub` claim of an [ID Token](https://openid.net/specs/openid-connect-core-1_0.html#IDToken) and [UserInfo response](https://openid.net/specs/openid-connect-core-1_0.html#UserInfoResponse) as defined by **[OIDC]**.

The Data Holder MUST generate the `sub` value as a Pairwise Pseudonymous Identifier (PPID) as described in [section 8](https://openid.net/specs/openid-connect-core-1_0.html#SubjectIDTypes) of **[OIDC]**. Furthermore, the identifier MUST be unique per customer as per the definition of customer in the CDR Federation section of this profile.

It is RECOMMENDED that the `sub` value is generated as a version 4 Universally Unique
Identifier (UUID) **[RFC4122]**.


### CDR Arrangement ID

> Non-normative example: Token Endpoint hydration

> Request

```
POST /token HTTP/1.1
Host: https://data.holder.com.au
Content-Type: application/x-www-form-urlencoded

client_id=s6BhdRkqt3
&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer
&client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...
&grant_type=refresh_token
&refresh_token=8xLOxBtZp8
&scope=openid%20profile
```

> Response

```
{
  "access_token": "2YotnFZFEjr1zCsicMWpAA",
  "expires_in": 3600,
  "refresh_token": "tGzv3JOkF0XG5Qx2TlKWIA",
  "id_token": "eyJraWQiOiIxZTlnZGs3IiwiYWxnIjoiUl...",
  "cdr_arrangement_id": "02e7c9d9-cfe7-4c3e-8f64-e91173c84ecb"
}
```

> Decoded JWT

```
{
  "iss": "https://data.holder.com.au",
  "sub": "a9ebbef6-1f0b-44eb-96cf-0c5b51b37ab2",
  "aud": "12345",
  "nonce": "n-0S6_WzA2Mj",
  "exp": 1311281970,
  "iat": 1311280970,
  "nbf": 1311280970,
  "auth_time": 1311280969,
  "acr": "urn:cds.au:cdr:3",
  "refresh_token_expires_at": 1311281970,
  "sharing_expires_at": 1311281970
}
```

> Non-normative example: Token Introspection Endpoint hydration

> Request

```
POST /token/introspect HTTP/1.1
Host: https://data.holder.com.au
Content-Type: application/x-www-form-urlencoded

client_id=s6BhdRkqt3
&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer
&client_assertion=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNDU2In0.ey ...
&token=tGzv3JOkF0XG5Qx2TlKWIA
&token_type_hint=refresh_token
```

> Response

```
{
  "active": true,
  "exp": 1311281970,
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read",
  "cdr_arrangement_id": "02e7c9d9-cfe7-4c3e-8f64-e91173c84ecb"
}
```

The CDR Arrangement ID is a unique string representing a consent arrangement between a Data Recipient and Data Holder for a given consumer.

The identifier MUST be unique per customer according to the definition of customer in the CDR Federation section of this profile.

The Data Holder MUST provide the CDR Arrangement ID as the claim ``cdr_arrangement_id`` in the Token End Point response and Token Introspection End Point response.

A Data Holder MUST only return the ``cdr_arrangement_id`` in the Token and Token Introspection End Point responses if they also support concurrent consent. This ensures that Data Recipients have a reliable way to determine whether a given Data Holder supports concurrent consent.

Statements related to the CDR Arrangement ID:

* The CDR Arrangement ID MUST be unique to a Data Holder
* The CDR Arrangement ID MUST be non-guessable and must not identify a consumer
* A CDR Arrangement ID SHOULD be generated using an algorithm that reduces the chances of collision
* A CDR Arrangement ID MUST be static across consents within the one sharing arrangement (e.g. across consent renewal and re-authorisation)

#### Retrospectively obtaining a CDR Arrangement ID

For any existing consents, Data Holders must retrospectively generate a ``cdr_arrangement_id`` such that from November 2020, Data Recipients can obtain a valid ``cdr_arrangement_id`` for all active consents they hold.

A Data Recipient can call either the Token or Token Introspection End Points at any point post-consent to obtain the CDR Arrangement ID in the response JSON as the claim ``cdr_arrangement_id``.
