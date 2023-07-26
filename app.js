const questions = [
    "What's the most romantic thing your partner has ever done for you?",
    "Have you ever had a crush on someone while we were dating? Tell me about it.",
    "What's your favorite memory of us together?",
    "What's something you've always wanted to try in the bedroom but haven't told me?",
    "What's the most significant fear you have about our relationship?",
    "Have you ever been jealous of one of my friends? Who and why?",
    "What's one thing you wish I would do more often?",
    "What's your idea of a perfect date night?",
    "Have you ever pretended to like a gift I gave you when you didn't?",
    "What's the one secret you've never told me about your past?",
    "What's the most embarrassing thing you've done in front of me?",
    "What's your biggest pet peeve about me?",
    "Have you ever thought about what our future kids would look like?",
    "What's your favorite physical feature of mine?",
    "If you could change one thing about me, what would it be, and why?",
    "What's the most spontaneous thing you've ever done with me?",
    "What's the most significant challenge you think we'll face in our relationship?",
    "Have you ever had a dream about someone else while we were together? Tell me about it.",
    "What's the most romantic dream you've had about us?",
    "What's one thing you've always wanted to ask me but haven't?",
    // Add more truth questions here...
  ];
  
  const dares = [
    "Give your partner a passionate kiss for at least 30 seconds.",
    "Send your partner a flirty text message right now.",
    "Dance to a romantic song with your partner, no matter where you are.",
    "Give your partner a foot massage.",
    "Sing a love song to your partner, even if you're not a great singer.",
    "Take a selfie with your partner and post it on social media with a sweet caption.",
    "Write a love letter to your partner and read it aloud.",
    "Take your partner on a surprise date to their favorite place.",
    "Compliment your partner on three different things they do that you appreciate.",
    "Cook a romantic dinner for your partner.",
    "Give your partner a forehead kiss and tell them why you love them.",
    "Share a childhood crush story with your partner.",
    "Do your partner's favorite activity with them, even if it's not your cup of tea.",
    "Whisper something sweet and romantic in your partner's ear.",
    "Make a playlist of your partner's favorite songs and play it for them.",
    "Plan a weekend getaway for just the two of you.",
    "Write a short poem about your partner and read it out loud.",
    "Hold hands with your partner and take a leisurely walk together.",
    "Bake or cook something together as a couple.",
    "Do something your partner has been asking you to do but you've been putting off.",
    // Add more dare challenges here...
  ];
  
  
  const questionBox = document.getElementById("question");
  const truthBtn = document.getElementById("truth-btn");
  const dareBtn = document.getElementById("dare-btn");
  
  function getRandomQuestion(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  }
  
  truthBtn.addEventListener("click", () => {
    const randomTruth = getRandomQuestion(questions);
    questionBox.textContent = randomTruth;
  });
  
  dareBtn.addEventListener("click", () => {
    const randomDare = getRandomQuestion(dares);
    questionBox.textContent = randomDare;
  });
  