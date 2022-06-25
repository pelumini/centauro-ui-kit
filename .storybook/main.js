module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['./stories/*.stories.tsx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
