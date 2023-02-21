import React from "react";

/**
 * Loader component which just defines a default behavior for loader
 * @important Can be used in any componet for displaying loading process
 * @returns JSX.Element - loader component
 * @example
 * if (isLoading) return (
 *  <div className="full-screen center-content">
 *   <Loader />
 *  </div>
 * )
 */
const Loader = () => {
  return (
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  );
};

export default Loader;
