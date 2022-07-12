import React from 'react'

interface IHeaderGameProps {
	handleGenerate: () => void
	handleClear: () => void
}

const HeaderGame = ({ handleGenerate, handleClear }: IHeaderGameProps) => {
	return (
		<header className='my-4'>
			<button
				className='btn btn-outline-dark me-3'
				onClick={handleGenerate}>
				Generate
			</button>
			<button className='btn btn-outline-dark' onClick={handleClear}>
				Clear
			</button>
		</header>
	)
}

export default HeaderGame
