import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

function resolve(pathName: string) {
  return path.resolve(__dirname, pathName);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components'),
      assets: resolve('src/assets'),
    },
  },
  logLevel: 'info',
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: false, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域
    host: true,
    hmr: true

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  },
});
