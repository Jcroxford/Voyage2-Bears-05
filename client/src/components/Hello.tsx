import * as React from "react";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: IHelloProps) => (
  <h1>
    Hello from to {props.compiler} and {props.framework}!
  </h1>
);
