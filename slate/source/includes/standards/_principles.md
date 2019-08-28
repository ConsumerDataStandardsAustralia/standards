## Principles

The following principles, classified as Outcome Principles and Technical Principles, are the basis for the development of the standards for the Consumer Data Right.

###Outcome Principles
These principles articulate qualitative outcomes that the API definitions should seek to deliver.

####Principle 1: APIs are secure
The API definitions will consider and incorporate the need for a high degree of security to protect customer data.  This includes the risk of technical breach but also additional concerns of inadvertent data leakage through overly broad data payloads and scopes.  The security of customer data is a first order outcome that the API standards must seek to deliver.

####Principle 2: APIs use open standards
In order to promote widespread adoption, open standards that are robust and widely used in the industry will be used wherever possible.

####Principle 3: APIs provide a good customer experience
The API definitions will consider and incorporate the customer experience implications.  The APIs should support the creation of customer experiences that are simple and enticing to use.

####Principle 4: APIs provide a good developer experience
To ensure that the entry hurdle for new developers is low the experience of the developers that are building clients using the APIs will be considered.  The ability for a developer to easily understand and write code using the APIs in modern development environments should be facilitated by the API standards.

###Technical Principles
These principles articulate specific technical outcomes that the API definitions should seek to deliver.

####Principle 5: APIs are RESTful
The API standards will adhere to RESTful API concepts where possible and sensible to do so.  In particular the concepts of statelessness and resource orientation will be followed.

####Principle 6: APIs are implementation agnostic
The underlying implementation of the APIs should not be constrained or driven by the API definitions and standards.  Conversely, the underlying implementation choices should not be visible or derivable to the client applications using the APIs.

####Principle 7: APIs are simple
As complexity will increase implementation costs for both holders and clients as well as reduce the utility of the APIs, API definitions should seek to be as simple as possible but no simpler.

####Principle 8: APIs are rich in capability
As the APIs are defined care should be taken to ensure that the data payloads defined represent rich data sets that can be used in many scenarios, including scenarios not necessarily front of mind during the design process.

####Principle 9: APIs are performant
The API definitions should consider and incorporate performance implications during design ensuring that repeated calls are not necessary for simple use cases and that payload sizes do not introduce performance issues.

####Principle 10: APIs are consistent
The API definitions across the full suite of APIs should be consistent with each other as much as possible.  Where possible common data structures and patterns should be defined and reused.

####Principle 11: APIs are version controlled and backwards compatible
As the API definitions evolve care will be taken to ensure the operation of existing clients are protected when breaking changes occur.  Breaking changes will be protected by a well-defined version control model and by a policy of maintaining previous versions for a period of time to allow for backwards compatibility.

####Principle 12: APIs are extensible
The API definitions and standards should be built for extensibility. This extensibility should accommodate future API categories and industry sectors but it should also allow for extension by data holders to create unique, value add offerings to the ecosystem.
