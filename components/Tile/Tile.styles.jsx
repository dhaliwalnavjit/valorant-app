"use client";

import Image from "next/image";
import styled from "styled-components";

export const TileWrapper = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  /* height: 200px; */
  aspect-ratio: 1 / 1;
  gap: 5px;
  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  border-radius: 10px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 80%;
  width: 100%;
  border-radius: 10px;
  background-color: lightgrey;
`;
