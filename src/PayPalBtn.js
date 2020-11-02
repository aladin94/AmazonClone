import React, { Component } from 'react';
import { PayPalButton } from "react-paypal-button-v2";


class PayPalBtn extends Component {
    render() {
      const { amount, onSuccess, currency } = this.props;
        return (
            <PayPalButton
              amount={amount}
              currency={currency}
              onSuccess={(details, data) => onSuccess(details, data)}
              options={{
                clientId: "AWgoSp7y093PMP1q38ghS9eGMlE5xbVVDAGTrOt6-0XJVb0-aiQTE8yqD0mMwPXLP6Kfq7v77e71NU6g"
              }}
          />
        );
    }
}
export default PayPalBtn;