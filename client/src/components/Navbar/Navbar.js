import "./Navbar.css";
import Notification from "../../img/notification.svg";
import Message from "../../img/message.svg";
import Settings from "../../img/settings.svg";
import { useEffect, useState } from "react";



const Navbar = ({ socket }) => {
    const [notifications, setNotifications] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        socket.on("getText", (data) => {
            setNotifications((prev) => [...prev, data])
        })
    }, [socket]);

    const displayNotification = ({ senderName, text }) => {
        let action;

        // if (type === 1) {
        //     action = "liked";
        // } else if (type === 2) {
        //     action = "commented";
        // } else {
        //     action = "shared"
        // }
        return (
            <span className="notification">
                {`${senderName}: ${text}`}
            </span>
        )
    };

    const handleRead = () => {
        setNotifications([]);
        setOpen(false);
    }

    return (
        <div className="navbar">
            <span className="logo">Socket io training</span>
            <div className="icons">
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Notification} alt="" className="iconImg" />
                    {
                        notifications.length > 0 &&
                        <div className="counter">{notifications.length}</div>
                    }
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Message} alt="" className="iconImg" />
                </div>
                <div className="icon" onClick={() => setOpen(!open)}>
                    <img src={Settings} alt="" className="iconImg" />
                </div>
            </div>
            {open &&
                <div className="notifications">
                    {notifications.map((n) => (
                        displayNotification(n)
                    ))}
                    <button className="nButton" onClick={(handleRead)}>
                        Mark as read
                    </button>
                </div>
            }
        </div>
    )
}

export default Navbar
