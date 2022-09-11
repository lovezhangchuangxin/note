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
                    { text: 'Javascript', link: '/web/JS/' },
                ]
            },
            {
                text: 'HUST',
                link: '/hust/',
                items: [
                    { text: 'network', link: '/hust/network/' },
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
                    title: 'CSS',
                    path: '/web/CSS/',
                    children: [
                        {
                            title: 'rem适配布局方案',
                            path: '/web/CSS/rem适配布局方案'
                        },
                        {
                            title: 'Bootstrap学习',
                            path: '/web/CSS/Bootstrap学习'
                        },
                    ]
                },
                {
                    title: 'JavaScript',
                    path: '/web/JS/',
                    children: [
                        {
                            title: 'this理解',
                            path: '/web/JS/this理解'
                        },
                        {
                            title: '改变this指向',
                            path: '/web/JS/改变this指向'
                        },
                        {
                            title: 'Polyfill和转译器',
                            path: '/web/JS/Polyfill和转译器'
                        },
                        {
                            title: '学习Ajax',
                            path: '/web/JS/学习Ajax'
                        },
                    ]
                }
            ],
            '/hust/': [
                '/hust/',
                {
                    title: 'network',
                    path: '/hust/network/',
                    children: [
                        {
                            title: '计网习题',
                            path: '/hust/network/计网习题'
                        }
                    ]
                }
            ],
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