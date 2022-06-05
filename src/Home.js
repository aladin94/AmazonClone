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
                    image="https://images-na.ssl-images-amazon.com/images/I/616wDxRkPoL._SL1425_.jpg"
                />
                <Product 
                    id="42069"
                    title="Marvel's The Avengers (DVD)"
                    price={17.99}
                    rating={4}
                    image="https://cdn-ssl.s7.disneystore.com/is/image/DisneyShopping/7745055550782?fmt=jpeg&qlt=90&wid=652&hei=652"
                />
            </div>
            <div className="home__row" id="secondRow">
                <Product 
                    id="667345"
                    title="Always Looking Up by Michael J. Fox"
                    price={9.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41lnL2+YJIL.jpg"
                />
                <Product 
                    id="12321341"
                    title="Apple Watch Series 6 (GPS, 40mm) - White"
                    price={399.95}
                    rating={5}
                    image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1594259786000"
                />
                <Product 
                    id="2323232"
                    title="Amazon Prime Groceries"
                    price={29.99}
                    rating={5}
                    image="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/rockcms/2021-12/211213-wee-groceries-se-405p-a36212.jpg"
                />
            </div>
            <div className="home__row" id="lastRow">
                <Product 
                    id="12321341"
                    title="Samsung 75-Inch 4K Ultra HD Smart LED TV"
                    price={999.95}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/51BcgAu9CjL._AC_SY400_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;
