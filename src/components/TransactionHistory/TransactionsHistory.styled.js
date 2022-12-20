import styled from "styled-components";

export const Tab = styled.table`
width: 100%;
border-collapse: collapse;
text-align: center;
margin-left: auto;
margin-right: auto;
margin-top: ${p => p.theme.space[6]};
border: ${p => p.theme.borders.l};
border-radius: ${p => p.theme.radii.normal};
box-shadow: ${p => p.theme.shadows.l};
overflow: hidden;


${p => p.theme.media.tab(`width: 600px`)};
${p => p.theme.media.desk(`width: 800px`)};
`

export const THead = styled.thead`
  color: ${p => p.theme.colors.light};
  background-color: ${p => p.theme.colors.accentDark};
  text-transform: uppercase;
`;


export const Th = styled.th`
  padding: ${p => p.theme.space[3]};
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: ${p => p.theme.colors.accentLight};
  }
`;

export const Td = styled.td`
  padding: ${p => p.theme.space[3]};
  border: ${p => p.theme.borders.s + p.theme.colors.dark};
`;