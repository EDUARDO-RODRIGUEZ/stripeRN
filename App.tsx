import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native';
import PaymentScreen from './PaymentScreen';

const publishableKey = "pk_test_51IYfPsErLdKXC5f5tu5UXdDqzfmqKq9cP8ClIPHKChsiRWOFwvucCSLnkbjuqlhLVQfc5yXPmwtVYzHdJ6ULe4wQ00lARECkNb";

const App = () => {
  return (
    <StripeProvider
      publishableKey={publishableKey}
    >
      <PaymentScreen />
    </StripeProvider>
  )
}

export default App
