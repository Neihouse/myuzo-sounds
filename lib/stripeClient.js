import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();

async function getStripeSecret() {
  const [version] = await client.accessSecretVersion({
    name: 'projects/ecommerce-myuzo-sounds/secrets/stripe-secret-key/versions/latest',
  });

  const payload = version.payload.data.toString('utf8');
  return payload;
}

export { getStripeSecret };
