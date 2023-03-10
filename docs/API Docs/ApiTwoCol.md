---
title: Refresh and Access Token Overview
more_data:
- Can be provided
- as: objects
or: arrays
---


# Refresh and Access Tokens

Token Authentication and Management APIs
----------------------------------------

Public APIs for managing RefreshTokens and APIAccessTokens for the user.

:::tip
If your Organization is using SSO, like Okta, LDAP, and etc., you need to use the UI to create a RefreshToken by going to base-url/account/auth.
:::
Description
-----------

*   **APIAccessToken:** A short-lived access token, which can be passed as the value for the 'TOKEN' header in the requests for other APIs.

*   **RefreshToken:** A long living token the users can use to manage and create API Access Tokens, which can be used to interact with the other APIs.


Remember
--------

The default expiration times for RefreshToken and APIAccessToken are 60 days and 24 hours respectively. They can be configured using the \_conf by the Server Admins if you need different expiration times. For example:


```
Login to the  server, and using \`\_conf\`, update the RefreshToken lifespan (in days),

\_conf .authentication.token.refresh\_token\_lifespan -s 180

\-- sets the expiration time for any new RefreshTokens created after the change to be after 180 days(6 months) from creation.

Login to the  server, and using \`\_conf\`, update the

APIAccessToken lifespan (in hours),

\_conf .authentication.token.access\_token\_lifespan -s 2

\-- sets the expiration time for any new APIAccessTokens created after the change to be after 2 hours from creation.
```


All these APIs, except **Create RefreshToken**, are supported in SAML 2.0 Single Sign On environments. If you're using the SAML authentication, you can create the refresh tokens using the  GUI by visiting <BASE\_URL>/account/auth page.

Open API 3.0 Specification
--------------------------

The above APIs are also described using the Open API 3.0 Specification (OAS). OAS is a broadly adopted industry standard for describing APIs.

To see the specification, replace {InstanceURL} below with your  instance's URL and visit the link:

```
{InstanceURL}/openapi/api\_authentication/
```

**Note:** The Swagger UI is not enabled by default on an  instance. Please set the flag .feature\_flags.enable\_swagger to True using \_conf.

Create RefreshToken
-------------------

Creates a new RefreshToken for the user.

### URL

```
POST /integration/v1/createRefreshToken/
```

### Data Parameters

<div>
<table>
<thead>
<tr class="TableStyle-UKGTableStylesheet01-Head-Header1">
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Name</th>
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Type</th>
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Description</th>
<th class="TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1">Required</th>
</tr>
</thead>
<tbody>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">username</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">
<p>Username of the user on Alation.</p>
<p>Example: "basava@alation.com" 
</p>
</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">Yes</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">password</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">
<p>Password associated with the user on Alation. </p>
<p>Example: "P@s$w0rd!"</p>
</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2">Yes</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1">name</td>
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body1">
<p>Create the RefreshToken with this name.</p>
<p>Example: "TableauRefreshToken" 
</p>
</td>
<td class="TableStyle-UKGTableStylesheet01-BodyA-Column1-Body1">Yes</td>
</tr>
</tbody>
</table>

</div>

### Response Structure

**Content-Type:** text/json

**Status:** 201 CREATED

<div>
<table>
<thead>
<tr class="TableStyle-UKGTableStylesheet01-Head-Header1">
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Name</th>
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Type</th>
<th class="TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1">Description</th>
</tr>
</thead>
<tbody>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">refresh_token</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">
<p>RefreshToken generated for the user in Alation.</p>
<p>Example:	"6b86b273ff34fce19d6b804eff5a3f5747ada4eaa22f1d49c01e52ddb7875b4b"
</p>
</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">user_id</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">integer</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2">
<p>User ID associated with the refresh token who generated this token on Alation. </p>
<p>Example:	102
</p>
</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">created_at</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">dateTime</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">Timezone aware date-time at which the refresh token is created at.</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">name</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2">
<p>Name of the RefreshToken. </p>
<p>Example:	"TableauRefreshToken"
</p>
</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">token_expires_at</td>
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">dateTime</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">Timezone aware date-time until which the RefreshToken is valid for.</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2">token_status</td>
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2">string</td>
<td class="TableStyle-UKGTableStylesheet01-BodyA-Column1-Body2">
<p>Current status of the RefreshToken.</p>
<p>Enum:</p>
<p>"active",</p>
<p>"expired",</p>
<p>"revoked"</p>
<p>Example:	"active"
</p>
</td>
</tr>
</tbody>
</table>
</div>



#### All Responses
<div>
<table>
<thead>
<tr class="TableStyle-UKGTableStylesheet01-Head-Header1">
<th class="TableStyle-UKGTableStylesheet01-HeadE-Column1-Header1">Code</th>
<th class="TableStyle-UKGTableStylesheet01-HeadD-Column1-Header1">Description</th>
</tr>
</thead>
<tbody>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">201</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">Created</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">400</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2">Malformed Request</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">401</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">Unauthorized bad/missing token</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body2">403</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body2">Forbidden User cannot edit this resource</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body1">
<td class="TableStyle-UKGTableStylesheet01-BodyE-Column1-Body1">404</td>
<td class="TableStyle-UKGTableStylesheet01-BodyD-Column1-Body1">The specified resource was not found</td>
</tr>
<tr class="TableStyle-UKGTableStylesheet01-Body-Body2">
<td class="TableStyle-UKGTableStylesheet01-BodyB-Column1-Body2">500</td>
<td class="TableStyle-UKGTableStylesheet01-BodyA-Column1-Body2">Internal Server Error</td>
</tr>
</tbody>
</table>
</div>

### Code Samples

#### cURL

```
BASE\_URL="https://yourcompany.com/integration/v1/createRefreshToken/"

USER\_ID="dave@example.com"

PASSWORD="secret"

NAME="My Precious"

\# Create RefreshToken for user dave@example.com

curl -X POST -H "Content-Type: application/x-www-form-urlencoded" "${BASE\_URL}"

\--data-urlencode "username=${USER\_ID}" --data-urlencode "password=${PASSWORD}" --data-urlencode "name=${NAME}" -v
```

#### Python

```
\# Replace username, name and password with your login ID, desired token name and password.

data = {'username':'dave@example.com', 'password':'secret', 'name': 'My Precious Token'}

ION\_AT\_YOUR\_COMPANY\_URL="https://yourcompany.com"

\# Create RefreshToken for user: dave@example.com

response = requests.post(

'{base\_url}/integration/v1/createRefreshToken/'.format(base\_url=ION\_AT\_YOUR\_COMPANY\_URL

), data=data)

print(response.text)

\# Sample Response

\# {

\# "user\_id": 1151,

\# "created\_at": "2020-07-15T16:08:09.673391-07:00",

\# "token\_expires\_at": "2020-09-13T16:08:09.672850-07:00",

\# "token\_status": "ACTIVE",

\# "last\_used\_at": null,

\# "name": "My Precious Token",

\# "refresh\_token":

\# "mnuM-jp7uAOLWsG7ojs6rY-wweh2JVfKmNtWyPgVs-RdIysp4QyEHJtdd5Q5fECWEOsGVYxZ0eHy37j\_lqoPcQ"

\# }
```

