module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
