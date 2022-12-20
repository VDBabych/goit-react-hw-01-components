import styled from "styled-components";

export const Description = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[4]};
transition: background-color ${p => p.theme.transition.main};
&:hover{
    background-color: ${p => p.theme.colors.dark};
}
`
export const Avatar = styled.img`
width: 150px;
height: 150px;
align-self: center;
margin-bottom: ${p => p.theme.space[5]};

border-radius: ${p => p.theme.radii.round};
border: ${p => (p.theme.borders.s + p.theme.colors.accentDark)};
box-shadow: ${p => p.theme.shadows.s};
transition: transform ${p => p.theme.transition.main},
background-color ${p => p.theme.transition.main} 350ms;
&:hover{
    transform: scale(1.15);
    background-color: ${p => p.theme.colors.light};
}
`

export const Name = styled.p`
margin-bottom: ${p => p.theme.space[1]};
font-size: ${p => p.theme.fontSizes.l};
font-family: ${p => p.theme.fonts.accent};
font-weight: ${p => p.theme.fontWeights.bold};
transition: color ${p => p.theme.transition.main};
${Description}:hover &{
    color: ${p => p.theme.colors.light};
}
`

export const Tag = styled.p`
margin-bottom: ${p => p.theme.space[5]};
font-size: ${p => p.theme.fontSizes.s};
font-family: ${p => p.theme.fonts.main};
color: ${p => p.theme.colors.darkGrey};
transition: color ${p => p.theme.transition.main};
${Description}:hover &{
    color: ${p => p.theme.colors.light};
}
`

export const Location = styled.p`
font-size: ${p => p.theme.fontSizes.m};
font-family: ${p => p.theme.fonts.main};
color: ${p => p.theme.colors.darkGrey};
transition: color ${p => p.theme.transition.main};
${Description}:hover &{
    color: ${p => p.theme.colors.light};
}
`


export const Stats = styled.ul`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
background-color: ${p => p.theme.colors.lightGrey};
border-top: ${p => (p.theme.borders.s + p.theme.colors.accentDark)};
`

export const StatsBlock = styled.li`
padding: ${p => p.theme.space[4] + p.theme.space[2]};
display: flex;
gap: ${p => p.theme.space[2]};
flex-direction: column;
align-items: center;
justify-content: center;
&:not(:last-child) {
border-right: ${p => p.theme.borders.s + p.theme.colors.dark};

}
`


export const Label = styled.span`
color: ${p => p.theme.colors.darkGrey};
font-size: ${p => p.theme.fontSizes.m};
font-family: ${p => p.theme.fonts.main};
transition: font-size ${p => p.theme.transition.main};
${p => p.theme.media.tab(`
font-size: ${p.theme.fontSizes.xl};
${StatsBlock}:hover &{
    font-size: ${p.theme.fontSizes.xs};
};
`)}
`

export const Quantity = styled.span`
font-size: ${p => p.theme.fontSizes.m};
font-weight: ${p => p.theme.fontWeights.bold};
font-family: ${p => p.theme.fonts.accent};
transition: font-size ${p => p.theme.transition.main};
${p => p.theme.media.tab(`
font-size: ${p.theme.fontSizes.xs};
${StatsBlock}:hover &{
    font-size: ${p.theme.fontSizes.xl};
};
`)}
`