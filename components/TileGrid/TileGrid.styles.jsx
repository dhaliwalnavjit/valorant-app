import styled from "styled-components";

export const TileGridStyles = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  padding: 24px;
  background-color: #1c1c1c;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Skeleton = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  aspect-ratio: 1 / 1;
  gap: 5px;
  &:hover {
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  animation: ${({ isOpen }) => (isOpen ? "fadeIn 0.5s" : "fadeOut 0.5s")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
