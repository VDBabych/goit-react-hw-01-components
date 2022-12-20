import { FriendsListItem } from "components/FriendsListItem/FriendsListItem";


export function FriendsList({ friends}) {
    return (
        <ul >
            {friends.map(el => <FriendsListItem
                key={el.id}
                avatar={el.avatar}
                name={el.name}
                isOnline={el.isOnline} />)}
        </ul>
    )
}