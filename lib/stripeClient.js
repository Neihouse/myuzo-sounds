import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

const client = new SecretManagerServiceClient();

async function getStripeKeys() {
  const [publishableKeyVersion] = await client.accessSecretVersion({
    name: 'projects/ecommerce-myuzo-sounds/secrets/stripe-publishable-key/versions/latest',
  });
  const [secretKeyVersion] = await client.accessSecretVersion({
    name: 'projects/ecommerce-myuzo-sounds/secrets/stripe-secret-key/versions/latest',
  });

  const publishableKey = publishableKeyVersion.payload.data.toString('utf8');
  const secretKey = secretKeyVersion.payload.data.toString('utf8');

  return { publishableKey, secretKey };
}

export { getStripeKeys };
