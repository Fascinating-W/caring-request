/*
 * @Author: Wanko
 * @Date: 2023-05-08 19:32:34
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 11:20:44
 * @Description: 
 */
import terser from '@rollup/plugin-terser'

export default {
  input: 'src/caring-request/index.js',
  output: [
    {
      file: 'dist/index.js'
    }
  ],
  plugins: [terser()]
}
