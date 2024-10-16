"use client";

import Loader from "../Loader/Loader";
import { Tile } from "../Tile/Tile";
import { Modal, Skeleton, TileGridStyles } from "./TileGrid.styles";
import { useEffect, useState } from "react";

const TileGrid = ({ category }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    if (category) {
      setLoading(true);
      fetch(
        `https://valorant-api.com/v1/${
          category === "ranks" ? "competitivetiers" : category
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data.data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [category]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <TileGridStyles>
          {data.map((item) => (
            <Tile
              key={item.uuid}
              imageUrl={item.displayIcon}
              title={item.displayName}
              onClick={() => setSelectedItem(item)}
            />
          ))}

          {selectedItem && (
            <Modal isOpen={true}>
              <div>
                <h2>{selectedItem.displayName}</h2>
                {/* More details of the selected item */}
              </div>
            </Modal>
          )}
        </TileGridStyles>
      )}
    </div>
  );
};

export default TileGrid;
