import React from 'react'
import FormQuestions from '../components/Questions/Form.questions'
import ResultQuestions from '../components/Questions/Result.questions'
import { IQuestion } from '../types/question.type'

const Questions = () => {
	const totalQuestions = 3
	const [questions, setQuestions] = React.useState<IQuestion[]>([])
	const [currentQuestion, setCurrentQuestion] = React.useState(0)

	const handleSetQuestion = (value: string) => {
		const newQuestion: IQuestion = {
			id: String(currentQuestion),
			title: value,
		}
		setQuestions([...questions, newQuestion])
		setCurrentQuestion(currentQuestion + 1)
	}

	return (
		<section className='w-50 mx-auto mt-5'>
			{currentQuestion < totalQuestions ? (
				<FormQuestions
					handleSetQuestion={handleSetQuestion}
					currentQuestion={currentQuestion}
					totalQuestions={totalQuestions}
				/>
			) : (
				<ResultQuestions questions={questions} />
			)}
		</section>
	)
}

export default Questions
