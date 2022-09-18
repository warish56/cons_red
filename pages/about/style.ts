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

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 20px;
`;

export const ContentTitle = styled.span`
  font-size: var(--head-s);
  margin-bottom: 5px;
  font-family: "DM Sans";
`;

export const CoontentDescription = styled.span`
  font-size: var(--p-m);
  font-family: "Roboto";
  line-height: 25px;
`;
