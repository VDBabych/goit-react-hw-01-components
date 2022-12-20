import styled from "styled-components";

export const Item = styled.li`
display: flex;
margin-left: auto;
margin-right: auto;
align-items: center;
gap: ${p => p.theme.space[4]};
padding: ${p => p.theme.space[4]};
border: ${p => p.theme.borders.m + p.theme.colors.dark};
border-radius: ${p => p.theme.radii.normal};
box-shadow: ${p => p.theme.shadows.l};
transition: background-color ${p => p.theme.transition.main};
&:hover{
    background-color: ${p => p.theme.colors.dark};
}
&:not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]};
}

${p => p.theme.media.tab(`width: 600px`)};
${p => p.theme.media.desk(`width: 800px`)};
`

export const Status = styled.span`
display: block;
width: 15px;
height: 15px;
border-radius: ${p => p.theme.radii.round};
${p => p.isOnline? `background-color: green` : `background-color: red`};
`

export const Name = styled.p`
font-family:  ${p => p.theme.fonts.main};
font-size: ${p => p.theme.fontSizes.l};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.dark};
transition: font-size ${p => p.theme.transition.main},
color ${p => p.theme.transition.main};
${  Item }:hover &{
    font-size: ${p => p.theme.fontSizes.xl};
    color: ${p => p.theme.colors.light};
};
`

