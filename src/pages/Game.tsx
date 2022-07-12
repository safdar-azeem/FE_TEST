import React from 'react'
import GridComponent from '../components/Game/Grid.game'
import HeaderGame from '../components/Game/Header.game'

const Game = () => {
	const columns = 20
	const rows = 20
	const [grid, setGrid] = React.useState<boolean[][]>([])

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
			<HeaderGame
				handleClear={handleClear}
				handleGenerate={handleGenerate}
			/>
			<GridComponent grid={grid} handleClick={handleClick} />
		</div>
	)
}

export default Game
