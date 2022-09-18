// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   height: 100vh;
//   position: sticky;
//   top: 0;
//   justify-content: center;
//   z-index: 1;
// `;

// export const Contents = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   gap: 30px;
//   font-family: "DM Sans";
//   font-size: var(--nav-link-fs);
//   padding-left: 20px;
//   color: var(--nav-link-color);
// `;

import styled from "styled-components";

export const Container = styled.div`
  // display: flex;
  // flex-flow: column nowrap;
  // justify-content: center;
  // height: 100vh;

  display: grid;
  grid-template-rows: 20vh minmax(60vh, 1fr) 20vh;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Contents = styled.div`
  display: flex;
  flex-flow: column nowrap;

  grid-row: 2/3;
  gap: 30px;
  font-family: "DM Sans";
  font-size: var(--nav-link-fs);
  padding-left: 20px;
  color: var(--nav-link-color);
`;
