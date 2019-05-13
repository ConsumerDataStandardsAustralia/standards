# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1+1] - 2018-11-23
### Added
- First draft of CDR Info Sec Profile

## [0.0.1+2] - 2018-11-24
### Added
- Change log [#5](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/5)

### Fixed
- Bug [#3](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/3)

## [0.0.2+1] - 2018-11-30
### Added
- Published 0.0.2 build 1.

### Fixed
- Bug [#16] (https://github.com/ConsumerDataStandardsAustralia/infosec/issues/16)

## [0.0.2+2] - 2018-12-08
### Added
 - Todos for linking directly to relevant part(s) of specifications.

### Fixed
 - Various typographical errors.
 - Padding of time values in date times per ISO8601.
 - Made it clearer which values are being referred to in _Hashing value for state and authorisation code_.

## [0.0.3+1] - 2018-12-11
### Added
 - Define Normative and Non-Normative elements - Feature [#24](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/24).
 - Clarify Request Object Content - Feature [#13](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/13).
 - Consent and Authorisation - Feature [#12](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/12)
 - Refine Introspection Endpoint section - Feature [#11](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/11)
 - Add Vectors of Trust - Feature [#10](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/10)
 - Update LoAs with LoA 2 [#4](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/4)

## [0.0.3+2] - 2018-12-14
### Fixed
- Typographic errors.

## [0.0.3+3] - 2018-12-14
### Changed
- X1254 is now an informative reference - Feature [#37](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/37).

### Added
- 12.2 might imply vectors of trust is required. Feature [#30](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/30)

### Fixed
- Add `essential` field in examples of essential claims  - Bug [#29](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/29)

## [0.0.3+4] - 2018-12-18

### Fixed
- Improved clarity of document.
- Simplified introduction.
- CIBA is now FAPI-CIBA
- Fixed some typographic errors.
- Replaced customer with consumer.
- Removed references to accreditation of Data Holder.
- Holder and Recipient are now Data Holder and Data Recipient.
- `iss` claim is not supported on request object.
- `iat` claim in not mandatory as part of private key client authentication JWT.
- `bc-authorize` is now `backchannel_authentication_endpoint` on OIDD.
- *user* is now *end-user* in appendix.

## [0.0.3+5] - 2018-12-19

### Fixed
- Bug with consent id outside of claims [#42](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/42)

## [0.1.0+1] - 2018-12-20
### Added
- Published 0.1.0 build 1.

## [0.1.1+1] - 2019-01-07
### Added
- Published 0.1.1 build 1.
- Only private key JWT will be supported as outlined in proposal [Client Authentication - Private Key Support Only #7](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/7)
- Sector URIs will be supported.  This issue is discussed under issue [#48](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/48).

## [0.1.1+2] - 2019-01-07
### Added
- Reflect FAPI and CIBA Core updates in Profile as per feature issue [#50](https://github.com/ConsumerDataStandardsAustralia/infosec/issues/50).

## [0.2.0] - 2019-05-07
### Added
- Merged with standards.
