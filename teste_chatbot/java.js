var isChatbotVisible = true;
		
document.getElementById("chatbot_img").addEventListener("click", function() {
    if (isChatbotVisible) {
        document.getElementById("chatbot").style.display = "none";
        isChatbotVisible = false;
    } else {
        document.getElementById("chatbot").style.display = "block";
        isChatbotVisible = false;
    }
});

