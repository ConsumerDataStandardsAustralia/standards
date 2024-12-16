### Authorisation End Point

```diff
- Removed OIDC Hybrid Flow non-normative examples.
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

```diff
- Updated references to Authorization Code Flow. Previously OIDC Hybrid Flow.
```

The requirements for the Authorisation End Point are specified in [section 3.1](https://openid.net/specs/openid-connect-core-1_0.html#CodeFlowAuth) of **[[OIDC]](#nref-OIDC)** and further specified under section [5.2.2](https://openid.net/specs/openid-financial-api-part-2-1_0.html#authorization-server) of **[[FAPI-1.0-Advanced]](#nref-FAPI-1-0-Advanced)**.  This end point is invoked as part of the [Authentication Code Flow](#authorization-code-flow).

This endpoint does not require [CORS](#cors).
