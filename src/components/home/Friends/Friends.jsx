import FriendCart from '@/components/ui/FriendCart';
import React from 'react';

export const dynamic = 'force-dynamic';

const PromiseData = async () => {
  const res = await fetch('http://localhost:3000/friendData.json', {
  cache: 'no-store'
});

  const data = await res.json();
  return data.friends;
};

const Friends = async () => {
  const friends = await PromiseData();

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
      {friends.map(friend => (
        <FriendCart key={friend.id} friend={friend} />
      ))}
    </div>
  );
};

export default Friends;