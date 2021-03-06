module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    extends: ['plugin:vue/recommended', 'eslint:recommended'],

    // add your custom rules here
    //it is base on https://github.com/vuejs/eslint-config-vue
    rules: {
        'no-console': 'off',
        'no-useless-escape': 0,
        'no-unused-vars': [2, {
            'vars': 'all',
            'args': 'none'
        }],
        "vue/no-v-html": "off",  // 用于设置对v-html关键属性的检索
        'no-mixed-spaces-and-tabs': 2,
    }
}
