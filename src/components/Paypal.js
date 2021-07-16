import React, { useEffect, useRef } from 'react';

let Paypal = () => {
  let paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: async (data, actions, error) => {
          return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [
              {
                description: 'CPC Licence',
                amount: {
                  currency_code: 'EUR',
                  value: 100.0,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          let order = await actions.order.capture();
          console.log('Successful Order: ', order);
        },
        onError: async (error) => {
          console.log(error);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};

export default Paypal;
