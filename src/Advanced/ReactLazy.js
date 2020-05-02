import React, { Suspense } from "react";
const DynamicRouting = React.lazy(() =>
  import("../React_Router/DynamicRouting")
);
function ReactLazy() {
  return (
    <div>
      <Suspense fallback={<h1>loading...</h1>}>
        <DynamicRouting />
      </Suspense>
    </div>
  );
}

export default ReactLazy;

// It is a new function in react that lets you load react components lazily through code splitting
// without help from any additional libraries.
//Lazy loading is the technique of rendering only-needed or critical user interface items first,
//then quietly unrolling the non-critical items later.
//It is now fully integrated into core react library itself.
//We formerly used react-loadable to achieve this but now we have react.lazy() in react core.
