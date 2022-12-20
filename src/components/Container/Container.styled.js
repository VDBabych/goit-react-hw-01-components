import styled from "styled-components";

export const Container = styled.div`
max-width: 480px;
padding: 0 ${p => p.theme.space[3]};
margin-left: auto;
margin-right: auto;

${p => p.theme.media.tab(`
max-width: 768px;
padding: 0 ${p.theme.space[4]};
`)};

${p => p.theme.media.desk(`
max-width: 1200px;
`)};
`