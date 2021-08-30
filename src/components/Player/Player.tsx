import {connect} from "react-redux";
import {getVideoSource} from "../../actions/actions";
import {NotFound} from "../NotFound/NotFound";
import React from "react";

function Player(props: any) {

    const {id} = props.match.params
    const hasPlaying = Object.keys(props.playing).length > 0;

    console.log('params', id);

    React.useEffect(()=>{
        props.getVideoSource(id)
    }, [])

    return hasPlaying ? (
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
        :
        <NotFound/>
}

const mapStateToProps = (state: any) => {
    return {
        playing: state.playing
    }
}

const mapDispatchToProps = {
    getVideoSource
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
