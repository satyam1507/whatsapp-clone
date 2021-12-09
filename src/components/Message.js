import React, { useRef, useEffect } from 'react'
import { Check, CheckAll } from 'react-bootstrap-icons';
import Moment from 'react-moment';
const Message = ({ msg, user1, check }) => {
    const scrollRef = useRef();
    useEffect(() => {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }, [msg]);
    return (
        <div className={`message_wrapper ${msg.from === user1 ? "own" : ""}`}
            ref={scrollRef}>
            <p className={msg.from === user1 ? "me" : "friend"}>
                {msg.text + " "}{check === false ? <Check color="royalblue" fill="white" viewBox="0 0 16 16" /> : msg.seen === false ? <CheckAll color="royalblue" fill="white" viewBox="0 0 16 16" /> : <CheckAll color="royalblue"  viewBox="0 0 16 16" />}
                <br></br>

            </p>
            <h6><Moment format="h:mm a">{msg.createdAt.toDate()}</Moment></h6>
            {/* <div class="checkmark">L</div> */}

        </div>
    )
}

export default Message
