import { Item, Name, Status } from "./FriendsListItem.styled";

export function FriendsListItem({avatar, isOnline, name}) {
    return (
        <Item>
            <Status isOnline={isOnline } />
            <img src={avatar} alt="User avatar" width="48" />
            <Name>{ name}</Name>
        </Item>
    )
}