import React from "react";
import { connect } from "react-redux";
import "./CarouselItem.scss";
import playIcon from "../../assets/static/play-icon.png";
import plusIcon from "../../assets/static/plus-icon.png";
import { setFavorite } from "../../actions/actions";

function CarouselItem(props: any) {
  const { name, url, img } = props;

  const handlerSetFavorite = () => {
    props.setFavorite({
      name,
      url,
      img,
    });
  };

  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={img} alt="" />
      <div className="carousel-item__details">
        <div>
          <img
            className="carousel-item__details--img"
            src={playIcon}
            alt="Play Icon"
          />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon"
            onClick={handlerSetFavorite}
          />
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
  setFavorite
};

// export {CarouselItem}
export default connect(null, mapDispatchToProps)(CarouselItem);
