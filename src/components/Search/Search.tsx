import React from "react";

function Search(props: any){
    return(
        <div className='Search'>
            <input type="text"
                   className='btn btn-outline-secondary'
                   value={props.search}
                   ref={props.searchInput}
                   onChange={props.handleSearch}/>
        </div>
    )
}

export {Search}
