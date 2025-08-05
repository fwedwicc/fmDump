// Thumbnail Imports
import { Thumbnail001, Thumbnail002, Thumbnail003 } from '../assets/thumbnails'
// Data Imports
import { UI001, UI001Code, UI001CSS } from '../components/dumps/001'
import { UI002, UI002Code } from '../components/dumps/002'
import { UI003, UI003Code } from '../components/dumps/003'

export const Data = [
  {
    id: 'ui001',
    to: '/view/ui001',
    thumbnail: Thumbnail001,
    title: '001',
    label: 'Apple card',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae corrupti ipsam fugit velit asperiores.',
    UI: UI001,
    sourceCodeJSX: UI001Code,
    sourceCodeCSS: UI001CSS,
    credits: 'https://ph.pinterest.com/pin/7529524371949146',
  },
  {
    id: 'ui002',
    to: '/view/ui002',
    thumbnail: Thumbnail002,
    title: '002',
    label: 'Skeumorphism',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae corrupti ipsam fugit velit asperiores.',
    UI: UI002,
    sourceCodeJSX: UI002Code,
    credits: 'https://www.instagram.com/p/DHtlhhoNlwq/?img_index=1&epik=dj0yJnU9aUpoRDJVSURtX3VrR0czejhwa1NfaF9uWHl4OFFORXEmcD0wJm49OEFPVklkRXc0WjZzSHNrN21UUkhQdyZ0PUFBQUFBR2lITkpR',
  },
  {
    id: 'ui003',
    to: '/view/ui003',
    thumbnail: Thumbnail003,
    title: '003',
    label: 'iOS Popup',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae corrupti ipsam fugit velit asperiores.',
    UI: UI003,
    sourceCodeJSX: UI003Code,
    credits: 'https://ph.pinterest.com/pin/3799980930358509',
  },
]