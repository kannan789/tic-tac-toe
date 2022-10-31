function GameBlock(props){
    return(
      <>
      <div className="g-blk" onClick={props.onClick}>{props.name}</div>
      
      </>
    )
}

export default GameBlock;