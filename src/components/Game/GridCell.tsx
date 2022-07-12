interface IGridProps {
	colIndex: number
	rowIndex: number
	cell: boolean
	handleClick: (row: number, col: number) => void
}

const GridCell = ({ colIndex, rowIndex, cell, handleClick }: IGridProps) => (
	<div
		key={colIndex}
		style={{
			height: '30px',
			width: '30px',
			margin: '2px',
		}}
		onClick={() => handleClick(rowIndex, colIndex)}
		className={`
		rounded ${cell ? 'bg-dark' : 'bg-secondary bg-opacity-50'}`}></div>
)

export default GridCell
