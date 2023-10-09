export function CellComponent({ cellData, toggleCell }) {
  let classNames = 'cell '

  if(cellData.isAlive) {
    classNames += 'alive'
  }

  return (
    <div onClick={() => { toggleCell(cellData.position) }} className={classNames}></div>
  )
}
