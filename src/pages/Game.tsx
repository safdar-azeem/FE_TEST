import React from 'react'

const Game = () => {
	const columns = 20
	const rows = 20
	const [grid, setGrid] = React.useState<any[]>([])

	const handleClick = (row: number, col: number) => {
		const newGrid = [...grid]
		newGrid[row][col] = !newGrid[row][col]
		setGrid(newGrid)
	}

	const handleGenerate = () => {
		const newGrid = []
		for (let row = 0; row < rows; row++) {
			const newRow = []
			for (let col = 0; col < columns; col++) {
				newRow.push(Math.random() > 0.5)
			}
			newGrid.push(newRow)
		}
		setGrid(newGrid)
	}

	const handleClear = () => {
		const newGrid = []
		for (let row = 0; row < rows; row++) {
			const newRow = []
			for (let col = 0; col < columns; col++) {
				newRow.push(false)
			}
			newGrid.push(newRow)
		}
		setGrid(newGrid)
	}

	React.useEffect(() => {
		handleGenerate()
	}, [])

	return (
		<div className='d-flex justify-content-center flex-column  align-items-center'>
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
			<section className='d-flex flex-wrap'>
				{grid.length > 0 &&
					grid.map((row: Array<boolean>, rowIndex: number) => {
						return (
							<div key={rowIndex}>
								{row.map((cell: boolean, colIndex: number) => {
									return (
										<div
											key={colIndex}
											style={{
												height: '30px',
												width: '30px',
												margin: '2px',
											}}
											onClick={() =>
												handleClick(rowIndex, colIndex)
											}
											className={`rounded ${
												cell
													? 'bg-dark'
													: 'bg-secondary bg-opacity-50'
											} `}></div>
									)
								})}
							</div>
						)
					})}
			</section>
		</div>
	)
}

export default Game
