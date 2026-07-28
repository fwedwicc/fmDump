// Thumbnail Imports
import { Thumbnail001, Thumbnail002, Thumbnail003, Thumbnail004, Thumbnail005 } from '../assets/thumbnails'
// Data Imports
import { UI001, Skeleton001, UI001Code, Skeleton001Code, UI001CSS, Skeleton001CSS } from '../components/dumps/001'
import { UI002, Skeleton002, UI002Code, Skeleton002Code } from '../components/dumps/002'
import { UI003, Skeleton003, UI003Code, Skeleton003Code } from '../components/dumps/003'
import { UI004, Skeleton004, UI004Code, Skeleton004Code } from '../components/dumps/004'
import { UI005, UI005Code, UI005CSS } from '../components/dumps/005'

export const Data = [
  {
    id: 'ui001',
    to: '/view/ui001',
    thumbnail: Thumbnail001,
    title: '001',
    label: 'Apple card',
    desc: "A premium job listing card inspired by Apple's minimalist design language, featuring clean typography, soft depth, and an effortless layout that keeps the focus on the opportunity.",
    UI: UI001,
    Skeleton: Skeleton001,
    sourceCodeJSX: UI001Code,
    sourceCodeCSS: UI001CSS,
    skeletonSourceCodeJSX: Skeleton001Code,
    skeletonSourceCodeCSS: Skeleton001CSS,
    credits: '@piyushsphere (X/Twitter)',
    reference: 'https://ph.pinterest.com/pin/7529524371949146',
  },
  {
    id: 'ui002',
    to: '/view/ui002',
    thumbnail: Thumbnail002,
    title: '002',
    label: 'Zen Card',
    desc: 'A sleek focus mode card that blends soft purple accents, subtle depth, and minimalist design to promote a relaxing and distraction-free environment.',
    UI: UI002,
    Skeleton: Skeleton002,
    sourceCodeJSX: UI002Code,
    skeletonSourceCodeJSX: Skeleton002Code,
    credits: '@pxdx.baddies (Instagram)',
    reference: 'https://www.instagram.com/p/DHtlhhoNlwq/?img_index=1&epik=dj0yJnU9aUpoRDJVSURtX3VrR0czejhwa1NfaF9uWHl4OFFORXEmcD0wJm49OEFPVklkRXc0WjZzSHNrN21UUkhQdyZ0PUFBQUFBR2lITkpR',
  },
  {
    id: 'ui003',
    to: '/view/ui003',
    thumbnail: Thumbnail003,
    title: '003',
    label: 'iOS Popup',
    desc: 'A premium iOS-inspired profile popup featuring clean typography, subtle depth, and intuitive actions that make connecting feel effortless.',
    UI: UI003,
    Skeleton: Skeleton003,
    sourceCodeJSX: UI003Code,
    skeletonSourceCodeJSX: Skeleton003Code,
    sourceCodeJSX: UI003Code,
    credits: '@coryetzkorn (Instagram)',
    reference: 'https://ph.pinterest.com/pin/3799980930358509',
  },
  {
    id: 'ui004',
    to: '/view/ui004',
    thumbnail: Thumbnail004,
    title: '004',
    label: 'Flight Booking Widget',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae corrupti ipsam fugit velit asperiores.',
    UI: UI004,
    Skeleton: Skeleton004,
    sourceCodeJSX: UI004Code,
    skeletonSourceCodeJSX: Skeleton004Code,
    sourceCodeJSX: UI004Code,
    credits: '@',
    reference: 'https://dribbble.com/shots/25049627-UI-Cards-Animations-For-Booking-Platform',
  },
  {
    id: 'ui005',
    to: '/view/ui005',
    thumbnail: Thumbnail005,
    title: '005',
    label: 'Minimal Card UI',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit molestiae corrupti ipsam fugit velit asperiores.',
    UI: UI005,
    sourceCodeJSX: UI005Code,
    sourceCodeCSS: UI005CSS,
    credits: 'https://www.instagram.com/p/DG3fADRpWi6/',
  },
]