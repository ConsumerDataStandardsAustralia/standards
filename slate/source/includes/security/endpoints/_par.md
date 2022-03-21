
### Pushed Authorisation End Point

> Non-Normative Example


> Request

```
POST /par HTTP/1.1
     Host: data.holder.com.au
     Content-Type: application/x-www-form-urlencoded

request=eyJhbGciOiJQUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyMyJ9.ey...
```

> Decoded Request

```
{
  "iss": "s6BhdRkqt3",
  "exp": 1516239322,
  "aud": "https://www.recipient.com.au",
  "response_type": "code id_token",
  "client_id": "s6BhdRkqt3",
  "redirect_uri": "https://www.recipient.com.au/coolstuff",
  "scope": "openid profile bank:accounts.basic:read
            bank:accounts.detail:read",
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
  }
}
```

> Response

```
HTTP/1.1 201 Created
Content-Type: application/json
Cache-Control: no-cache, no-store
{
  "request_uri": "urn:data.holder.com.au:bwc4JK-ESC0w8acc191e-Y1LTC2",
  "expires_in": 3600
}
```
> Authorise

```
## This is used by the ADR in the subsequent authorisation request as follows
## (note that until PAR is an RFC standard, the mandatory oAuth parameters as
## per FAPI R/W for confidential clients must be replayed in the request URL):

GET /authorise?client_id=s6BhdRkqt3&
   response_type=code%20id_token&
   scope=openid%20profile%20bank:accounts.basic:read%20bank:accounts.detail:read&
   request_uri=urn%3Adata.holder.com.au%3Abwc4JK-ESC0w8acc191e-Y1LTC2
HTTP/1.1
Host: data.holder.com.au
```

| Description | Value   |
|---|---|
| Hosted By  | Data Holder  |
|  Transport Security |  MTLS |
| Client Authentication Required| Yes |
| Bearer Token Required| No |


Data Holders **MUST** support Pushed Authorisation Requests (PAR) via the pushed authorisation end point according to **[[PAR]](#nref-PAR)**.


Data Recipient Software Products **MAY** send authorisation requests using **[[PAR]](#nref-PAR)** if supported by the Data Holder.

The Data Holder response provides the Data Recipient Software Product with a Request URI in the response. The Request URI is then passed to the Data Holder’s Authorisation End Point to initiate an authorisation flow.
