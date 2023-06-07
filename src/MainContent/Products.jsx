import React from "react";
import StyleMain from "./MainContent.module.css";

const Products = (props) => {
  return (
<div className={StyleMain.product}>
      <tr>
        <td className={StyleMain.img_cell}>
          <img height={'200px'} src={props.img} alt={props.title} />
        </td>
      </tr>
      <tr>
        <td>
          <h3>{props.title}</h3>
        </td>
      </tr>
      <tr>
        <td>
          <p>{props.price}</p>
        </td>
      </tr>
      <tr>
        <td>
          <button>Купить</button>
        </td>
      </tr>
</div>

  );
};

export default Products;