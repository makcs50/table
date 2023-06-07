import React from "react";
import Nav_bar from "./Nav_bar";
import Products from "./Products";
import StyleMain from "./MainContent.module.css" 

const products = [
    {
      id: 1,
      name: "MacBook",
      price: '65000₽',
      image: "http://intocode.ru/d/react-project-1/images/1.jpg",
    },
    {
      id: 2,
      name: "Galaxy",
      price: '35999₽',
      image: "http://intocode.ru/d/react-project-1/images/2.jpg",
    },
    {
      id: 3,
      name: "Скутер",
      price: '65500₽',
      image: "http://intocode.ru/d/react-project-1/images/3.jpg",
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: '12000₽',
      image: "http://intocode.ru/d/react-project-1/images/4.jpg",
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: '500₽',
      image: "http://intocode.ru/d/react-project-1/images/5.jpg",
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: '100000₽',
      image: "http://intocode.ru/d/react-project-1/images/6.jpg",
    },
  ];

const MainContent = () => {
  return (
    <table>
      <div className= { StyleMain.content } >
        <div className= {StyleMain.nav}>
            <Nav_bar />
        </div>
        <div className= { StyleMain.block }>
            {products.map(item => {
                return (
                <Products id={item.id}
                img={item.image}
                price={item.price}
                title={item.name}
              />)
            })} 
        </div>
      </div>
    </table>
  );
};

export default MainContent;
