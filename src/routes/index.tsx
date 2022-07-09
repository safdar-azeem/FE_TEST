import { lazy } from 'react'
import { IRoute } from '../types/routes.type'
import { routeConstants } from '../constants/routes.constant'

const IRoutes: IRoute[] = [
	{
		path: routeConstants.HOME,
		element: lazy(() => import('../pages/Home')),
	},
	{
		path: routeConstants.GAME,
		element: lazy(() => import('../pages/Game')),
	},
	{
		path: routeConstants.QUESTIONS,
		element: lazy(() => import('../pages/Questions')),
	},
]

export default IRoutes
