import { ImageWrapper, TileWrapper } from "../Tile/Tile.styles";
import { ShimmerWrapper } from "./Loader.styles";

const { TileGridStyles } = require("../TileGrid/TileGrid.styles");

export const Shimmer = ({ width, height }) => {
  return <ShimmerWrapper style={{ width, height }} />;
};

export const TileSkeleton = () => {
  return (
    <TileWrapper>
      <ImageWrapper>
        <Shimmer />
      </ImageWrapper>
      <Shimmer height={16} />
    </TileWrapper>
  );
};

const Loader = ({ numberOfTiles = 12 }) => {
  return (
    <TileGridStyles>
      {Array.from({ length: numberOfTiles }).map((_, index) => (
        <TileSkeleton key={index} />
      ))}
    </TileGridStyles>
  );
};

export default Loader;
