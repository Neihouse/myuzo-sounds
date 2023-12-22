import paypal from '@paypal/checkout-server-sdk';

const environment = () => {
  let clientId = process.env.PAYPAL_CLIENT_ID;
  let clientSecret = process.env.PAYPAL_CLIENT_SECRET;

  return process.env.NODE_ENV === 'production'
    ? new paypal.core.LiveEnvironment(clientId, clientSecret)
    : new paypal.core.SandboxEnvironment(clientId, clientSecret);
};

const paypalClient = new paypal.core.PayPalHttpClient(environment());

export { paypalClient };
