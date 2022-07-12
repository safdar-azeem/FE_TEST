import { IFormInput } from '../types/formInput.type'

export const createInitialState = (fields: IFormInput[]) => {
	const initialState: any = {}
	fields.forEach((field) => {
		initialState[field.name] = field.value
	})
	return initialState
}
