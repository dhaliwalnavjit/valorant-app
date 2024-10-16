import styled, { keyframes } from "styled-components";

// Define the shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// Skeleton loader container
export const ShimmerWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  background-image: linear-gradient(
    90deg,
    #f6f7f8 25%,
    #eaeaea 50%,
    #f6f7f8 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
  border-radius: 10px;
`;
