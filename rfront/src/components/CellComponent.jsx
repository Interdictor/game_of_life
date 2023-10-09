export function CellComponent({ cellData, toggleCell }) {
  let classNames = 'cell '

  if(cellData.isAlive) {
    classNames += 'alive'
  }

  const handleMouseEnter = (event) => {
    const mouseIsDown = event.buttons === 1

    if(mouseIsDown) {
      toggleCell(cellData.position)
    }
  }

  return (
    <div
      id={cellData.id}
      onClick={() => { toggleCell(cellData.position) }}
      // onMouseEnter={() => { console.log({ x: cellData.id })}}
      onMouseEnter={handleMouseEnter}
      className={classNames}
    />
  )
}
