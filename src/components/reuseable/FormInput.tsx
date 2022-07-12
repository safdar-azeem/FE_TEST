import React from 'react'
import { IFormInput } from '../../types/formInput.type'

interface IFormInputProps {
	input: IFormInput
	value: string | number
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ input, value, handleChange }: IFormInputProps) => (
	<section className='mb-3' key={input.name}>
		<label htmlFor={input.name} className='form-label'>
			{input.label}
		</label>
		<input
			type={input.type}
			className='form-control'
			name={input.name}
			id={input.name}
			value={value}
			onChange={handleChange}
			placeholder={input.placeholder}
		/>
	</section>
)

export default FormInput
