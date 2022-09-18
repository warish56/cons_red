import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 10px;
  grid-auto-flow: row dense;
  //   grid-auto-rows: 600px;
  align-items: start;

  & .p_card:nth-child(2n + 1) {
    // border: 1px red solid;
  }

  & .p_card:nth-child(2n + 3) {
    grid-column: 1/3;
    // border: 1px blue solid;
  }
`;

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const ProjectImageConatiner = styled.div`
  position: relative;
  aspect-ratio: 1/1;
  max-height: 400px;
  overflow: hidden;
  cursor: pointer;
  isolation: isolate;
  & img {
    object-fit: cover;
    object-position: center;
    transition: transform ease 0.3s;
  }

  &::after {
    position: absolute;
    content: "";
    inset: 0;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color ease 0.3s;
    z-index: 1;
  }

  &:hover {
    &::after {
      background-color: rgba(0, 0, 0, 0.5);
    }

    & img {
      transform: scale(1.3);
    }
  }

  margin-bottom: 5px;
`;

export const Title = styled.span`
  font-size: var(--head-s);
  font-family: "DM Sans";
  margin-bottom: 8px;
  color: var(--project-card-title-color);
`;

export const Description = styled.span`
  font-size: var(--p-m);
  font-family: "Roboto";
  color: var(--project-card-desc-color);
  line-height: 25px;
`;
