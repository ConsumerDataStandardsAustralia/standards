
### Pushed Authorisation endpoint



> Non-Normative Example  
> Utilising FAPI 1.0 Final, RFC9126, PKCE, JARM and Authorization Code Flow

> Request

```
POST /par HTTP/1.1
     Host: mtls.dh.example.com
     Content-Type: application/x-www-form-urlencoded

  request=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.ey...
```

> Decoded Request - FAPI 1.0 Final Phase 3 Obligation  
This example shows an authorisation request using the Authorisation Code Flow (FAPI 1.0 migration Phase 3)

```
{
  "iss": "s6BhdRkqt3",
  "exp": 1680832800,
  "nbf": 1680829200,
  "aud": "https://adr.example.com",
  "response_type": "code",
  "response_mode": "jwt",
  "client_id": "s6BhdRkqt3",
  "redirect_uri": "https://adr.example.com/redirects/redirect1",
  "scope": "openid profile bank:accounts.basic:read bank:accounts.detail:read",
  "nonce": "n-0S6_WzA2Mj",
  "state": "af0ifjsldkj",
  "claims": {
    "sharing_duration": 7776000,
    "cdr_arrangement_id": "02e7c9d9-cfe7-4c3e-8f64-e91173c84ecb",
    "id_token": {
      "acr": {
        "essential": true,
        "values": ["urn:cds.au:cdr:3"]
      }
    },
    "userinfo": {
      "given_name": null,
      "family_name": null
    }
  },
  "code_challenge": "ZTA2ZmFkYjUyMjA2NDNhZGVkYzE1M2I5OTYzZDAxNGI2NWNiZjAxMzVhNDlmMTk2NTlmZWE0OWVhOTQxZjhmZg==",
  "code_challenge_method": "S256"
}
```

> Response 

```
HTTP/1.1 201 Created
Content-Type: application/json
Cache-Control: no-cache, no-store
{
  "request_uri": "urn:mtls.dh.example.com:bwc4JK-ESC0w8acc191e-Y1LTC2",
  "expires_in": 3600
}
```
> Authorise 

```
## This is used by the ADR in the subsequent authorisation request as follows
## (this example uses PAR RFC 9126 and Authorization Code Flow):

GET /authorise?client_id=s6BhdRkqt3&
    request_uri=urn%3Amtls.dh.example.com%3Abwc4JK-ESC0w8acc191e-Y1LTC2
HTTP/1.1
Host: tls.dh.example.com
```

> Authorisation response using JARM response encryption 

```
eyJraWQiOiIwZWQ3YTNkZi1hMGJlLTRhZjQtOTk0YS1jNDBhODc0ODQwNjMiLCJhbGciOiJQUzI1NiJ9.eyJhdWQiOiIxMjM0NSIsImNvZGUiOiJpMVdzUm4xdUIxIiwiaXNzIjoiaHR0cHM6Ly9tdGxzLmRoLmV4YW1wbGUuY29tLyIsInN0YXRlIjoiYWYwaWZqc2xka2oiLCJleHAiOjE2NjcyNjgwMDB9.flBD3bTUHUFiNMbfgt-Uqt4wnEFHY79QYx0f9qrqPGPZLB-RBb-F20aPTyB9XaJ1JJ3ie1m0YxdMC7t6aiXSchZZQXBmYpIjvlbTceOVBYlr88llqeLAfQ5nCDD4p2axqyedpA83OgPF8i_Ngw0oRsCwBTueo6C40wYeI3ZT_n0hucQqGHcSoR1im7IY1rY0x99EZjJI3pxVtGwst6e-msomipnYedCdkNuPHE_Rnj0g897zi_NdK6m3dhxcpwaoMXcaYfMkkkzTlbz5_Ic9lWMx_z01C2wRNjRBArEJsNXW0Q8Vdhk_vtOAmO92Pr3cI8BpTr5KdY2O1iD-yRnkug

## Decoded Response
{
  "kid": "0ed7a3df-a0be-4af4-994a-c40a87484063",
  "alg": "PS256"
}
{
  "aud": "12345",
  "code": "i1WsRn1uB1",
  "iss": "https://mtls.dh.example.com/",
  "state": "af0ifjsldkj",
  "exp": 1667268000
}
```

| Description | Value |
|---|---|
| Hosted By | Data Holder |
| Transport Security | MTLS |
| Client Authentication Required| Yes |
| Bearer Token Required| No |


Data Holders **MUST** support Pushed Authorisation Requests (PAR) via the pushed authorisation endpoint according to **[[PAR]](#nref-PAR)**.

Data Recipient Software Products **MUST** send authorisation requests using **[[PAR]](#nref-PAR)** if supported by the Data Holder.

The Data Holder response provides the Data Recipient Software Product with a Request URI in the response. The Request URI is then passed to the Data Holder's Authorisation endpoint to initiate an authorisation flow.
