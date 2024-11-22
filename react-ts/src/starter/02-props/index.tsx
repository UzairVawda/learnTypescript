// passing props to components
// you can also pass in props as a whole and destructure values
// with children pass as react node or import special type
// note: ? denotes optional prop

import { type PropsWithChildren } from "react";

type ComponentProps = PropsWithChildren<{
  name: string;
  id: number;
}>;

function Component({ name, id, children }: ComponentProps): JSX.Element {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Props</h2>
      <h2>Name: {name}</h2>
      <h2>Id: {id}</h2>
      {children}
    </div>
  );
}
export default Component;
