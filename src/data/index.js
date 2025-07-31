import { Thumbnail001, Thumbnail002 } from '../assets/thumbnails'
import { UI001, UI001Code, UI001CSS } from '../components/dumps/001'
import { UI002, UI002Code } from '../components/dumps/002'

export const Data = [
  {
    id: 'ui001',
    to: '/view/ui001',
    thumbnail: Thumbnail001,
    title: '001',
    label: 'Apple card',
    UI: UI001,
    sourceCodeJSX: UI001Code,
    sourceCodeCSS: UI001CSS,
    credits: 'https://dribbble.com/shots/14112345-Apple-Card-UI',
  },
  {
    id: 'ui002',
    to: '/view/ui002',
    thumbnail: Thumbnail002,
    title: '002',
    label: 'Skeumorphism',
    UI: UI002,
    sourceCodeJSX: UI002Code,
    credits: 'https://dribbble.com/shots/14112345-Apple-Card-UI',
  },
]