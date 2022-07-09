import { IQuestion } from '../../types/question.type'

interface IProps {
	questions: IQuestion[]
}

const ResultQuestions = ({ questions }: IProps) => {
	return (
		<>
			<h3 className='text-center mb-4'>Here are your questions:</h3>
			{questions &&
				questions.map((question: IQuestion, index: number) => {
					return (
						<article className='border p-3 rounded-3 mb-3'>
							<h4>Question {index + 1}</h4>
							<p>{question.title}</p>
						</article>
					)
				})}
		</>
	)
}

export default ResultQuestions
