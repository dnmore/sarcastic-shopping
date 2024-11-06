import { useContext, useState } from "react";

import { CartContext } from "../contexts/CartContext";
import CheckoutCard from "../components/CheckoutCard";

import Fab from "@mui/material/Fab";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);
  const [shippingFee, setShippingFee] = useState(0);
  const [wrappingFee, setWrappingFee] = useState(0);
  const [warrantyFee, setWarrantyFee] = useState(0);

  const handleFinalPrice = () => {
    const finalPrice = cartTotal + shippingFee + wrappingFee + warrantyFee
    return finalPrice

  }

  return (
    <div className="bg-white px-6 py-4">
      <h3 className="text-xl font-bold">
        Time to face the music... and the total price!
      </h3>
      <div className="flex flex-col gap-4 mt-6">
        <ul>
          <li className="grid grid-cols-5 gap-4 text-sm mb-2 border-b-2 border-black font-semibold my-4 justify-center items-center text-center">
            <p className="col-span-2 text-left">Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p></p>
          </li>
          {cartItems.map((cartItem) => (
            <CheckoutCard key={cartItem.id} cartItem={cartItem} />
          ))}
        </ul>

        {/*  SHIPPING OPTIONS */}
        <div className="flex flex-col mt-6">
          <ul>
            <li className="grid grid-cols-4 gap-2 text-sm mb-2 border-b-2 border-black font-semibold my-4 justify-center items-center text-center">
              <p className="col-span-2 text-left">Sarcastic Shipping Options</p>
              <p className="text-left">Description</p>
              <p>Price</p>
            </li>

            <FormControl>
              <RadioGroup
                aria-labelledby="shipping-options"
                defaultValue="someday"
                name="shipping-options"
                value={shippingFee}
                onChange={(e) => setShippingFee(parseFloat(e.target.value) )}
              >
                <li className="grid grid-cols-4 text-xs my-4 items-center">
                  <div className="col-span-2 text-sm">
                    <FormControlLabel
                      value={920.00}
                      control={<Radio size="small" />}
                      label="Teleportation Speed"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                  Arrives before you even finish checkout. Our fastest option! Perfect for those with zero patience
                    (and a big wallet).
                  </p>
                  <p className="text-sm text-gray-700 text-center">€920.00</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={4.50}
                      control={<Radio size="small" />}
                      label="Might Arrive Someday"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                  Our budget-friendly option with absolutely no promises on
                    the delivery date. Expect this sometime between now and the apocalypse. 
                  </p>
                  <p className="text-sm text-gray-700 text-center">€4.50</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={46.00}
                      control={<Radio size="small" />}
                      label="Hand-Delivered by a Unicorn"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                  Delivered by our mythical team, if you believe hard enough. No unicorns were harmed in the making of this delivery… but
                    good luck with this one.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€46.00</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={13.50}
                      control={<Radio size="small" />}
                      label="Next Full Moon Delivery"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Guaranteed arrival on the next full moon. Perfect timing if you’re a werewolf and ideal for
                    mysterious and nocturnal purchases.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€13.50</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={18.50}
                      control={<Radio size="small" />}
                      label="Carrier Pigeon Delivery "
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                  Go vintage with this low-carbon footprint option. Includes
                    ‘Bird GPS’ tracking. Allow 3-5 weeks for carrier pigeon travel time (and occasional bird snacks). 
                  </p>
                  <p className="text-sm text-gray-700 text-center">€18.50</p>
                </li>
              </RadioGroup>
            </FormControl>
          </ul>
        </div>

        {/* END OPTIONS */}

        {/*  WRAPPING OPTIONS */}
        <div className="flex flex-col mt-6">
          <ul>
            <li className="grid grid-cols-4 gap-2 text-sm mb-2 border-b-2 border-black font-semibold my-4 justify-center items-center text-center">
              <p className="col-span-2 text-left">Quirky Gift Wrap Choices</p>
              <p className="text-left">Description</p>
              <p>Price</p>
            </li>

            <FormControl>
              <RadioGroup
                aria-labelledby="wrapping-options"
                defaultValue="invisible"
                name="wrapping-options"
                value={wrappingFee}
                onChange={(e) => setWrappingFee(parseFloat(e.target.value))}
              >
                <li className="grid grid-cols-4 text-xs my-4 items-center">
                  <div className="col-span-2 text-sm">
                    <FormControlLabel
                      value={0.99}
                      control={<Radio size="small" />}
                      label="Invisible Wrapping"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Minimalist gift wrapping at its finest. It’s almost like
                    it’s not even there.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€0.99</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={3.50}
                      control={<Radio size="small" />}
                      label="Bubble Wrap Overkill"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Triple-layered for those who love popping bubbles.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€3.50</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={4.25}
                      control={<Radio size="small" />}
                      label="Mystery Meat Wrap"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    A unique wrap that makes your gift look like dinner! Great
                    for surprising carnivores.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€4.25</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={5.00}
                      control={<Radio size="small" />}
                      label="Confetti Explosion"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    For those who believe that no gift is complete without an
                    overwhelming burst of color! (Cleanup not included.)
                  </p>
                  <p className="text-sm text-gray-700 text-center">€5.00</p>
                </li>
              </RadioGroup>
            </FormControl>
          </ul>
        </div>

        {/* END OPTIONS */}

        {/*  WARRANTY OPTIONS */}
        <div className="flex flex-col mt-6">
          <ul>
            <li className="grid grid-cols-4 gap-2 text-sm mb-2 border-b-2 border-black font-semibold my-4 justify-center items-center text-center">
              <p className="col-span-2 text-left">Humorous Warranty Options </p>
              <p className="text-left">Description</p>
              <p>Price</p>
            </li>

            <FormControl>
              <RadioGroup
                aria-labelledby="warranty-options"
                defaultValue="lifetime"
                name="warranty-options"
                value={warrantyFee}
                onChange={(e) => setWarrantyFee(parseFloat(e.target.value))}
              >
                <li className="grid grid-cols-4 text-xs my-4 items-center">
                  <div className="col-span-2 text-sm">
                    <FormControlLabel
                      value={2.50}
                      control={<Radio size="small" />}
                      label="Lifetime Warranty (of the product, not you)"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Covers any issues for the next 5-10 minutes. Perfect for
                    those with extreme optimism about product durability… and
                    short lifespans.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€2.50</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={1.00}
                      control={<Radio size="small" />}
                      label="The Eternal Optimist Package"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Covers nothing, but don’t worry, we’re sure you’ll love
                    it!For those who believe in happy endings. Even for
                    products.
                  </p>
                  <p className="text-sm text-gray-700 text-center">€1.00</p>
                </li>

                <li className="grid grid-cols-4 text-xs my-4 items-center ">
                  <div className="col-span-2">
                    <FormControlLabel
                      value={0}
                      control={<Radio size="small" />}
                      label="Non-Existent Warranty"
                    />
                  </div>
                  <p className="text-xs text-gray-700">
                    Best choice for those who don’t believe in warranties.
                    Feeling daring? Enjoy your product with absolutely no safety
                    net!
                  </p>
                  <p className="text-sm text-gray-700 text-center">Free</p>
                </li>
              </RadioGroup>
            </FormControl>
          </ul>
        </div>

        {/* END OPTIONS */}
        <div>
          <p className="text-xl font-bold mb-3">
            TOTAL: €{handleFinalPrice()}
          </p>
          <Fab color="primary" aria-label="pay" variant="extended">
            Pay Now
          </Fab>
        </div>
      </div>
    </div>
  );
}
