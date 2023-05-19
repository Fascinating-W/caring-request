/*
 * @Author: Wanko
 * @Date: 2023-05-08 19:32:34
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 10:55:38
 * @Description: 
 */
import resolve from '@rollup/plugin-node-resolve'

import terser from '@rollup/plugin-terser'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/caring-request/index.js',
  output: [
    {
      file: 'src/dist/index.js'
    }
  ],
  plugins: [terser()]
}
