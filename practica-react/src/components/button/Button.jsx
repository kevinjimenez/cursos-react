import React from "react";

function Button(props) {
  const [add, setAdd] = React.useState(0);
  let count = 0;
  const addOne = () => {
    count = add + 1;
    setAdd(count);
  };

  return [<p>{add}</p>, <button className='btn btn-warning' onClick={addOne}>{props.nombreBoton}</button>];
}

export { Button };
