### 安装路由
npm i vue-router --save

### 安装vuex
npm install vuex --save

### js-cookie
npm install js-cookie --save

## nprogress  
进度条
npm install --save nprogress 或者

## normalize
npm install --save normalize.css
- 保护有用的浏览器默认样式而不是完全去掉它们
- 一般化的样式：为大部分HTML元素提供
- 修复浏览器自身的bug并保证各浏览器的一致性
- 优化CSS可用性：用一些小技巧
- 解释代码：用注释和详细的文档来

## screenfull.js实现全屏功能（vue项目中运用）
在命令行中执行：npm install --save screenfull   （注：因为这是生产依赖，所以执行--save）

## webstorm配置eslint
 1. 点击settings->pluings ->搜索eslint-> Install安装
 2. 安装好之后，找到settings中ESLint，选中，就会进入配置页面，勾选Enable->第一项配置自己安装nodejs目录下node.exe,第二项配置当前项目中node_modules/.bin目录下的eslint.cmd，第三项改成.eslintrc.js
 3. 最后点击Apply应用，点击ok就行了
 4. 使用可以在菜单栏下的code->ESlint Fix 修复，也可以设置快捷键，如下：
点击keyMap->搜索eslint->选中code下面的eslint->右键Add Keyboard ShortCut 摁住Alt + X 键 以后使用alt + x 就可以直接进行eslint修复了
