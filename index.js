const axios = require('axios');

function Booya(appId) {
  this.appId = appId;
}

const self = Booya.prototype;

Booya.prototype.verify = async (token) => {
  return axios.post(`https://auth.booya.io${self.appId?`/${self.appId}`:''}/auth/verify`, {
    token,
  }).then(res => {
    const user = res && res.data && res.data.user;
    if(user && user.email) {
      return Object.assign({}, res.data, {sub: user.email});
    } else {
      throw {message: 'Bad user'};
    }
  }).catch(e => {
    throw {message: 'Bad token'};
  })
};

module.exports = function (appId) {
  return new Booya(appId);
};
