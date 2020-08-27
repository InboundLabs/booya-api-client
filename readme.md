# Booya API Client
Node.js Client Library for Booya 2.0 API

# Installation
```
# npm 
npm install --save @inboundlabs/booya-api-client
 
# yarn 
yarn add @inboundlabs/booya-api-client
```

# Initialize API Client
``` JavaScript
const BooyaClient = require('@inboundlabs/booya-api-client');
 
// Initialize
const appId = 'inboundlabs'; // Replace with your appId from https://go.booya.io
const booyaClient = new BooyaClient(appId);
```

# Usage
## Verify Token

``` JavaScript
booyaClient.verify(token).then(response => {
    const user = response.user;
    // Do authenticated stuff
}).catch(err => {
    console.error('error => ', err);
    // Handle authentication error
});
```


