import {
	Home as HomeIcon,
	BarChartOutlined as DashboardIcon,
	CodeOutlined as CodeIcon,
	GitHub as GitHubIcon,
	Public as PublicIcon,
	PublicOff as PrivateIcon,
	AccountBoxRounded as UserIcon,
	SettingsOutlined as SettingsIcon,
	ListAlt as ListIcon,
	CreditCard as BillingIcon,
} from '@mui/icons-material'

import { Home } from '../pages/Home'

import { Route } from '../types/Route'

const routes: Array<Route> = [
	{
		key: 'router-home',
		title: 'Home',
		description: 'Home',
		component: Home,
		path: '/',
		isEnabled: true,
		icon: HomeIcon,

	},
	{
		key: 'router-marketplace',
		title: 'Marketplace',
		description: 'Marketplace',
		path: '/marketplace',
		isEnabled: true,
		icon: DashboardIcon,
	},
	{
		key: 'router-games',
		title: 'Games',
		description: 'Games',
		path: '/games',
		isEnabled: true,
		icon: DashboardIcon,
	},
	{
		key: 'router-stake',
		title: 'Stake',
		description: 'Stake',
		path: '/stake',
		isEnabled: true,
		icon: DashboardIcon,
	},
	{
		key: 'router-guide',
		title: 'Guide',
		description: 'Guide',
		path: '/guide',
		isEnabled: true,
		icon: DashboardIcon,
		appendDivider: true
	},
	{
		key: 'router-twitter',
		title: 'Twitter',
		description: 'Twitter',
		path: '/twitter',
		isEnabled: true,
		icon: DashboardIcon,
	},
	{
		key: 'router-discord',
		title: 'Discord',
		description: 'Discord',
		path: '/discord',
		isEnabled: true,
		icon: DashboardIcon,
	},
	// {
	// 	key: 'router-gh',
	// 	title: 'GitHub',
	// 	description: 'GitHub',
	// 	isEnabled: true,
	// 	icon: GitHubIcon,
	// 	subRoutes: [
	// 		{
	// 			key: 'router-gh-public',
	// 			title: 'Public Repos',
	// 			description: 'Public Repos',
	// 			path: '/gh/public',
	// 			isEnabled: true,
	// 			icon: PublicIcon,
	// 		},
	// 		{
	// 			key: 'router-gh-private',
	// 			title: 'Private Repos',
	// 			description: 'Private Repos',
	// 			path: '/gh/private',
	// 			isEnabled: false,
	// 			icon: PrivateIcon,
	// 		},
	// 	],
	// },
	// {
	// 	key: 'router-code',
	// 	title: 'Code Editor',
	// 	description: 'Code Editor',
	// 	path: '/code-editor',
	// 	isEnabled: true,
	// 	icon: CodeIcon,
	// 	appendDivider: true,
	// },
	// {
	// 	key: 'router-my-account',
	// 	title: 'My Account',
	// 	description: 'My Account',
	// 	path: '/account',
	// 	isEnabled: true,
	// 	icon: UserIcon,
	// 	subRoutes: [
	// 		{
	// 			key: 'router-settings',
	// 			title: 'Settings',
	// 			description: 'Account Settings',
	// 			path: '/account/settings',
	// 			isEnabled: true,
	// 			icon: SettingsIcon,
	// 		},
	// 		{
	// 			key: 'router-preferences',
	// 			title: 'Preferences',
	// 			description: 'Account Preferences',
	// 			path: '/account/preferences',
	// 			isEnabled: true,
	// 			icon: ListIcon,
	// 		},
	// 		{
	// 			key: 'router-billing',
	// 			title: 'Billing',
	// 			description: 'Account Billing',
	// 			path: '/account/billing',
	// 			isEnabled: true,
	// 			icon: BillingIcon,
	// 		},
	// 	],
	// },
]

export default routes
