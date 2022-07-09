import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Spinner from './components/reuseable/Spinner'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Suspense
			fallback={
				<div className='text-center mt-5'>
					<Spinner />
				</div>
			}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Suspense>
	</React.StrictMode>
)
