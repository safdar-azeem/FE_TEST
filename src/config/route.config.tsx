import { Route, Routes } from 'react-router-dom'
import { IRoute } from '../types/routes.type'

interface IRouteConfig {
	routes: IRoute[]
}

const CustomRoute = ({ routes }: IRouteConfig) => {
	return (
		<Routes>
			{routes &&
				routes.map((route: IRoute, index: number) => {
					return (
						<Route
							key={index}
							path={route.path}
							element={<route.element />}
						/>
					)
				})}
		</Routes>
	)
}

export default CustomRoute
