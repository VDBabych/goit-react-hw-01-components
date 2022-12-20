import styled from "styled-components";

export const Title = styled.h2`
width: 100%;
padding: ${p => p.theme.space[4] + p.theme.space[5]};
text-align: center;
font-family: ${p => p.theme.fonts.accent};
font-size: ${p => p.theme.fontSizes.xl};
border-bottom: ${p => p.theme.borders.m + p.theme.colors.dark};
transition: background-color ${p => p.theme.transition.main},
color ${p => p.theme.transition.main};

&:hover{
    background-color: ${p => p.theme.colors.dark};
    color: ${p => p.theme.colors.light};
}
`

export const StatList = styled.ul`
display: grid;
grid-template-columns: ${p => ' 1fr'.repeat(p.amount)};
`

export const StatItem = styled.li`
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[1] + p.theme.space[2]};

background-color: ${p => p.theme.colors.random};
font-family:  ${p => p.theme.fonts.main};
color: ${p => p.theme.colors.light};
transition: background-color ${p => p.theme.transition.main};
${p => p.theme.media.mob(`
padding: ${p.theme.space[2] + p.theme.space[3]};
`)};
${p => p.theme.media.tab(`
padding: ${p.theme.space[3] + p.theme.space[4]};
`)}
${p => p.theme.media.desk(`
&:hover{
    background-color: ${p.theme.colors.random()};
}
`)}
`

export const ItemLabel = styled.span`
transition: font-size ${p => p.theme.transition.main},
color ${p => p.theme.transition.main};;
font-size: ${p => p.theme.fontSizes.s};
${p => p.theme.media.mob(`
font-size: ${p.theme.fontSizes.m};
`)}
${p => p.theme.media.tab(`
font-size: ${p.theme.fontSizes.l};
${StatItem}:hover &{
    font-size: ${p.theme.fontSizes.s};
    color: ${p.theme.colors.dark};
};
`)}
`

export const ItemPercentage = styled.span`
transition: font-size ${p => p.theme.transition.main},
color ${p => p.theme.transition.main};
font-size: ${p => p.theme.fontSizes.s};
${p => p.theme.media.mob(`
font-size: ${p.theme.fontSizes.m};
`)}
${p => p.theme.media.tab(`
font-size: ${p.theme.fontSizes.s};
${StatItem}:hover &{
    font-size: ${p.theme.fontSizes.l};
    color: ${p.theme.colors.dark};
};
`)}
`