import FriendCart from '@/components/ui/FriendCart';
import React from 'react';
import friendsData from '../../../../public/friendData.json';

const Friends = () => {
    const friends = friendsData;

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                friends.map(friend=><FriendCart key={friend.id} friend={friend} />)
            }
        </div>
    );
};

export default Friends;