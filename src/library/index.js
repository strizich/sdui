import packageData from '../../package.json'
import { camelCase, kebab } from './core/utilities/SdTextTransform'

// Components
import './scss/main.scss'
import './components/SdElevation/elevation.scss'
import SdButton from './components/SdButton/SdButton'
import SdRouterLink from './components/SdButton/SdRouterLink'
import SdHamburger from './components/SdButton/SdHamburger'
import SdCard from './components/SdCard/SdCard'
import SdCardBody from './components/SdCard/SdCardBody'
import SdCardHeader from './components/SdCard/SdCardHeader'
import SdCardFooter from './components/SdCard/SdCardFooter'
import SdCardMedia from './components/SdCard/SdCardMedia'
import SdDialog from './components/SdDialog/SdDialog'
import SdDialogTitle from './components/SdDialog/SdDialogTitle'
import SdDialogContent from './components/SdDialog/SdDialogContent'
import SdDialogFooter from './components/SdDialog/SdDialogFooter'
import SdOverlay from './components/SdDialog/SdOverlay'
import SdCheckbox from './components/SdCheckbox/SdCheckbox'
import SdSwitch from './components/SdCheckbox/SdSwitch'
import SdRadio from './components/SdRadio/SdRadio'
import SdFieldset from './components/SdField/SdFieldset'
import SdField from './components/SdField/SdField'
import SdSelect from './components/SdField/SdSelect'
import SdLabel from './components/SdField/SdLabel'
import SdError from './components/SdField/SdError'
import SdIcon from './components/SdIcon/SdIcon'
import SdMouse from './components/SdIcon/SdMouse'
import SdTooltip from './components/SdTooltip/SdTooltip'
import SdLayout from './components/SdLayout/SdLayout'
import SdHeader from './components/SdLayout/SdHeader'
import SdNavLink from './components/SdLayout/SdNavLink'
import SdNav from './components/SdLayout/SdNav'
import SdNavHeading from './components/SdLayout/SdNavHeading'
import SdMast from './components/SdMast/SdMast'
import SdRow from './components/SdGrid/SdRow'
import SdCol from './components/SdGrid/SdCol'
import SdContainer from './components/SdGrid/SdContainer'
import SdSlider from './components/SdSlider/SdSlider'
import SdProgress from './components/SdProgress/SdProgress'
import SdDropdown from './components/SdDropdown/SdDropdown'
import SdDropdownMenu from './components/SdDropdown/SdDropdownMenu'
import SdDropdownHeader from './components/SdDropdown/SdDropdownHeader'
import SdChicklet from './components/SdChicklet/SdChicklet'
import SdChip from './components/SdChicklet/SdChip'
import SdSkeleton from './components/SdLoader/SdSkeleton'
import SdSheet from './components/SdSheet/SdSheet'
import SdToast from './components/SdToast/SdToast'
import SdList from './components/SdList/SdList'
import SdListItem from './components/SdList/SdListItem'

const components = {
  SdSkeleton,
  // Button
  SdButton,
  SdRouterLink,
  // Cards
  SdCard,
  SdCardBody,
  SdCardHeader,
  SdCardFooter,
  SdCardMedia,
  // Control Fields
  SdFieldset,
  SdLabel,
  SdCheckbox,
  SdRadio,
  SdField,
  SdError,
  SdSelect,
  // Dialog (modal)
  SdDialog,
  SdDialogTitle,
  SdDialogContent,
  SdDialogFooter,
  SdOverlay,
  // Icon
  SdIcon,
  SdMouse,
  // Poppers
  SdTooltip,
  SdHamburger,
  // Layout
  SdLayout,
  SdHeader,
  SdNav,
  SdNavLink,
  SdNavHeading,
  SdRow,
  SdCol,
  SdContainer,
  SdSlider,
  SdMast,
  SdSwitch,
  SdProgress,
  SdDropdown,
  SdDropdownMenu,
  SdDropdownHeader,
  SdChicklet,
  SdChip,
  SdSheet,
  SdToast,
  SdList,
  SdListItem
}

const componentsDesc = Object.keys(components).map((item) => {
  const component = components[item]
  return {
    name: component.name || 'sd-comp',
    component
  }
})

const componentsSd = Object.keys(components).map((item) => item.slice(1))

const sdInstall = (app) => {
  if (!app || sdInstall.installed) {
    return
  }
  componentsDesc.forEach((item) => {
    const kebabCaseName = kebab(item.name)
    const camelCaseName = camelCase(`-${kebabCaseName}`)
    const registerComponent = item.component
    app.component(kebabCaseName, registerComponent)
    app.component(camelCaseName, registerComponent)
  })
  if (process.env.NODE_ENV === 'development') {
    console.info('%cSDUI Component Library', 'color: #8F00F8; font-weight: 700; font-size: 12px;')
    console.info('%cA Vue3 component library', 'font-weight: 500; font-size: 10px;')
    console.info('%cMain Page: https://www.strizichdesign.com', 'font-size: 8px;')
    console.info('%cGithub: https://github.com/strizich/v3-jsdesign', 'font-size: 8px;')
    console.info('--')
  }
}

const version = packageData.version

export {
  componentsSd,
  sdInstall,
  version,
  SdSkeleton,
  // Button
  SdButton,
  SdRouterLink,
  SdHamburger,
  // Cards
  SdCard,
  SdCardBody,
  SdCardHeader,
  SdCardFooter,
  SdCardMedia,
  // Control Fields
  SdFieldset,
  SdLabel,
  SdCheckbox,
  SdRadio,
  SdField,
  SdError,
  SdSelect,
  // Dialog (modal)
  SdDialog,
  SdDialogTitle,
  SdDialogContent,
  SdDialogFooter,
  SdOverlay,
  // Icon
  SdIcon,
  SdMouse,
  // Poppers
  SdTooltip,
  // Layout
  SdLayout,
  SdHeader,
  SdNav,
  SdNavLink,
  SdNavHeading,
  // SdFooter,
  // SdSidebar
  // Grid
  SdRow,
  SdCol,
  SdContainer,
  SdSlider,
  SdMast,
  SdSwitch,
  SdProgress,
  SdDropdown,
  SdDropdownMenu,
  SdDropdownHeader,
  SdChicklet,
  SdChip,
  SdSheet,
  SdToast,
  SdList,
  SdListItem
}
