import React, { useMemo, useState, useEffect } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { Layout } from './components/Layout'
import { PageDefault } from './components/PageDefault'

import { AppContext, ThemeModeContext } from './contexts'
import { AppClient } from './clients'
import { routes } from './config'
import { Route as AppRoute } from './types'
import { getAppTheme } from './styles/theme'
import { APP_DESCRIPTION, APP_TITLE, DARK_MODE_THEME, LIGHT_MODE_THEME } from './config/constants'
import { Helmet } from 'react-helmet'

function App() {

	const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME)
	const appClient = new AppClient()

	const themeMode = useMemo(
		() => ({
			toggleThemeMode: () => {
				setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME))
			},
		}),
		[]
	)

	const theme = useMemo(() => getAppTheme(mode), [mode])

	const addRoute = (route: AppRoute) => {
		const RouteElement = route.component
		return <Route key={route.key} path={route.path} element={route.component ? <RouteElement /> : <PageDefault />} />

	}

	useEffect(() => {
		<Helmet>
			<title>{APP_TITLE}</title>
			<meta name='description' content={APP_DESCRIPTION} />
			<link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap' />
			<meta name='viewport' content='initial-scale=1, width=device-width' />
		</Helmet>
	})

	return (
		<AppContext.Provider value={appClient}>
			<ThemeModeContext.Provider value={themeMode}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Router>
						<Layout>
							<Routes>
								{routes.map((route: AppRoute) =>
									route.subRoutes ? route.subRoutes.map((item: AppRoute) => addRoute(item)) : addRoute(route)
								)}
							</Routes>
						</Layout>
					</Router>
				</ThemeProvider>
			</ThemeModeContext.Provider>
		</AppContext.Provider>
	)
}

export default App
