/* This file is automatically generated by "gen_configs.py" */
import type { SiteLocaleData  } from '@vuepress/shared'
import type { DefaultThemeLocaleData } from '@vuepress/theme-default'
import { headConfig } from '../head.js'

const Translation = require('../../translations/ca.json')

export const mainConfig_ca: SiteLocaleData  = {
    lang: 'ca',
    title: Translation.title,
    description: Translation.description,
    head: headConfig
}

export const defaultThemeConfig_ca: DefaultThemeLocaleData = {
    selectLanguageName: "Català",
    selectLanguageText: Translation.theme.selectLanguageText,
    selectLanguageAriaLabel: Translation.theme.selectLanguageAriaLabel,

    navbar: [
        {
            text: Translation.navbar.AboutAndFeatures,
            link: "/ca/guide/",
        },
        
        {
            text: Translation.navbar.Installation,
            link: "/ca/guide/installation.md",
        },
      
        {
            text: Translation.navbar.Usage,
            link: "/ca/guide/usage.md",
        },
      
        {
            text: Translation.navbar.Configuration,
            link: "/ca/guide/configuration.md",
        },
      
        {
            text: Translation.navbar.ChatBots,
            link: "/ca/guide/chat-bots.md",
        },
    ],

    sidebar: [
        "/ca/guide/README.md", 
        "/ca/guide/installation.md", 
        "/ca/guide/usage.md", 
        "/ca/guide/configuration.md", 
        "/ca/guide/chat-bots.md", 
        "/ca/guide/creating-bots.md", 
        "/ca/guide/contibuting.md"
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