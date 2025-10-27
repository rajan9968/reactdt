import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Home Page',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Banner',
        to: '/admin/banner'
      },
      {
        component: CNavItem,
        name: 'Business',
        to: '/admin/business',
      },
      {
        component: CNavItem,
        name: 'Clients',
        to: '/admin/clients',
      },
      {
        component: CNavItem,
        name: 'Sustainability',
        to: '/admin/sustainability',
      },
      {
        component: CNavItem,
        name: 'Portfolio',
        to: '/admin/portfolio',
      },
      {
        component: CNavItem,
        name: 'Careers',
        to: '/admin/careers',
      },
    ],
  },
]

export default _nav
