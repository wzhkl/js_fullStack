import React from "react";

function Demo2(props) {
  const { names, from } = props;
  return (
    <div style={{ backgroundColor: 'gray' }}>
      { names }
      { from }
    </div>
  )
}

export default Demo2;