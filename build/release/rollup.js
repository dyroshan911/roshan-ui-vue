import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.ts',
  output: {
    name: 'V3Roshanui',
    dir: 'dist',
    format: 'umd',
    sourcemap: false,
    exports: 'named',
    globals: { vue: 'Vue' },
  },
  external: ['vue'],
  plugins: [
    postcss({
      extract: 'index.css',
      minimize: true,
      extensions: ['.css', '.scss'],
      conifg: true,
      use: [['sass', { data: '@import "src/style/global-import.scss";' }]],
    }),
    commonjs(),
    resolve(),
    terser(),
    typescript(),
    babel({
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      babelHelpers: 'runtime',
      exclude: '**/node_modules/**',
      presets: ['@vue/cli-plugin-babel/preset'],
    }),
  ],
};
