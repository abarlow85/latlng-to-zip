# latlng-to-zip
Convert longitude and latitude to a zipcode

## Installation
`npm install latlng-to-zip`

## Getting Starting
```
const reverseGeocode = require('latlng-to-zip')
reverseGeocode({latitude, longitude})
  .then(zipcode => zipcode)
  .catch(err => err);
```

## Testing
`npm test`
