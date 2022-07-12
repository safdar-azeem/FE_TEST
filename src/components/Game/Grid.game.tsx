import GridCell from './GridCell'

interface IGridProps {
	grid: boolean[][]
	handleClick: (row: number, col: number) => void
}

const Grid = ({ grid, handleClick }: IGridProps) => {
	return (
		<section className='d-flex flex-wrap'>
			{grid.map((row: Array<boolean>, rowIndex: number) => {
				return (
					<div key={rowIndex}>
						{row.map((cell: boolean, colIndex: number) => {
							return (
								<GridCell
									rowIndex={rowIndex}
									colIndex={colIndex}
									cell={cell}
									handleClick={handleClick}
								/>
							)
						})}
					</div>
				)
			})}
		</section>
	)
}

export default Grid
