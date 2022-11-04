/* This file is automatically generated by "gen_configs.py" */
import type { SiteLocaleData  } from '@vuepress/shared'
import type { DefaultThemeLocaleData } from '@vuepress/theme-default'
import { headConfig } from '../head.js'

const Translation = require('../../translations/el.json')

export const mainConfig_el: SiteLocaleData  = {
    lang: 'el',
    title: Translation.title,
    description: Translation.description,
    head: headConfig
}

export const defaultThemeConfig_el: DefaultThemeLocaleData = {
    selectLanguageName: "Ελληνικά",
    selectLanguageText: Translation.theme.selectLanguageText,
    selectLanguageAriaLabel: Translation.theme.selectLanguageAriaLabel,

    navbar: [
        {
            text: Translation.navbar.AboutAndFeatures,
            link: "/el/guide/",
        },
        
        {
            text: Translation.navbar.Installation,
            link: "/el/guide/installation.md",
        },
      
        {
            text: Translation.navbar.Usage,
            link: "/el/guide/usage.md",
        },
      
        {
            text: Translation.navbar.Configuration,
            link: "/el/guide/configuration.md",
        },
      
        {
            text: Translation.navbar.ChatBots,
            link: "/el/guide/chat-bots.md",
        },
    ],

    sidebar: [
        "/el/guide/README.md", 
        "/el/guide/installation.md", 
        "/el/guide/usage.md", 
        "/el/guide/configuration.md", 
        "/el/guide/chat-bots.md", 
        "/el/guide/creating-bots.md", 
        "/el/guide/contibuting.md"
    ],

    // page meta
    editLinkText: Translation.theme.editLinkText,
    lastUpdatedText: Translation.theme.lastUpdatedText,
    contributorsText: Translation.theme.contributorsText,

    // custom containers
    tip: Translation.theme.tip,
    warning: Translation.theme.warning,
    danger: Translation.theme.danger,

    // 404 page
    notFound: Translation.theme.notFound,
    backToHome: Translation.theme.backToHome,

    // a11y
    openInNewWindow: Translation.theme.openInNewWindow,
    toggleColorMode: Translation.theme.toggleColorMode,
    toggleSidebar: Translation.theme.toggleSidebar,
}