import style from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={style.message}>
            <div className={style.author}>{props.author}</div>
            <div className={style.messageText}>{props.message}</div>
        </div>)
}

export default Messages;
