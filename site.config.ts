import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '3a57c1cea01c4b218d80a7ebb7518a5f',

  rootNotionSpaceId: null,

  name: 'Inflextion Music',
  domain: 'https://rt23456p.notion.site/Inflexion-Music-Landing-3a57c1cea01c4b218d80a7ebb7518a5f',
  author: 'Evan Xia',

  description: 'Example Next.js Notion Starter Kit Site',

  twitter: 'Music_Inflexion',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: false,

  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: 'f1199d37579b41cbabfc0b5174f4256a'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
  //   }
  // ]
})
