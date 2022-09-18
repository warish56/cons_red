import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  isolation: isolate;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background-color: var(--light-gray-color);
    scale: 1.2;
    display: none;
    z-index: -1;
  }

  &:hover {
    color: white;
    &::after {
      display: block;
    }
  }

  & > a {
    text-decoration: none;
  }
`;
