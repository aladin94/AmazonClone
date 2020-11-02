import React, { useState, useEffect } from "react";
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';
import PayPalBtn from './PayPalBtn'


// const stripePromise = loadStripe("pk_test_51GsbO8H65AFrTafRy7WUaiv4JzBvFeTh1nFsooNdTNRISJ0fe8ShLHP1QcFLHNzo4Nm3BabuQgazRCvi2NPIMutZ00r5hRqelb");


function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();

    const paymentHandler = (details, data) => {
        alert('Checkout Succesful')
        console.log(details, data);
    }
    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift?
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"
            />

            <PayPalBtn 
                amount = {getBasketTotal(basket)}
                currency = {'USD'}
                onSuccess={paymentHandler}
            />
        </div>
    );
}



export default Subtotal;


// const Message = ({ message }) => (
//     <section>
//       <p>{message}</p>
//     </section>
//   );
  
// function App() {
//     const [message, setMessage] = useState("");
//     useEffect(() => {
//       // Check to see if this is a redirect back from Checkout
//       const query = new URLSearchParams(window.location.search);
//       if (query.get("success")) {
//         setMessage("Order placed! You will receive an email confirmation.");
//       }
//       if (query.get("canceled")) {
//         setMessage(
//           "Order canceled -- continue to shop around and checkout when you're ready."
//         );
//       }
//     }, []);
//     const handleClick = async (event) => {
//       const stripe = await stripePromise;
//       const response = await fetch("/create-session", {
//         method: "POST",
//       });
//       const session = await response.json();
//       // When the customer clicks on the button, redirect them to Checkout.
//       const result = await stripe.redirectToCheckout({
//         sessionId: session.id,
//       });
//       if (result.error) {
//         // If `redirectToCheckout` fails due to a browser or network
//         // error, display the localized error message to your customer
//         // using `result.error.message`.
//       }
//     };
//     return message ? (
//       <Message message={message} />
//     ) : (
//       <ProductDisplay handleClick={handleClick} />
//     );
//   }




// function Subtotal() {
//     const [{ basket }, dispatch] = useStateValue();

//     return (
//         <div className="subtotal">
//             <CurrencyFormat 
        
//                 renderText={(value) => (
//                     <>
//                         <p>
//                             Subtotal ({basket.length} items): <strong>{` ${value}`}</strong>
//                         </p>
//                         <small className="subtotal__gift">
//                             <input type="checkbox" /> This order contains a gift?
//                         </small>
//                     </>
//                 )}
//                 decimalScale={2}
//                 value={getBasketTotal(basket)}
//                 displayType={"text"}
//                 thousandSeparator={true}
//                 prefix="$"
//             />
//             <button>Proceed to Checkout</button>
//         </div>
//     )
// }