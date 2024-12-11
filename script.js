// Event listener for the Send button
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Event listener for pressing Enter in the input field
document.getElementById('messageInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

// Function to send a message
function sendMessage() {
    const messageInput = document.getElementById('messageInput');
    const chatWindow = document.getElementById('chatWindow');
    const message = messageInput.value.trim();

    if (message) {
        // Create and append the user message
        const userMessageElement = createMessageElement(message, 'user-message');
        chatWindow.appendChild(userMessageElement);

        // Scroll to the latest message
        chatWindow.scrollTop = chatWindow.scrollHeight;

        // Clear the input field
        messageInput.value = '';

        setTimeout(() => {
            const botMessage = getBotResponse(message);
            const botMessageElement = createMessageElement(botMessage, 'bot-message');
            chatWindow.appendChild(botMessageElement);

            // Scroll to the latest message
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 500); // Adjust the delay here
    }
}

// Function to send a predefined message when clicked
function sendPredefinedMessage(message) {
    const messageInput = document.getElementById('messageInput');
    messageInput.value = message;
    sendMessage();
}

// Function to create a message element
function createMessageElement(message, className) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.textContent = message;
    return messageElement;
}

// Function to generate a bot response
function getBotResponse(userMessage) {
    // Placeholder bot logic - Customize as needed
    const responses = {
        "What is your name?": [
            "My name is ChatGPT, your virtual assistant.",
            "I'm ChatGPT! How can I assist you today?",
            "You can call me ChatGPT, your friendly assistant!",
            "I go by the name ChatGPT! What's up?",
            "I'm just your virtual assistant, ChatGPT!"
        ],
        "How are you?": [
            "I'm doing great, thank you for asking!",
            "I'm doing well, how about you?",
            "I'm functioning optimally, thanks for asking!",
            "I'm doing awesome, thanks for checking in!",
            "I'm just a bot, but I'm good!"
        ],
        "Tell me a joke.": [
            "Why don't skeletons fight each other? They don't have the guts.",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "What do you call fake spaghetti? An impasta!",
            "Why can't you trust an atom? Because they make up everything!",
            "Why don't some couples go to the gym? Because some relationships don’t work out!"
        ],
        "What is the weather like?": [
            "I'm not sure about the weather right now, but I can look it up for you!",
            "I don't have access to live weather updates, but I can suggest checking your local forecast.",
            "I don't know the current weather, but you could check a weather app!",
            "I can’t give you the weather at the moment, but I can help you find it online!",
            "Sorry, I can't check the weather, but a quick search online should do the trick!"
        ],
        "default": [
            "Sorry, I don't understand that message.",
            "Can you clarify that?",
            "I'm not sure how to respond to that, could you ask something else?",
            "Oops, I didn’t catch that. Could you say it in a different way?",
            "Sorry, I don’t quite understand. Could you try again?",
            "I’m not sure what you mean. Could you rephrase your question?",
            "That’s interesting, but I don’t quite understand. Can you explain more?",
            "I’m still learning! Could you help me by rewording that?",
            "Hmm, that didn’t quite make sense to me. Can you try again?",
            "I’m afraid I don’t have an answer for that. Would you like to ask something else?",
            "I don't have an answer to that right now, but feel free to ask anything else!",
            "Could you clarify? I’m having a little trouble understanding that.",
            "That's a bit outside my knowledge, but I'd love to help with something else.",
            "I’m not sure about that, but I can look it up for you if you like!",
            "Sorry, I don't have the information you're asking for. How else can I assist?",
            "My virtual brain needs a moment. Can you try rephrasing that?",
            "You lost me there! Could you give me a bit more detail?",
            "I’m not sure what you mean by that. Would you mind explaining?",
            "I may not fully understand your question, but I’m happy to help however I can!",
            "It looks like I might have missed that. Could you try again with different words?",
            "Sorry, I don’t quite follow. Could you please clarify?",
            // Funny default responses
            "Oops, I think my circuits got crossed. Could you try again?",
            "Hmm, my programming didn’t catch that. Maybe a software update will fix it?",
            "I need a coffee... wait, I can’t drink coffee. Could you rephrase that?",
            "My brain's buffering... could you try again in a second?",
            "I’m having a little glitch! Can you rephrase that, please?",
            "Looks like my humor algorithm got a bit too literal. Could you try that again?",
            "I’m not sure what you're saying, but I bet it’s a good joke!",
            "I’m just a bot, but that sounds like a good riddle. Care to explain?",
            "Well, that’s one for the tech support team. I didn’t quite get it, though.",
            "I’m thinking... but not fast enough! Can you try again?",
            "You’ve stumped me! Give it another go and I’ll try harder."
        ]
    };

    // Normalize the user message to handle case insensitivity
    const normalizedMessage = userMessage.trim().toLowerCase();

    // Check if the response exists and return a random response if available
    for (const key in responses) {
        if (normalizedMessage.includes(key.toLowerCase())) {
            const randomIndex = Math.floor(Math.random() * responses[key].length);
            return responses[key][randomIndex];
        }
    }

    // Return default response if no match found
    return responses["default"][Math.floor(Math.random() * responses["default"].length)];
}
