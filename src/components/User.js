import React from 'react'

const User = ({ user, selectUser }) => {
    
    return (
        <div className="user_wrapper" onClick={()=>selectUser(user)}>
            <div className="user_info">
                <div className="user_detail">
                    <img src="https://mpng.subpng.com/20180509/fyq/kisspng-computer-icons-user-profile-clip-art-5af2c2026fcf73.188817051525858818458.jpg" alt="avatar" className="avatar" />
                    <h5>{user.name}</h5>
                </div>
                <div
                    className={`user_status ${user.isOnline ? "online" : "offline"}`}  >
                        
                </div>
            </div>
        </div >

    )
}
export default User
