import React from "react";
import {connect} from "react-redux";
import "./CarouselItem.scss";
import playIcon from "../../assets/static/play-icon.png";
import plusIcon from "../../assets/static/plus-icon.png";
import deleteIcon from "../../assets/static/remove-icon.png";
import {setFavorite, deleteFavorite} from "../../actions/actions";
import {Link} from "react-router-dom";

function CarouselItem(props: any) {
    const {name, url, img, isList} = props;

    const handlerSetFavorite = () => {
        props.setFavorite({
            name,
            url,
            img,
        });
    };


    const handlerDeleteFavorite = (name: string) => {
        props.deleteFavorite(name);
    };

    return (
        <div className="carousel-item">
            <img className="carousel-item__img" src={img} alt=""/>
            <div className="carousel-item__details">
                <div>
                    <Link to={`/player/${name}`}>
                        <img
                            className="carousel-item__details--img"
                            src={playIcon}
                            alt="Play Icon"
                        />
                    </Link>
                    {isList ?
                        <img
                            className="carousel-item__details--img"
                            src={deleteIcon}
                            alt="Delete Icon"
                            onClick={() => handlerDeleteFavorite(name)}
                        />
                        :
                        <img
                            className="carousel-item__details--img"
                            src={plusIcon}
                            alt="Plus Icon"
                            onClick={handlerSetFavorite}
                        />
                    }
                </div>
                <p className="carousel-item__details--title">{name}</p>
                <p className="carousel-item__details--subtitle">
                    Mas informacion:
                    <a href={url}>Aqui</a>
                </p>
            </div>
        </div>
    );
}

const mapDispatchToProps = {
    setFavorite,
    deleteFavorite
};

// export {CarouselItem}
export default connect(null, mapDispatchToProps)(CarouselItem);
