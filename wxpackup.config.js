console.log('wxpackup.config.js', process.env.NODE_ENV);
/** @type import('wxpackup').WxPackupConfig */
module.exports = {
  ignores: ['node_modules/**/*'],
  privateKeyPath: '.keystore',
};
