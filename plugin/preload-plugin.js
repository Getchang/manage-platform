'use strit';

const puppeteer = require('puppeteer');

class preloadPlugins {
  // 在插件函数的 prototype 上定义一个 `apply` 方法，以 compiler 为参数。
  constructor(option = {}) {
    console.log(option);
    this.option = option;
    this.init();
  }

  async init() {
    this.browser = await puppeteer.launch({
      headless: false, //有浏览器界面启动
      slowMo: 100, //放慢浏览器执行速度，方便测试观察
      args: [
        //启动 Chrome 的参数，详见上文中的介绍
        '–no-sandbox',
        '--window-size=1280,960',
      ],
    });
    this.page = await this.browser.newPage();
    // console.log(puppeteer.devices);
    await this.page.setViewport({ width: 1920, height: 800 });
    await this.page.goto('https://changs.net.cn/manage');
    this.page.on('console', (...args) => {
      // this.log.info(puppeteer.devices);
      // console.log(...args);
    });
    await page.close();
    await browser.close();
  }

  apply(compiler) {
    // 指定一个挂载到 webpack 自身的事件钩子。
    compiler.hooks.emit.tapAsync('MyExampleWebpackPlugin', (compilation, callback) => {
      console.log('这是一个示例插件！');
      // console.log('这里表示了资源的单次构建的 `compilation` 对象：', compilation);

      // 用 webpack 提供的插件 API 处理构建过程
      // compilation.addModule(/* ... */);

      callback();
    });
  }
}
module.exports = { preloadPlugins };
