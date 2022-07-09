import React from 'react'

interface IProps {
	handleSetQuestion: (value: string) => void
	currentQuestion: number
	totalQuestions: number
}

const FormQuestions = ({
	currentQuestion,
	totalQuestions,
	handleSetQuestion,
}: IProps) => {
	const [value, setValue] = React.useState('')
	const [error, setError] = React.useState('')

	const handleSubmit = () => {
		if (!value) {
			return setError('Please enter a value')
		}
		handleSetQuestion(value)
		setValue('')
		setError('')
	}

	return (
		<div>
			<form>
				<div className='mb-3'>
					<label htmlFor='question' className='form-label'>
						Question {currentQuestion + 1} of {totalQuestions}
					</label>
					<textarea
						className='form-control'
						value={value}
						onChange={(e) => setValue(e.target.value)}
						placeholder='Enter your question here'
						rows={5}
						id='question'></textarea>
					<small className='text-danger mt-2'>{error}</small>
				</div>
				<button
					className='btn btn-dark w-100'
					type='button'
					onClick={handleSubmit}>
					Next
				</button>
			</form>
		</div>
	)
}

export default FormQuestions
