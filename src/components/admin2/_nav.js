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
  {
    component: CNavGroup,
    name: 'About Page',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Banner',
        to: '/admin/about-banner'
      },
      {
        component: CNavItem,
        name: 'Company Overview',
        to: '/admin/overview',
      },
      {
        component: CNavItem,
        name: 'Purpose section',
        to: '/admin/purpose',
      },
      {
        component: CNavItem,
        name: 'Core Values',
        to: '/admin/core-values',
      },
      {
        component: CNavItem,
        name: 'Timeline',
        to: '/admin/timelines',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Leadership Page',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Banner',
        to: '/admin/leadership'
      },
      {
        component: CNavItem,
        name: 'Key Management',
        to: '/admin/management',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Project Portfolio Page',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Banner',
        to: '/admin/project-portfolio'
      },
      {
        component: CNavItem,
        name: 'Portfolio Overview',
        to: '/admin/portfolio-overview',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Business Page',
    to: '/admin/businesses',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Culture Page',
    to: '/admin/cultures',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
]

export default _nav
