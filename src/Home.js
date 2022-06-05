import React from "react";
import "./Home.css";
import Product from "./Product"


function Home() {
    return (
        <div className="Home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />

            {/* {Product id, title, price, rating, images} */}
            <div className="home__row" id="firstRow">
                <Product 
                    id="12321341"
                    title="The Lumineers (Deluxe Album)"
                    price={11.95}
                    rating={5}
                    image="./images/TheLumineersalbum.jpg"
                />
                <Product 
                    id="42069"
                    title="Marvel's The Avengers (DVD)"
                    price={17.99}
                    rating={4}
                    image="./images/avengers.png"
                />
            </div>
            <div className="home__row" id="secondRow">
                <Product 
                    id="667345"
                    title="Always Looking Up by Michael J. Fox"
                    price={9.95}
                    rating={5}
                    image="./images/always.jpg"
                />
                <Product 
                    id="12321341"
                    title="Apple Watch Series 6 (GPS, 40mm) - White"
                    price={399.95}
                    rating={5}
                    image="./images/apple.jpeg"
                />
                <Product 
                    id="2323232"
                    title="Amazon Prime Groceries"
                    price={29.99}
                    rating={5}
                    image="./images/groceries.jpg"
                />
            </div>
            <div className="home__row" id="lastRow">
                <Product 
                    id="12321341"
                    title="Samsung 75-Inch 4K Ultra HD Smart LED TV"
                    price={999.95}
                    rating={3}
                    image="./images/samsung.jpg"
                />
            </div>
        </div>
    )
}

export default Home;
