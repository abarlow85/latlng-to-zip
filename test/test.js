const expect = require('expect');

const reverseGeocode = require('../');

describe('convert longitude and latitude to zipcode', () => {
  it('responds with a zipcode', done => {
    const region = {
      longitude:'-122.22678059062257',
      latitude: '37.41036745477903'
    };
    reverseGeocode(region)
    .then(zip => {
      expect(zip.length).toBe(5);
      done();
    })
    .catch(err => done(err));
  });

  it('ocean coordinates respond with no results', done => {
    const region = {
      longitude:'-123.6880124938887',
      latitude: '36.911715043014055'
    };
    reverseGeocode(region)
    .then(res => {
      done(res);
    })
    .catch(err => {
      expect(err.response.data).toBe('No results');
      done();
    })
    .catch(err => {
      done(err);
    });
  });

});
