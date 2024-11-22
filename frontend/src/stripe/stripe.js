import { loadStripe } from "@stripe/stripe-js";

const publishableKey = import.meta.env.VITE_PUBLISHABLE_KEY

export const stripePromise = loadStripe(
  publishableKey
);