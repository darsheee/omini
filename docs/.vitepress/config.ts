import { defineConfig } from 'vitepress'

export const META_URL = 'https://pinia.vuejs.org'


const ogUrl = 'https://upsc.study.vercel.app/'
const ogImage = `${ogUrl}og-image.png`

export default (defineConfig({
  lang: 'en-US',
  title: 'Upsc.study',
  description: 'UPSC Study Material',
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: '32x32', type: 'ico/image/svg+xml', alt: 'icon' }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180', type: 'image/svg+xml' }],

    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
    // ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
    ['link', { rel: 'mask-icon', href: '/pwa-512x512.png', color: '#fb2a01', type: 'image/svg+xml' }],

    ['meta', { name: 'author', content: 'Upsc.study' }],
    ['meta', {
      name: 'keywords',
      content: 'UPSC, UPSC Prelims, UPSC study materials, gs-1, general studies, gs paper',
    }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Upsc.study' }],
    ['meta', { property: 'og:image', content: ogImage }],
    ['meta', { property: 'og:description', content: 'UPSC Prelims' }],
    ['meta', { property: 'og:url', content: ogUrl }],
    ['meta', { name: 'twitter:description', content: '' }],
    ['meta', { name: 'twitter:title', content: 'Upsc.study' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:image', content: 'https://pinia.vuejs.org/social.png' }],
    ['meta', { name: 'twitter:site', content: 'upsc.study' }],
    ['meta', { name: 'twitter:url', content: ogUrl }],
    ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' }],
  ],
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'dracula-soft',
    },
  },
  ignoreDeadLinks: true,

  themeConfig: {
    
    search: {
      provider: 'local'
    },
  
   
    logo: '/favicon.svg',
    
    
    socialLinks: [
      // { icon: 'discord', link: 'https://chat.antfu.me' },
      // { icon: 'github', link: 'https://github.com/vite-pwa/docs' },
    ],
    // footer: {
    //   message: 'Released ',
    //   copyright: 'Copyright © 2021-PRESENT',
    // },
    nav: [

      // { text: 'Modern History', link: '/upsc-modern-india-history/dutch' },
      // { text: 'Geography', link: '/india-upsc-gs1/geography/1.geo-tectonics/1.origin of earth.md' },
      { text: 'Indian Polity', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/1.historical-background.md' },

      // {
      //   text: 'General Studies 1',
      //   items: [
      //     { text: 'Ancient History', link: '/india-upsc-gs1/ancient-india/0.syllabus-ancient' },
      //     { text: 'Medieval History ', link: '/india-upsc-gs1/medieval-india/' },
      //     { text: 'Modern History ', link: '/india-upsc-gs1/modern-india/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },
      //     { text: '', link: '/india-upsc-gs1/' },

      //   ],
      // },
      // {
      //   text: 'General Studies 2',
      //   items: [

      //     { text: '', link: '/upsc-gs2/' },

      //   ],
      // },
      {
        text: 'Economics',
        items: [
          { text: 'Planning', link: '/upsc-gs3/indian_economy/1.planning-india' },
          { text: 'Growth', link: '/upsc-gs3/indian_economy/3.Growth.md' },
          { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy.md' },
          { text: '', link: '' },
          { text: 'Syllabus', link: '/upsc-gs3/indian_economy/' },
          { text: 'Planning', link: '/upsc-gs3/indian_economy/1.planning-india' },
          { text: 'Employment', link: '/upsc-gs3/indian_economy/5.Employment' },
          { text: 'Indian Currency System Today', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-currency-system-today.md' },

          { text: 'Inclusive Growth & Issues', link: '/upsc-gs3/indian_economy/inclusive-growth' },
          { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
          { text: 'India & WTO', link: '/upsc-gs3/indian_economy/international-economic-organisation' },

        ],
      },
      // {
      //   text: 'General Studies 4',
      //   items: [

      //     { text: 'Syllabus', link: '/upsc-ias-GS4/' },

      //   ],
      // },

    ],

    sidebar: {

      '/upsc-gs2/indian-polity/1.Constitutional Framework/': [
        {
          text: 'Indian Polity',
          collapsed: true,
          items: [
            { text: 'Historical ', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/1.historical-background.md ' },
            { text: 'Making of the Indian Constitution', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/2.making of the indian constitution.md ' },
            { text: 'Salient Features of the Indian Constitution', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/3.salient features of the indian constitution.md ' },
            { text: 'Preamble of the Indian Constitution', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/4.preamble of the indian constitution.md ' },
            { text: 'Union India', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/5.union & its territory.md ' },
            { text: 'Citizenship', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/6.Citizenship.md ' },
            { text: 'Fundamental Rights', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/7.Fundamental Rights.md ' },
            { text: 'Directive Principles', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/8.Directive Principles of State Policy.md ' },
            { text: 'Fundamental Duties', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/9.Fundamental Duties.md ' },
            { text: 'Amendment of the Constitution', link: '/upsc-gs2/indian-polity/1.Constitutional Framework/10.Amendment of the Constitution.md ' },

          ],
        },

      ],

      // '/upsc-modern-india-history': [
      //   {
      //     text: 'The 18th Century',
      //     collapsed: true,
      //     items: [
      //       { text: 'The Dutch', link: '/upsc-modern-india-history/dutch' },
      //       { text: '', link: '/upsc-modern-india-history/' },
      //       { text: '', link: '/upsc-modern-india-history/' },
      //       { text: '', link: '/upsc-modern-india-history/' },
      //       { text: '', link: '/upsc-modern-india-history/' },
      //       { text: '', link: '/upsc-modern-india-history/' },


      //       { text: '1701 - 1750', link: '/upsc-modern-india-history/1701-1750.md' },
      //       { text: '1751 - 1800', link: '/upsc-modern-india-history/1751-1800.md' },

      //     ],
      //   },

      //   {
      //     text: 'British Expansion and Consolidation',
      //     collapsed: true,
      //     items: [
      //       { text: 'British Expansion in South India', link: '/upsc-modern-india-history/british-expansion/anglo-mysore-maratha-wars.md' },
      //       { text: 'Expansion Beyond Indian Frontiers', link: '/upsc-modern-india-history/british-expansion/nepal-burma-afghanistan.md' },
      //       { text: 'British Expansion in North India', link: '/upsc-modern-india-history/british-expansion/annex-sindh-punjab-awadh.md' },

      //       { text: 'Dramatis Personae', link: '/upsc-modern-india-history/personae.md' },
      //       { text: '1600 - 1650', link: '/upsc-modern-india-history/1600-1650.md' },
      //       { text: '1651 - 1700', link: '/upsc-modern-india-history/1651-1700.md' },
      //     ],
      //   },

      //   {
      //     text: 'British Expansion in India',
      //     collapsed: true,
      //     items: [
      //       { text: 'Changes and Impact: Indian Economy', link: '/upsc-modern-india-history/transformed-economy-polity-society/revenue-permanent-ryotwari-mahalwari.md' },
      //       { text: ': Indian Administration and Society', link: '/upsc-modern-india-history/transformed-economy-polity-society/administration-civil-service.md' },
      //       { text: 'Rise of National Consciousness', link: '/upsc-modern-india-history/transformed-economy-polity-society/rise-indian-nationalism.md' },

      //       { text: 'Imperialism- Its Effects', link: '/upsc-modern-india-history/2.Imperialism-its-effects.md' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //     ],
      //   },

      //   {
      //     text: 'Early Structure of British Raj (1757 - 1857)',
      //     collapsed: true,
      //     items: [
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //     ],
      //   },

      //   {
      //     text: 'The Revolt of 1857',
      //     collapsed: true,
      //     items: [
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //     ],
      //   },

      //   {
      //     text: 'Administrative Changes after 1858',
      //     collapsed: true,
      //     items: [
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //     ],
      //   },

      //   {
      //     text: 'The Struggle Begins (1858 -1905)',
      //     collapsed: true,
      //     items: [
      //       { text: 'National Consciousness', link: '/upsc-modern-india-history/3.RISE-OF-NATIONAL-CONSCIOUSNESS.md' },

      //       { text: 'Social Reforms', link: '/upsc-modern-india-history/8.SOCIAL REFORMS.md' },
      //       { text: 'Formation of INC', link: '/upsc-modern-india-history/9.INDIAN NATIONAL CONGRESS  FORMATION.md' },
      //     ],
      //   },
      //   {
      //     text: 'Popular Uprisings and Revolts',
      //     collapsed: true,
      //     items: [
      //       { text: 'Popular Uprisings up to 1857', link: '/upsc-modern-india-history/popular-peasant-uprising/faraizi-santhal-khond-ramosi.md' },
      //       { text: 'Revolt of 1857', link: '/upsc-modern-india-history/popular-peasant-uprising/revolt-1857.md' },
      //       { text: 'Popular Uprisings After 1857', link: '/upsc-modern-india-history/popular-peasant-uprising/moplah-pabna-deccan-indigo-revolt.md' },
      //     ],
      //   },
      //   {
      //     text: 'Socio-Religious Reform Movements',
      //     collapsed: true,
      //     items: [
      //       { text: 'Part 1', link: '/upsc-modern-india-history/socio-religious-reform/wahabi-self-respect-vaikom.md' },
      //       { text: 'Part 2', link: '/upsc-modern-india-history/socio-religious-reform/wahabi-self-respect-vaikom.md' },
      //     ],
      //   },
      //   {
      //     text: 'Indian National Movement-Part 1',
      //     collapsed: true,
      //     items: [
      //       { text: 'Political Associations before Indian National Congress ', link: '/upsc-modern-india-history/indian-national-movement/political-associations.md' },
      //       { text: 'Formation- Indian National Congress', link: '/upsc-modern-india-history/indian-national-movement/formation-indian-national-congress.md' },
      //       { text: 'The Moderate Phase', link: '' },
      //       { text: '', link: '/upsc-modern-india-history/indian-national-movement/moderate-phase.md' },
      //       { text: 'Rise of the Extremists', link: '' },
      //       { text: '', link: '/upsc-modern-india-history/indian-national-movement/extremists-phase.md' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //     ],
      //   },
      //   {
      //     text: 'Partition of Bengal and the Swadeshi Movement',
      //     collapsed: true,
      //     items: [
      //       { text: 'Partition of Bengal', link: '/upsc-modern-india-history/indian-national-movement/partition-bengal-swadeshi-movement.md' },
      //       { text: 'Home Rule Movement', link: '/upsc-modern-india-history/indian-national-movement/ghadar-home-rule-movement.md' },
      //     ],
      //   },
      //   {
      //     text: 'Emergence of Mahatma Gandhi',
      //     collapsed: true,
      //     items: [
      //       { text: 'Emergence of Mahatma Gandhi', link: '/upsc-modern-india-history/indian-national-movement/emergence-mahatma-gandhi.md' },
      //       { text: '', link: '' },
      //     ],
      //   },
      //   {
      //     text: 'Non-Cooperation Movement',
      //     collapsed: true,
      //     items: [
      //       { text: 'Non-Cooperation Movement', link: 'upsc-modern-india-history/indian-national-movement/khilafat-non-cooperation-movement.md' },
      //       { text: '', link: '' },
      //     ],
      //   },

      //   {
      //     text: 'RISING RESENTMENT',
      //     collapsed: true,
      //     items: [
      //       { text: 'Popular Uprisings', link: '/upsc-modern-india-history/7.POPULAR UPRISINGS.md' },
      //     ],
      //   },

      //   {
      //     text: '',
      //     collapsed: true,
      //     items: [

      //     ],
      //   },

      //   {
      //     text: '',
      //     collapsed: true,
      //     items: [

      //     ],
      //   },

      //   {
      //     text: 'Nationalist Movement (1905-18)',
      //     collapsed: true,
      //     items: [
      //       { text: 'Moderates & Extremists', link: '/upsc-modern-india-history/10.MODERATES AND EXTREMISTS.md' },
      //       { text: 'Partition of Bengal', link: '/upsc-modern-india-history/11.PARTITION OF BENGAL.md' },
      //       { text: 'Muslim League', link: '/upsc-modern-india-history/12.Muslim-league.md' },
      //       { text: 'The First World War', link: '/upsc-modern-india-history/13.THE FIRST WORLD WAR.md' },
      //       { text: 'Revolutionary Trends', link: '/upsc-modern-india-history/15.REVOLUTIONARY TRENDS.md' },
      //     ],
      //   },

      //   {
      //     text: 'Struggle for Swaraj (1919-27)',
      //     collapsed: true,
      //     items: [

      //       { text: 'Emergence of Gandhi', link: '/upsc-modern-india-history/16.MAHATMA-GANDHI-EMERGENCE.md' },
      //       { text: 'Constitutional Reforms 1892-1920', link: '/upsc-modern-india-history/17.CONSTITUTIONAL REFORMS 1892-1920.md' },
      //       { text: 'Non-Cooperation Movement', link: '/upsc-modern-india-history/18.NON-COOPERATION MOVEMENT.md' },
      //       { text: 'Caste Movements', link: '/upsc-modern-india-history/20.THE NON-BRAHMIN  MOVEMENT.md' },
      //       { text: 'Swarjists', link: '/upsc-modern-india-history/21.SWARA JISTS.md' },

      //       { text: 'GROWTH OF COMMUNALISM', link: '/upsc-modern-india-history/22.GROWTH OF COMMUNALISM.md' },
      //       { text: 'NATIONALIST LITERATURE', link: '/upsc-modern-india-history/23.NATIONALIST LITERATURE.md' },
      //       { text: 'REVOLUTIONARY AND TERRORIST MOVEMENT', link: '/upsc-modern-india-history/24.REVOLUTIONARY AND TERRORIST MOVEMENT.md' },

      //     ],
      //   },

      //   {
      //     text: 'Struggle for Swaraj (1927-39)',
      //     collapsed: true,
      //     items: [

      //       { text: 'Simon Commission', link: '/upsc-modern-india-history/simon-commission-boycott.md' },
      //       { text: 'Civil Disobedience Movement', link: '/upsc-modern-india-history/25.CIVIL DOBEDIENCE MOVEMENT.md' },

      //       { text: ' Socialist Idea in INC', link: '/upsc-modern-india-history/26.SOCIALIST IDEA -INC.md' },
      //       { text: 'Growth of the Left Ideology', link: '/upsc-modern-india-history/27.GROWTH OF THE LEFT.md' },
      //       { text: 'Growth of Trade Union', link: '/upsc-modern-india-history/28.GROWTH OF TRADE UNION.md' },

      //       { text: 'CONSTITUTIONAL REFORMS  1921-1935', link: '/upsc-modern-india-history/29.CONSTITUTIONAL REFORMS  1921-1935.md' },
      //       { text: 'Election of 1937', link: '/upsc-modern-india-history/30.ELECTIONS OF 1937.md' },

      //     ],
      //   },

      //   {
      //     text: 'Freedom with Partition <br>(1939 - 47)',
      //     collapsed: true,
      //     items: [
      //       { text: 'Nationalism - 2nd World War', link: '/upsc-modern-india-history/34.Second World War.md' },

      //       { text: 'Towards Independence', link: '/upsc-modern-india-history/35.TOWARDS-INDEPENDENCE.md' },
      //       { text: 'Communalism & Partition', link: '/upsc-modern-india-history/36.COMMUNALISM.md' },

      //     ],
      //   },

      // ],

      // '/india-upsc-gs1/ancient-india': [
      //   {
      //     text: '',
      //      collapsed: true,
      //     items: [
      //       { text: 'Syllabus- Ancient History', link: '/india-upsc-gs1/ancient-india/0.syllabus-ancient' },
      //       { text: '1.Pre-history and Proto-history', link: '/india-upsc-gs1/ancient-india/1.pre-history' },
      //       { text: '2.Indus Valley Civilization', link: '/india-upsc-gs1/ancient-india/2.indus-valley' },
      //       { text: '3.Megalithic Cultures', link: '/india-upsc-gs1/ancient-india/3.megalithic-cultures' },

      //       { text: '4.Aryans and Vedic Period', link: '/india-upsc-gs1/ancient-india/4.vedic-period' },
      //       { text: '5.Period of Mahajanapadas', link: '/india-upsc-gs1/ancient-india/5.mahajanapadas' },
      //       { text: '6.Jainism & Buddhism', link: '/india-upsc-gs1/ancient-india/6.mauryan-period' },
      //       { text: '7.Magadhan Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '8.Iranian-Macedonian Invasions', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '9.Mauryan Period', link: '/india-upsc-gs1/ancient-india/' },

      //       { text: '10.Mauryan Period', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '11.Indo-Greeks', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '12.Satavahanas', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '13.Cholas-Pandyas-Cheras', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '14.Sangam Age', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '15.Gupta Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '16.Harsha Kingdom', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '17.Bhakti & Sufi Movement', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '18.Palas-Pratiharas-Rashtrakutas', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '19.Chola Empire', link: '/india-upsc-gs1/ancient-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //       { text: '20.Delhi Sultante', link: '' },
      //       { text: '21. Khalji Revolution', link: '' },
      //       { text: '22.Vijayanagara Empire', link: '' },
      //       { text: '23.Mughal Empire', link: '' },
      //     ],
      //   },

      // ],

      // '/india-upsc-gs1/medieval-india': [
      //   {
      //     text: '',
      //      collapsed: true,
      //     items: [

      //       { text: '', link: '/india-upsc-gs1/medieval-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //     ],
      //   },

      // ],

      // '/india-upsc-gs1/modern-india': [
      //   {
      //     text: '',
      //      collapsed: true,
      //     items: [

      //       { text: '', link: '/india-upsc-gs1/modern-india/' },
      //       { text: '', link: '' },
      //       { text: '', link: '' },

      //     ],
      //   },

      // ],

      '/upsc-gs3/indian_economy': [
        {
          text: 'Indian Economy & Issues',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Planning of Indian Economy', link: '/upsc-gs3/indian_economy/1.planning-india' },
            { text: 'Growth of Indian Economy ', link: '/upsc-gs3/indian_economy/3.Growth' },

            { text: 'Development', link: '/upsc-gs3/indian_economy/4.Development' },

            { text: 'Employment', link: '/upsc-gs3/indian_economy/5.Employment' },
            { text: 'Structure of Indian Economy', link: '/upsc-gs3/indian_economy/structure-indian-economy' },
            { text: 'National Income Accounting', link: '/upsc-gs3/indian_economy/national-income-accounting' },

            { text: 'External Sector', link: '/upsc-gs3/indian_economy/external-sector' },
            { text: 'International Economic Organisation', link: '/upsc-gs3/indian_economy/international-economic-organisation' },
          ],
        },

        {
          text: 'Inculsive Growth & Issues',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Inclusive Growth', link: '/upsc-gs3/indian_economy/inclusive-growth' },
            { text: 'Poverty', link: '/upsc-gs3/indian_economy/poverty' },

          ],
        },

        {
          text: 'Govt. Budgeting',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
            { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy' },
            { text: 'Monetary Management ', link: '/upsc-gs3/indian_economy/monetary-management' },
            { text: 'Inflation ', link: '/upsc-gs3/indian_economy/inflation' },
            { text: 'Taxation System ', link: '/upsc-gs3/indian_economy/taxation-system' },
            { text: 'Indian Financial System ', link: '/upsc-gs3/indian_economy/indian-financial-system' },
          ],
        },

      ],

      '/upsc-gs3/indian_economy/indian-currency-system': [
        {
          text: 'Indian Currency System',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Indian Currency System Today', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-currency-system-today.md' },
            { text: 'Sources of Broad Money', link: '/upsc-gs3/indian_economy/indian-currency-system/sources-of-broad-money.md' },

            { text: 'New Monetary & Liquidity Aggregates', link: '/upsc-gs3/indian_economy/indian-currency-system/new-monetary-and-liquidity-aggregates.md' },

            { text: 'Reserve Money', link: '/upsc-gs3/indian_economy/indian-currency-system/reserve-money-and-money-multiplier.md' },
            { text: 'External Value of the Rupee', link: '/upsc-gs3/indian_economy/indian-currency-system/external-value-of-rupee.md' },
            { text: 'India Foreign Exchange Reserves', link: '/upsc-gs3/indian_economy/indian-currency-system/indian-foreign-exchange-reserves.md' },

            { text: 'Convertibility of the Rupee', link: '/upsc-gs3/indian_economy/indian-currency-system/convertibility-of-rupee.md' },
            { text: 'FEMA Act', link: '/upsc-gs3/indian_economy/indian-currency-system/foreign-exchange-management-act.md' },
          ],
        },

        {
          text: 'Inculsive Growth & Issues',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Inclusive Growth', link: '/upsc-gs3/indian_economy/inclusive-growth' },
            { text: 'Poverty', link: '/upsc-gs3/indian_economy/poverty' },

          ],
        },

        {
          text: 'Govt. Budgeting',
          collapsible: true,
          collapsed: true,
          items: [
            { text: 'Government Budgeting', link: '/upsc-gs3/indian_economy/government-budgeting' },
            { text: 'Fiscal Policy', link: '/upsc-gs3/indian_economy/fiscal-policy' },
            { text: 'Monetary Management ', link: '/upsc-gs3/indian_economy/monetary-management' },
            { text: 'Inflation ', link: '/upsc-gs3/indian_economy/inflation' },
            { text: 'Taxation System ', link: '/upsc-gs3/indian_economy/taxation-system' },
            { text: 'Indian Financial System ', link: '/upsc-gs3/indian_economy/indian-financial-system' },
          ],
        },

      ],

      '/india-upsc-gs1/geography': [
        {
          text: 'Geo-Tectonics',
          collapsible: true,
          collapsed: true,
          items: [

            { text: 'Past Questions', link: '/india-upsc-gs1/geography/geo-past-questions.md' },
            { text: 'Origin of Earth', link: '/india-upsc-gs1/geography/1.geo-tectonics/1.origin of earth' },
            { text: 'Earth - Living Planet', link: '/india-upsc-gs1/geography/1.geo-tectonics/2.earth a living planet' },
            { text: 'Interior of Earth', link: '/india-upsc-gs1/geography/1.geo-tectonics/3.interior of the earth' },
            { text: 'Isostasy', link: '/india-upsc-gs1/geography/1.geo-tectonics/4.isostasy' },
            // { text: '', link: '' },
          ],
        },

        {
          text: 'Lithosphere',
          collapsed: true,
          items: [

            { text: 'Earth Crust', link: '/india-upsc-gs1/geography/2.lithosphere/1.materials of the earth crust' },
            { text: 'Plate Tectonics', link: '/india-upsc-gs1/geography/2.lithosphere/2.continental drift & plate tectonics' },
            { text: 'Endognetic Forces', link: '/india-upsc-gs1/geography/2.lithosphere/3.endo gnetic forces.md' },
            { text: 'Exognetic Forces', link: '/india-upsc-gs1/geography/2.lithosphere/4.exo gnetic process.md' },
            // { text: '', link: '/india-upsc-gs1/geography/' },
          ],
        },

        {
          text: 'Atmosphere',
          collapsed: true,
          items: [

            { text: 'Structure of Atomsphere', link: '/india-upsc-gs1/geography/3.atmosphere/1.composition & structure of the atmosphere.md' },
            { text: 'Insolation', link: '/india-upsc-gs1/geography/3.atmosphere/2.insolation & atmospheric temperature.md' },
            { text: 'Global Distribution', link: '/india-upsc-gs1/geography/3.atmosphere/3.global distribution of surface pressure systems & winds.md' },
            { text: 'Humidity', link: '/india-upsc-gs1/geography/3.atmosphere/4.humidity & precipitation.md' },
            { text: 'Climatic Classification', link: '/india-upsc-gs1/geography/3.atmosphere/5.climatic classfication.md' },

          ],
        },

        {
          text: 'Hydrosphere',
          collapsed: true,
          items: [

            { text: 'Introduction', link: '/india-upsc-gs1/geography/4.hydrosphere/1.introduction to hydrosphere.md' },
            { text: 'Ocean Floor', link: '/india-upsc-gs1/geography/4.hydrosphere/2.ocean floor & relief feature.md' },
            { text: 'Distribution of Salinity', link: '/india-upsc-gs1/geography/4.hydrosphere/3.distribution of temperature & salinity in the oceans.md' },
            { text: 'Tides & Currents', link: '/india-upsc-gs1/geography/4.hydrosphere/4.tides & currents.md' },
            { text: 'Ocean Desposits', link: '/india-upsc-gs1/geography/4.hydrosphere/5.ocean deposits.md' },

          ],
        },

        // {
        //   text: 'Indian Geography',
        //   collapsed: true,
        //   items: [

        //     { text: 'Rivers', link: '/india-upsc-gs1/geography/5.Indian Geography/1.rivers in india.md' },

        //     { text: 'Climate', link: '/india-upsc-gs1/geography/5.Indian Geography/2.climate in India.md' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },

        //   ],
        // },

        // {
        //   text: '',
        //   collapsed: true,
        //   items: [

        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },
        //     { text: '', link: '/india-upsc-gs1/geography/' },

        //   ],
        // },

      ],

    },
  },
  
}))
