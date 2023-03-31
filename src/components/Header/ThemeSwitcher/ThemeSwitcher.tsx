import { useContext } from 'react'
import { useTheme } from '@mui/material/styles'
import { NightsStay } from '@mui/icons-material'
import LightModeIcon from '@mui/icons-material/LightMode'

import { ActionItem } from '../../Actions/ActionItem'

import { ThemeModeContext } from '../../../contexts'
import { LIGHT_MODE_THEME } from '../../../config/constants'

export const ThemeSwitcher = ({ disableTooltip = false }: { disableTooltip?: boolean }) => {
	const theme = useTheme()
	const { toggleThemeMode } = useContext(ThemeModeContext)

	return (
		<ActionItem
			title='Toggle Theme'
			icon={theme.palette.mode === LIGHT_MODE_THEME ? LightModeIcon : NightsStay}
			onClick={toggleThemeMode}
			disableTooltip={disableTooltip}
		/>
	)
}
