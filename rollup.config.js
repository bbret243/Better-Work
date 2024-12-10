import postcss from '@rollup/plugin-postcss';

export default {
  input: 'src/index.js',
  output: {
    dir: 'output',
    format: 'es',
  },
  plugins: [postcss()],
};