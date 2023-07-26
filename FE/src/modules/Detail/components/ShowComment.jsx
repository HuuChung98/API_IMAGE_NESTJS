import React from 'react'

const ShowComment = ({ commentInfor }) => {
    console.log(commentInfor);

    return (
        <>
            {commentInfor?.map((item) => {
                return (
                    <div className='d-flex'>
                        <p>@{item?.user?.full_name}: </p>
                        <p className='text-info'> {item?.cmt}</p>
                    </div>
                )
            })}
        </>
    )
}

export default ShowComment