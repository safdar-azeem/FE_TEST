import React from 'react'
import Alert from '../components/reuseable/Alert'
import FormInput from '../components/reuseable/FormInput'
import isaForm from '../jsons/IsaForm.json'
import { IFormInput } from '../types/formInput.type'
import { createInitialState } from '../utils/createInitialState'

interface IFormState {
	savings: number
	rate: number
	years: number
}

const Home = () => {
	const [formValues, setFormValues] = React.useState<IFormState>(
		createInitialState(isaForm)
	)
	const [result, setResult] = React.useState('')
	const [error, setError] = React.useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setResult('')
		const isValid = Object.values(formValues).some(
			(value) => value <= 0 || value === ''
		)
		if (isValid)
			return setError('Please fill out all fields with positive values')
		const { savings, rate, years } = formValues
		setResult((savings * (1 + rate / 100) ** years).toFixed(2))
		setError('')
	}

	return (
		<section className='mt-5 w-50 mx-auto'>
			<form onSubmit={handleSubmit} className='mb-4'>
				{isaForm.map((input: IFormInput) => {
					return (
						<FormInput
							input={input}
							handleChange={handleChange}
							value={formValues['name' as keyof IFormState]}
						/>
					)
				})}
				<button className='btn btn-dark w-100 btn mt-2' type='submit'>
					Calculate
				</button>
			</form>
			{(error || result) && (
				<Alert
					message={error || result}
					variant={error ? 'danger' : 'primary'}
				/>
			)}
		</section>
	)
}

export default Home
