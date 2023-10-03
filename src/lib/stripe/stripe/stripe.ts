import Stripe from 'stripe';

export const stripe = new Stripe(
  process.env.STRIPE_SECRET_KEY_LIVE ?? process.env.STRIPE_SECRET_KEY ?? '',
  {
    apiVersion: '2023-08-16',
    appInfo: {
      name: 'Coscribe',
      version: '0.1.0',
    },
    typescript: true,
  }
);
