import {useEffect, useState} from "react";
import Messages from "../Messages/Messages";
import style from "./MessageList.module.css"

const MessageList = () => {
    let [messages, setMessages] = useState([])
    let [text, setNewText] = useState('')

    const onChangeMessageText = (event) => {
        setNewText(event.target.value);
    }
    const sendMessage = (event) => {
        event.preventDefault();
        setMessages([...messages, {author: 'user', message: text}])
        setNewText('');
    }
    useEffect(() => {
        if(messages.length === 0) {
            return
        }
        const lastMessage = messages[messages.length - 1];
        if(lastMessage.author === 'bot') {
            return
        }
       const timer = setTimeout(() => {
           setMessages([...messages, {author: 'bot', message: 'в следующий раз будет лучше =('}])
       }, 1500)
        return () => {
            clearTimeout(timer);
        }
    },[messages])

    return (
        <div className={style.container}>
            <form onSubmit={sendMessage}>
                <input onChange={onChangeMessageText} value={text}  type="text"/>
                <button>Send</button>
            </form>
            {messages.map((item, index)=> (
                <Messages message={item.message} author={item.author} key={index} />
            ))}

        </div>
    )
}
export default MessageList
