module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { chrome: '60' } }],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-proposal-class-properties'],
};
