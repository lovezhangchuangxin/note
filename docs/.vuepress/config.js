const moment = require('moment');

module.exports = {
    title: 'keqing的笔记',
    description: 'study notes',
    head: [
        ['link', { rel: 'icon', href: '/assets/images/aqing.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    // base: '/',
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        logo: '/assets/images/aqing.png',
        nav: [
            { text: '引导', link: '/guide/' },
            { text: '计算机', link: '/cs/' },
        ],
        sidebar: {
            '/guide/': [
                '/guide/',
                {
                    title: '指导',
                }
            ],
            '/cs/': [
                '/cs/',
                {
                    title: '计算机网络',
                }
            ],
        },
        lastUpdated: '更新时间',
    },
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp) => {
                    moment.locale('zh-cn')
                    return moment(timestamp).fromNow('LLLL')
                }
            }
        ],
        [
            '@vssue/vuepress-plugin-vssue',
            {
                // 设置 `platform` 而不是 `api`
                platform: 'github-v4',

                // 其他的 Vssue 配置
                owner: 'lovehexiechuangxin',
                repo: 'note',
                clientId: 'dce1d881a027f6cd66e4',
                clientSecret: '509deeb35e34ebba5e999a3bc56a388ebf24c564',
            },
        ],
    ],
}