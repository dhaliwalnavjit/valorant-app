"use client";

import { ImageWrapper, StyledImage, TileWrapper } from "./Tile.styles";

export const Tile = ({ imageUrl, title, onClick }) => {
  return (
    <TileWrapper onClick={onClick}>
      <ImageWrapper>
        <StyledImage src={imageUrl ?? ""} fill loading="lazy" alt={title} />
      </ImageWrapper>
      {title}
    </TileWrapper>
  );
};
