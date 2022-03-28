// Initialize Config
const { sendGIFChatMessage, sendFileChatMessage,
sendQuickReplyChatMessage, sendTypingChatMessage, sendTextChatMessage } = require('../helper/graphAPI');

// Process Message
const processPostback = async (body) => {
    // console.log(JSON.stringify(body));
    // console.log('postback received');
    const recipient = body.entry[0].messaging[0].sender.id;
    // console.log(recipient);
    await sendTypingChatMessage(recipient)
    await sendTextChatMessage("Um momento por favor.", recipient);
    await sendTypingChatMessage(recipient)
    await sendGIFChatMessage(recipient);
    await sendTypingChatMessage(recipient)
    await sendFileChatMessage(recipient)
    await sendTypingChatMessage(recipient)
    await sendQuickReplyChatMessage(recipient);
}

// Export call
module.exports = {
    processPostback
};
