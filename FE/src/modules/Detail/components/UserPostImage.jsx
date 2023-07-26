import React from 'react'

const UserPostImage = ( { userInfor } ) => {
    return (
        <div key={userInfor.image_id}>
            <p> Người đăng: {userInfor.full_name}</p>
            <p>Email: </p>
        </div>
    )
}

export default UserPostImage