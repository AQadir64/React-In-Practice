import React, { Fragment, forwardRef } from "react";

const FRInput = forwardRef((props, ref) => {
  return (
    <Fragment>
      <input type="text" ref={ref} />
    </Fragment>
  );
});
export default FRInput;
