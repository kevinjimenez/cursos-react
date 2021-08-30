function Player(props: any){

    const {id} = props.match.params

    console.log('params',id);

    return(
        <div className='Player'>
            <video controls autoPlay>
                <source src='' type='video/mp4'/>
            </video>
            <div className='Player-back'>
                <button type='button' onClick={() => props.history.goBack()}>
                    Regresar
                </button>
            </div>
        </div>
    )
}

export {Player}
