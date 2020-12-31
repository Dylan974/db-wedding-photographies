import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCameraRetro,
  faUser,
  faEnvelope,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const navButtons = [
  {
    label: "Accueil",
    path: "/",
    icon: <FontAwesomeIcon icon={faHome} />,
  },
  {
    label: "A propos",
    path: "/a-propos",
    icon: <FontAwesomeIcon icon={faUser} />,
  },
  {
    label: "Photos",
    path: "/photos",
    icon: <FontAwesomeIcon icon={faCameraRetro} />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FontAwesomeIcon icon={faEnvelope} />,
  },
];

export default navButtons;
