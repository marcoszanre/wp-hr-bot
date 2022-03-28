// Initial Config
const axios = require('axios').default;
const apiKey = process.env.ACCESS_TOKEN;
const config = {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
};
const scimEndpoint = "https://scim.workplace.com/Users";
const graphEndpoint = "https://graph.facebook.com";

// Post to group
const postGroup = async (content, link, groupId) => {
    const contentBody = {
        "message": content,
        "link": link
    }
    const res = await axios.post(
        `${graphEndpoint}/${groupId}/feed`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("content was posted successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Comment a post
const postComment = async (content, postId) => {
    const contentBody = {
        "message": content
    }
    const res = await axios.post(
        `${graphEndpoint}/${postId}/comments`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("comment was posted successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send carousel chat message
const sendCarouselChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message": {
            "attachment": {
                "type": "template",
                "payload": {
                "template_type": "generic",
                "elements": [{
                    "title": "Departamento pessoal",
                    "subtitle": "Informações para você",
                    "image_url": "https://storagemvbz.blob.core.windows.net/images/HR.png",
                    "buttons": [
                      {
                        "type":"postback",
                        "title":"Benefícios",
                        "payload":"BENEFITS_POSTBACK"
                      },
                      {
                        "type":"postback",
                        "title":"Holerite",
                        "payload":"PAYSLIP_POSTBACK"
                      }
                    ],
                },
                {
                    "title": "Treinamentos",
                    "subtitle": "Capacite-se",
                    "image_url": "https://storagemvbz.blob.core.windows.net/images/Training.png",
                    "buttons": [
                      {
                        "type":"postback",
                        "title":"LMS",
                        "payload":"BENEFITS_POSTBACK"
                      },
                      {
                        "type":"postback",
                        "title":"Pendentes",
                        "payload":"PAYSLIP_POSTBACK"
                      }
                    ],
                },
                {
                    "title": "Recrutamento",
                    "subtitle": "Planeje sua carreira",
                    "image_url": "https://storagemvbz.blob.core.windows.net/images/Career.png",
                    "buttons": [
                      {
                        "type":"postback",
                        "title":"Vagas internas",
                        "payload":"BENEFITS_POSTBACK"
                      },
                      {
                        "type":"postback",
                        "title":"Perfil 360",
                        "payload":"PAYSLIP_POSTBACK"
                      }
                    ],
                }]
                }
            }
        }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send GIF message
const sendGIFChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message":{
            "attachment":{
              "type":"image",
              "payload":{
                "url":"https://storagemvbz.blob.core.windows.net/images/OKAY.gif",
                "is_reusable":true
              }
            }
          }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send Text message
const sendTextChatMessage = async (content, recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message":{
            "text": `${content}`
          }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send File message
const sendFileChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message":{
            "attachment":{
              "type":"file",
              "payload":{
                "url":"https://storagemvbz.blob.core.windows.net/images/FOX_FABRICS_PAYROLL.docx",
                "is_reusable":true
              }
            }
        }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send Typing
const sendTypingChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "sender_action":"typing_on"
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send Quick Replies
const sendQuickReplyChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message": {
            "text": "Existe algo mais em que eu possa ajudar hoje?",
            "quick_replies":[
              {
                "content_type":"text",
                "title":"Sim",
                "payload":"HELP_NEEDED"
              },{
                "content_type":"text",
                "title":"Não",
                "payload":"HELP_NEEDED"
              }
          ]
        }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Send Rating Quiz
const sendQuickReplyRatingChatMessage = async (recipient) => {
    const contentBody = {
        "recipient": {
            "id": recipient
          },
          "message": {
            "text": "Excelente! Que nota você daria para meu atendimento?",
            "quick_replies":[
              {
                "content_type":"text",
                "title":"1",
                "payload":"RATING"
              },
              {
                "content_type":"text",
                "title":"2",
                "payload":"RATING"
              },
              {
                "content_type":"text",
                "title":"3",
                "payload":"RATING"
              },
              {
                "content_type":"text",
                "title":"4",
                "payload":"RATING"
              },
              {
                "content_type":"text",
                "title":"5",
                "payload":"RATING"
              }
          ]
        }
    }
    const res = await axios.post(
        `${graphEndpoint}/me/messages`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was send successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Get member name
const getMemberName = async (recipient) => {
    const res = await axios.get(
        `${graphEndpoint}/${recipient}?fields=name`,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("message was sent successfully");
        console.log(res.data.name);
        if (res.data.name) {
            return res.data.name;
        }
        else
        {
            return "Unknown User";
        }
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Export call
module.exports = {
    postGroup,
    postComment,
    sendGIFChatMessage,
    sendCarouselChatMessage,
    sendFileChatMessage,
    sendQuickReplyChatMessage,
    sendQuickReplyRatingChatMessage,
    sendTextChatMessage,
    sendTypingChatMessage,
    getMemberName
};
