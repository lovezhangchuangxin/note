const moment = require('moment');

const { clientId, clientSecret } = require('../../secret.js');

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
            {
                text: '前端',
                link: '/web/',
                items: [
                    { text: 'CSS', link: '/web/CSS/' },
                ]
            },
        ],
        sidebar: {
            '/guide/': [
                '/guide/',
                {
                    title: '指导',
                }
            ],
            '/web/': [
                '/web/',
                {
                    title: '学习Ajax',
                    path: '学习Ajax'
                },
                {
                    title: 'Bootstrap学习',
                    path: 'Bootstrap学习'
                },
                {
                    title: 'CSS',
                    path: '/web/CSS/',
                    children: [
                        {
                            title: 'rem适配布局方案',
                            path: '/web/CSS/rem适配布局方案'
                        },
                    ]
                }
            ],
            '/CSS/': [

            ]
        },
        lastUpdated: '更新时间',
        sidebarDepth: 3
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
                platform: 'github',
                // 其他的 Vssue 配置
                owner: 'lovezhangchuangxin',
                repo: 'note',
                clientId: clientId,
                clientSecret: clientSecret,
                autoCreateIssue: true,
                locale: 'zh'
            },
        ],
    ],
}