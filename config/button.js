import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCompass,
  faMapMarkerAlt,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Accueil",
    path: "/",
    icon: <FontAwesomeIcon icon={faCompass} />,
  },
  {
    label: "A propos",
    path: "/a-propos",
    icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
  },
  {
    label: "Photos",
    path: "/photos",
    icon: <FontAwesomeIcon icon={faShoppingCart} />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
];

export default navButtons;
