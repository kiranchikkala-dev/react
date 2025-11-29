import React from 'react';
import Stepper from './Stepper';

const App = () => {
  const StepsConfig = [
    {
      name: 'Contact Details',
      Component: () => (
        <div>Add contact details for further communications.</div>
      ),
    },
    {
      name: 'Shipping Address',
      Component: () => <div>Add shipping address for successful delivery.</div>,
    },
    {
      name: 'Payment',
      Component: () => <div>Complete Payment to complete the order.</div>,
    },
    {
      name: 'Delivered',
      Component: () => <div>Ready to get delivered!</div>,
    },
  ];
  return (
    <div>
      <Stepper steps={StepsConfig} />
    </div>
  );
};

export default App;
