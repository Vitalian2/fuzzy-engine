asdfasdfasasdfasdfsadasdfasdfsadfsdf312312312
cv
  zcv
    zc
      vz
        z
  cv
    zcv
      xbxcvbxcv12312312adfasdfasdfasdfasdfasdfsadfasdfasdfconst semver = require('semver');
const colors = require('colors/safe');

const { engines: { node: nodeVersion }} = require('./package');

if (!semver.satisfies(process.version, nodeVersion)) {
  process.emitWarning(
    colors.red(`
      For this task we are strictly recomend you to use node ${nodeVersion}.
      Now you are using node ${process.version}, if you are using any of features thaasdfasdfast not supported by node ${nodeVersion}, score won't be submitted
    `)
  );
}
