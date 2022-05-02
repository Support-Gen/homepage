import { keyframes } from "@emotion/react";

export const fadeInBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
