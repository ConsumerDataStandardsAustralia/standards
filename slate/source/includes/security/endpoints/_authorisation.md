<a id="authorisation-endpoint"></a>
### Authorisation End Point

> Non-Normative Example  
> This example demonstrates how an ADR may send an authorisation request object by value in the front-channel to the Data Holder.

```
## Request

GET /authorise?
   response_type=code%20id_token&client_id=12345&
   scope=openid%20profile%20bank:accounts.basic:read%20bank:accounts.detail:read&
   request=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.ey ...
HTTP/1.1
Host: www.holder.com.au

## Decoded request JWT
{
  "alg": "PS256",
  "typ": "JWT",
  "kid": "123"
}
{
  "iss": "12345",
  "exp": 1516239322,
  "aud": "https://www.recipient.com.au",
  "response_type": "code id_token",
  "client_id": "12345",
  "redirect_uri": "https://www.recipient.com.au/coolstuff",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read",
  "state": "af0ifjsldkj",
  "nonce": "n-0S6_WzA2Mj",
  "claims": {
    "sharing_duration": 7776000,
    "userinfo": {
      "given_name": {"essential": true},
      "family_name": null
    },
    "id_token": {
      "acr": {
        "essential": true,
        "values": ["urn:cds.au:cdr:2"]
      },
      "refresh_token_expires_at": {
        "essential": true
      },
      "sharing_expires_at": {
        "essential": true
      }
    }
  }
}

```

> Non-Normative Example  
> This example demonstrates how an ADR may send a staged authorisation request (using PAR) in the back-channel to the Data Holder.   
> 
> It demonstrates a FAPI 1.0 Final compliant authorisation request using the PAR to first submit the authorisation request object.  

```
## Request

GET /authorize?client_id=12345&
     scope=openid&
     request_uri=urn%3Aietf%3Aparams%3Aoauth%3Arequest_uri%3A6esc_11ACC5bwc014ltc14eY22c
HTTP/1.1
Host: www.holder.com.au

```

| Description | Value   |
|---|---|
| Hosted By  | Data Holder  |
| Transport Security | TLS |
| Client Authentication Required| No|
| Bearer Token Required| No|

The requirements for the Authorisation End Point are specified in [section 3.3.2](https://openid.net/specs/openid-connect-core-1_0.html#HybridAuthorizationEndpoint) of **[[OIDC]](#nref-OIDC)** and further specified under section [5.2.2](https://openid.net/specs/openid-financial-api-part-2.html#authorization-server) of **[[FAPI-RW-Draft]](#nref-FAPI-RW-Draft)**.  This end point is invoked as part of the [Hybrid Authentication flow](#hybrid-flow).
