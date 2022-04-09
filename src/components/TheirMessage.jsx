const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage || lastMessage.sender.username !== message.sender.username;
  return (
    <div className="message-raw">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="message attchment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "8px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            marginLeft: isFirstMessageByUser ? "4px" : "8px",
            backgroundColor: "#CABCD",
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
