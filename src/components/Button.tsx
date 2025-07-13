import React from "react";

function Button({
  disabled,
  children,
}: {
  disabled: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      style={{ position: "relative", display: "block" }}
      type="submit"
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
