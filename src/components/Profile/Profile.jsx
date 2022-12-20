import { Section } from 'components/Section/Section.styled';
import PropTypes from 'prop-types';
import { Avatar, Description, Name, Tag, Location, Stats, StatsBlock, Label, Quantity } from "./Profile.styled";


export function Profile({ avatar, location, stats, tag, username }) {
    return (
      <Section>
        <Description>
          <Avatar src={avatar} alt="User avatar"/>
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </Description>

        <Stats>
          <StatsBlock>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsBlock>
          <StatsBlock>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsBlock>
          <StatsBlock>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsBlock>
        </Stats>
      </Section>
    );
}

Profile.propTypes = {
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })

}