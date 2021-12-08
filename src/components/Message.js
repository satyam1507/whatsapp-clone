import React, { useRef, useEffect } from 'react'
import Moment from 'react-moment';
const Message = ({ msg, user1 }) => {
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [msg]);
    return (
        <div className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
         ref ={scrollRef}>
            <p className={msg.from === user1 ? "me" : "friend"}>
                {msg.text}{msg.seen===false?" ✔ ":" ✔✔"}
                <br></br>
                
            </p>
            <h6><Moment format="h:mm a">{msg.createdAt.toDate()}</Moment></h6>
            {/* <div class="checkmark">L</div> */}

        </div>
    )
}

export default Message
