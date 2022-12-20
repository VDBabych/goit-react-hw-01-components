// import PropTypes from 'prop-types';

import { Section } from "components/Section/Section.styled";
import { ItemLabel, ItemPercentage, StatItem, StatList, Title } from "./Statistics.styled";

export function Statistics({ stats, title }) {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <StatList amount={stats.length}>
        {stats.map(el => (
          <StatItem key={el.id}>
                <ItemLabel>{ el.label}</ItemLabel>
                <ItemPercentage>{ el.percentage }% </ItemPercentage>
          </StatItem>
        ))}
      </StatList>
    </Section>
  );
}
