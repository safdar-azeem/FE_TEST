import CustomRoute from './config/route.config'
import IRoutes from './routes/'
import Header from './components/reuseable/Header'

const App = () => {
	return (
		<section className='container py-4'>
			<Header />
			<CustomRoute routes={IRoutes} />
		</section>
	)
}

export default App
