/* This file is automatically generated by "gen_configs.py" */
import type { SiteLocaleData  } from '@vuepress/shared'
import type { DefaultThemeLocaleData } from '@vuepress/theme-default'
import { headConfig } from '../head.js'

const Translation = require('../../translations/no.json')

export const mainConfig_no: SiteLocaleData  = {
    lang: 'no',
    title: Translation.title,
    description: Translation.description,
    head: headConfig
}

export const defaultThemeConfig_no: DefaultThemeLocaleData = {
    selectLanguageName: "Norsk",
    selectLanguageText: Translation.theme.selectLanguageText,
    selectLanguageAriaLabel: Translation.theme.selectLanguageAriaLabel,

    navbar: [
        {
            text: Translation.navbar.AboutAndFeatures,
            link: "/no/guide/",
        },
        
        {
            text: Translation.navbar.Installation,
            link: "/no/guide/installation.md",
        },
      
        {
            text: Translation.navbar.Usage,
            link: "/no/guide/usage.md",
        },
      
        {
            text: Translation.navbar.Configuration,
            link: "/no/guide/configuration.md",
        },
      
        {
            text: Translation.navbar.ChatBots,
            link: "/no/guide/chat-bots.md",
        },
    ],

    sidebar: [
        "/no/guide/README.md", 
        "/no/guide/installation.md", 
        "/no/guide/usage.md", 
        "/no/guide/configuration.md", 
        "/no/guide/chat-bots.md", 
        "/no/guide/creating-bots.md", 
        "/no/guide/contibuting.md"
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