import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";
import { authContext } from "../contexts/authContext";

import CartIcon from "./CartIcon";
import CartDropdown from "./CartDropdown";
import SignOut from "./SignOut";

import Chip from "@mui/joy/Chip";
import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";
import { IoSunny } from "react-icons/io5";
import { TiHome } from "react-icons/ti";

const Header = () => {
  const { isCartOpen } = useContext(CartContext);
  const { isLoggedIn } = useContext(authContext);
 

  return (
    <Fragment>
      <div className="px-4 py-4 flex flex-col gap-4">
        <div className="flex justify-between">
          <div className="flex items-center gap-6">
            <Tooltip
              TransitionComponent={Zoom}
              title="Home sweet home... or just lost again?"
              arrow
            >
              <Link to="/">
                <TiHome className="text-2xl hover:opacity-75" />
              </Link>
            </Tooltip>
            {!isLoggedIn ? (
              <div className="flex items-center gap-6">
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Ready to give us all your data? Sign up here!"
                  arrow
                >
                  <Link to="/sign-up" className="text-sm  hover:opacity-75">
                    SignUp
                  </Link>
                </Tooltip>
                <Tooltip
                  TransitionComponent={Zoom}
                  title="Sign in now, your cart’s getting impatient."
                  arrow
                >
                  <Link to="/sign-in" className="text-sm  hover:opacity-75">
                    SignIn
                  </Link>
                </Tooltip>
              </div>
            ) : (
              <div className="flex items-center gap-6">
                <SignOut />
              </div>
            )}
          </div>

          <div>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>

        <Chip
          label="primary"
          color="primary"
          variant="outlined"
          startDecorator={<IoSunny />}
        >
          Today is sunny here, nevermind!
        </Chip>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Header;
