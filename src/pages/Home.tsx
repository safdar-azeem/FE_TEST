import React from 'react'

const Home = () => {
	const [savings, setSavings] = React.useState<number | undefined>(undefined)
	const [rate, setRate] = React.useState<number | undefined>(undefined)
	const [years, setYears] = React.useState<number | undefined>(undefined)
	const [result, setResult] = React.useState('')
	const [error, setError] = React.useState('')

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setResult('')
		if (!savings || !rate || !years) {
			return setError('Please fill out all fields')
		}
		if (savings < 0 || rate < 0 || years < 0) {
			return setError('Please fill with positive values')
		}
		setResult((savings * (1 + rate / 100) ** years).toFixed(2))
		setError('')
	}

	return (
		<section className='mt-5 w-50 mx-auto'>
			<form onSubmit={handleSubmit}>
				<section className='mb-3'>
					<label htmlFor='savings' className='form-label'>
						Savings
					</label>
					<input
						type='number'
						className='form-control'
						id='savings'
						value={savings}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSavings(+e.target.value)
						}
						placeholder='Please enter your savings'
					/>
				</section>
				<section className='mb-3'>
					<label htmlFor='Rate' className='form-label'>
						Rate
					</label>
					<input
						type='number'
						className='form-control'
						id='Rate'
						value={rate}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setRate(+e.target.value)
						}
						placeholder='Please enter your rate'
					/>
				</section>
				<section className='mb-3'>
					<label htmlFor='Years' className='form-label'>
						Years
					</label>
					<input
						type='number'
						className='form-control'
						id='Years'
						value={years}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setYears(+e.target.value)
						}
						placeholder='Please enter years'
					/>
				</section>
				<button className='btn btn-dark w-100 btn mt-2' type='submit'>
					Calculate
				</button>
			</form>
			{(error || result) && (
				<div
					className={`alert mt-4 py-2 ${
						error ? 'alert-danger' : 'alert-primary'
					}`}>
					{error || result}
				</div>
			)}
		</section>
	)
}

export default Home
