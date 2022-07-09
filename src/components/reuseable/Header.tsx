import { NavLink } from 'react-router-dom'
import { routeConstants } from '../../constants/routes.constant'

interface navigationItem {
	name: string
	path: string
}

const Header = () => {
	const navigation: navigationItem[] = [
		{
			name: 'ISA simulator',
			path: routeConstants.HOME,
		},
		{
			name: 'Game',
			path: routeConstants.GAME,
		},
		{
			name: 'Questions',
			path: routeConstants.QUESTIONS,
		},
	]

	return (
		<header>
			<ul className='nav nav-pills nav-fill'>
				{navigation.map((nav: navigationItem, index: number) => {
					return (
						<li className='nav-item' key={index}>
							<NavLink
								className={({ isActive }) => {
									return `nav-link ${
										isActive && 'bg-dark text-white'
									}`
								}}
								to={nav.path}>
								{nav.name}
							</NavLink>
						</li>
					)
				})}
			</ul>
		</header>
	)
}

export default Header
