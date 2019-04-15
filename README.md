# latlng-to-zip
Convert longitude and latitude to a zipcode.  Requires use of [Google's Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)

## Installation
`npm install latlng-to-zip`

## Getting Starting
```
const reverseGeocode = require('latlng-to-zip');
reverseGeocode({latitude, longitude}, key)
  .then(zipcode => zipcode)
  .catch(err => err);
```

## Testing
`npm test`
