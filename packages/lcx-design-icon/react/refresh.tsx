import * as React from "react";
import { SVGProps } from "react";
const Refresh = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="prefix__icon"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M512 166.4c-70.4 0-134.4 19.2-192 57.6l-25.6-38.4c-12.8-19.2-38.4-12.8-44.8 6.4l-44.8 140.8c0 12.8 12.8 32 25.6 32l147.2-6.4c19.2 0 32-25.6 19.2-38.4l-32-38.4v-6.4c38.4-32 96-44.8 147.2-44.8 153.6 0 281.6 128 281.6 281.6S665.6 793.6 512 793.6 230.4 665.6 230.4 512c0-19.2-12.8-32-32-32s-32 12.8-32 32c0 192 153.6 345.6 345.6 345.6S857.6 704 857.6 512 704 166.4 512 166.4z"
      fill="currentColor"
    />
  </svg>
);
export default Refresh;
