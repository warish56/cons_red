// import styled from "styled-components";

// export const MainArea = styled.div`
//   display: grid;
//   grid-template-columns: 300px minmax(300px, 800px) 300px;
//   grid-template-rows: 1fr;
// `;

// export const DrawerArea = styled.aside`
//   grid-column: 1/2;
// `;
// export const ContentArea = styled.main`
//   grid-column: 2/3;
// `;

import styled from "styled-components";

export const MainArea = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(
      300px,
      ${({ $fullContent }: { $fullContent: boolean }) =>
        $fullContent ? "1fr" : "800px"}
    );
  grid-template-rows: 1fr;
`;

export const DrawerArea = styled.aside`
  grid-column: 1/2;
`;
export const ContentArea = styled.main`
  grid-column: 2/3;
  padding: 10px;
`;
