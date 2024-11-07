import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { authContext } from "../contexts/authContext";

import { Tooltip } from "@mui/material";
import Zoom from "@mui/material/Zoom";

export default function SignOut() {
  const { setLoggedIn } = useContext(authContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <Tooltip
      TransitionComponent={Zoom}
      title="Leaving so soon? Your cart will miss you."
      arrow
    >
      <button
        className="text-sm border-none bg-transparent hover:opacity-75"
        onClick={handleLogout}
      >
        Sign Out
      </button>
    </Tooltip>
  );
}
