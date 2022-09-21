const Fab = (props) =>{
    return(
        <div className={ props.hidden ? 'fab is-hidden' : 'fab'} onClick={props.onClick}>
         {/* <buton>Create Spot</buton>
          <buton > Edit Spot</buton> */}
        </div>
    )
}

// if props.hidden true it will take classname "fab is-hidden" or classname fab / onclick prop
export default Fab;