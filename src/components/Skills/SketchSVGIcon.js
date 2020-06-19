import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      viewBox="0 0 31 28"
      className="prefix__main-nav__logo__img prefix__main-nav__logo__img--icon"
      {...props}
    >
      <path
        fill="#FDB300"
        d="M6.75.922L15.469 0l8.719.922L30.938 10 15.469 28 0 10z"
      />
      <path fill="#EA6C00" d="M6.266 10l9.203 18L0 10z" />
      <path fill="#EA6C00" d="M24.672 10l-9.204 18 15.469-18z" />
      <path fill="#FDAD00" d="M6.266 10h18.406l-9.203 18z" />
      <path fill="#FDD231" d="M15.469 0L6.75.922 6.266 10z" />
      <path fill="#FDD231" d="M15.468 0l8.719.922.484 9.078z" />
      <path
        fill="#FDAD00"
        d="M30.937 10L24.187.922 24.672 10zM0 10L6.75.922 6.266 10z"
      />
      <path fill="#FEEEB7" d="M15.469 0L6.266 10h18.406z" />
    </svg>
  );
}

export default SvgComponent;
