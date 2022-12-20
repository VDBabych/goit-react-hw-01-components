import styled from "styled-components"

export const Section = styled.section`
margin: 0 auto;
margin-bottom: ${p => p.theme.space[6]};
border-radius: ${p => p.theme.radii.normal};
border: ${p => p.theme.borders.m + p.theme.colors.dark};
overflow: hidden;
box-shadow: ${p => p.theme.shadows.l};
${p => p.theme.media.tab(`width: 600px`)};
${p => p.theme.media.desk(`width: 800px`)};
`