
// authenticate is the first step towards getting a token for deviceToken
module.exports = {
  authenticate: function(cb) {
    debug('secret->'.green, Matrix.deviceSecret)
    Matrix.api.device.getToken({
      apiServer: Matrix.apiServer,
      deviceId: Matrix.deviceId,
      deviceSecret: Matrix.deviceSecret
    }, function(err, token) {
      if (err) return cb(err);
      debug('auth state => '.green, token);
      // Matrix.events.emit('token-refresh', state);
      cb(null, token);
    });
  }
}
