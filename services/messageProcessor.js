// Initialize Config
const { sendCarouselChatMessage, sendQuickReplyRatingChatMessage, sendTextChatMessage, sendTypingChatMessage,
    getMemberName } = require('../helper/graphAPI');

// Process Message
const processMessage = async (body) => {
    // console.log(JSON.stringify(body));
    const recipient = body.entry[0].messaging[0].sender.id;
    // console.log(recipient);

    await sendTypingChatMessage(recipient);

    if (body.entry[0].messaging[0].message.quick_reply)
    {
        if (body.entry[0].messaging[0].message.quick_reply.payload === 'RATING')
        {
            await sendTextChatMessage("Muito obrigado por usar nosso bot! 👍", recipient);
        }
        else
        {
            await sendQuickReplyRatingChatMessage(recipient);
        }
    }
    else
    {
        const senderName = await getMemberName(recipient);
        const replyTxt = `Olá ${senderName}, em que eu posso lhe ajudar hoje?`;
        await sendTextChatMessage(replyTxt, recipient);
        await sendTypingChatMessage(recipient);
        await sendCarouselChatMessage(recipient);
    }
}

// Export call
module.exports = {
    processMessage
};
