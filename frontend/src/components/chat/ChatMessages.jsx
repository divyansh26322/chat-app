import React, { useEffect, useRef, useState } from "react";

const ChatMessages = ({ messages, userDetails, selectedUserId }) => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const container = messagesContainerRef.current;

    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, messagesContainerRef]);

  return (
    <div
      className="absolute bottom-24 left-0 w-full px-7 lg:px-20 overflow-y-auto"
      ref={messagesContainerRef}
    >
      {!!selectedUserId && (
        <div className="flex flex-col gap-2">
          {messages.map((message) => (
            <div
              key={message._id}
              className={`text-white relative group rounded-b-2xl px-5 py-3 ${message.sender === userDetails._id
                  ? "bg-primarySecond self-end rounded-l-2xl"
                  : "bg-primary self-start rounded-r-2xl"
                }`}
            >
              <div
                style={{ overflowWrap: "break-word" }}
                className="flex flex-wrap max-w-500 break-word"
              >
                {message.text}
              </div>

              <div
                className={`absolute top-0 w-0 h-0 ${message.sender === userDetails._id
                    ? "bg-primarySecond self-end rounded-l-2xl"
                    : "bg-primary self-start rounded-r-2xl"
                  } border-b-20 border-b-transparent`}
              />
            </div>
          ))}
        </div>
      )}

      {selectedUserId && !messages.length && (
        <div className="text-gray-500 flex items-center justify-center h-full">
          Start a conversation
        </div>
      )}
    </div>
  );
};

export default ChatMessages;