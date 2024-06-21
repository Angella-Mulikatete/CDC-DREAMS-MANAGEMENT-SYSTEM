import React from 'react'
import Image from 'next/image'

const UserAvatar = ({image}:{image?:string}) => {
  return (
    <div>
      {image ? (
        <Image
          src="/assets/images/woman.jpg"
          width={40}
          height={40}
          alt="avatar"
        />
      ) : (
        <Image
          src="/assets/images/woman.jpg"
          width={40}
          height={40}
          alt="default image"
        />
      )}
    </div>
  );
}

export default UserAvatar
