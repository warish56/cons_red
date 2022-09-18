import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 500px;
  position: relative;
  aspect-ratio: 1/1;
  margin-bottom: 20px;
`;

export const ContentSection = styled.div`
 display: flex;
 flex-flow: row: wrap;
`;

export const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  margin: 50px 0;
`;

export const MapSection = styled.div`
  flex: 1;
`;

export const IconSection = styled.div`
  display: flex;
  gap: 5px;
  font-famliy: "Roboto";
  font-size: var(--head-s);
  align-items: center;
  color: var(--contact-icon-color);

  & > span {
    font-size: var(--head-xs);
    color: var(--contact-icon-text-color);
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
