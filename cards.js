//ADDING LOGIC FOR THE TAROT CARD GAME

const tarotDeck = []; 
const addToDeck = (name, number, suit, meaning, image) => {
  tarotDeck.push({
    name,
    number,
    suit,
    meaning,
    image
  });
};

addToDeck(
  "the fool",
  0,
  "major arcana",
  "There are new beginnings on your horizon, coupled with an optimistic bordering naive trust in life.",
  "images/tarot/Fool.jpg"
);

addToDeck("magician", 1, "major arcana", "There is reason to trust your creativity and skills in action. Rely on your intuition, self-confidence, and abilities.", "images/tarot/magician.jpg");
addToDeck("high priestess", 2, "major arcana", "You have a clarity of thought about your current situation, but be open to deeper emotions, feminine wisdoms, and unknown mysteries.", "images/tarot/highPriestess.jpg");
addToDeck("empress", 3, "major arcana", "You have the ability to listen and understand. Open this skill further. Good friendships, unions, and/or marriage is on the horizon.", "images/tarot/empress.jpg");
addToDeck("emperor", 4, "major arcana", "A situation requires you to take a stand and fight for yourself. Be protective of yourself, your emotions, and your loved ones.", "images/tarot/emperor.jpg");
addToDeck("heirophant", 5, "major arcana","You are questioning your beliefs. This is good practice and will build your wisdom and your faith.", "images/tarot/heirophant.jpg");
addToDeck("lovers", 6, "major arcana", "There is a union of opposites, and you may be deeply attracted to a person or idea. But more importantly, you seek wholeness.", "images/tarot/lovers.jpg");
addToDeck("chariot", 7, "major arcana", "Your inner-will and intelligence are strong. Rely on this and you will accomplish your goals.", "images/tarot/chariot.jpg");
addToDeck("strength", 8, "major arcana", "Your personal power is capable of overcoming the obstacles in front of you.", "images/tarot/strength.png");
addToDeck("hermit", 9, "major arcana", "There is a deep need for solitude and personal reflection. Spend quality time alone in your questions.", "images/tarot/hermit.jpg");
addToDeck("wheel of fortune", 10, "major arcana", "Opportunits will spring up through an unexpected course of events.", "images/tarot/wheelof-fortune.jpg");
addToDeck("justice", 11, "major arcana", "Justice is knocking, and you will reap what you have sown.", "images/tarot/justice.jpg");
addToDeck("hanged man", 12, "major arcana", "Sacrifices must be made to reach a higher goal.", "images/tarot/hanged-man.jpg");
addToDeck("death", 13, "major arcana", "The closing of one door leads to the opening of another, just as death leads to rebirth.","images/tarot/death.jpg");
addToDeck("temperance", 14, "major arcana", "If events are occuring on a slower time-table than you anticipated, breathe and have patience.","images/tarot/temperance.jpg");
addToDeck("devil", 15, "major arcana", "You are in bondage. Whether emotional, physical, or materially bonded and it is inhibiting your productivity and growth.","images/tarot/devil.jpg");
addToDeck("tower", 16, "major arcana", "Everything you have been building in your life up until this point is about to collapse.", "images/tarot/tower.png");
addToDeck("star", 17, "major arcana", "You have energy and are a clear path. Like a star in the night sky, you have the ability to offer guiding insights.", "images/tarot/star.jpg");
addToDeck("moon", 18, "major arcana", "You have a psychic connection, but there is danger and unknown ahead. Be cautious in your decision-making.", "images/tarot/moon.jpg");
addToDeck("sun", 19, "major arcana", "You radiate fullfillment and happiness. There is happiness in relationships, enthusiasm for life, and general contentment.", "images/tarot/sun.jpg");
addToDeck("judgement", 20, "major arcana", "Your self-judgement is causing you to miss opportunities. What is done is done, and you should move forward.", "images/tarot/judgement.jpg");
addToDeck("world", 21, "major arcana", "You have worked hard to acheive a signficant goal, and others will notice.", "images/tarot/world.jpeg");
addToDeck("ace", 1, "wands", "There are new beginnings ahead, and new foundations to develop. This is a period of creative growth.", "images/tarot/ace-of-wands.jpg");
addToDeck("two", 2, "wands", "There are obstacles ahead, and you are suseptible to anxieties about losing control or comfort in the situation.", "images/tarot/two-of-wands.jpg");
addToDeck("three", 3, "wands ", "Be patient. You have established a strong foundation that needs time to succeed.", "images/tarot/three-of-wands.JPG");
addToDeck("four", 4, "wands", "You have worked hard. Enjoy the well-earned easing period that lies ahead.", "images/tarot/four-of-wands.jpg");
addToDeck("five", 5, "wands", "Because of your pride and greed, conflict is on your horizon.", "images/tarot/five-of-wands.jpg");
addToDeck("six", 6, "wands", "Be prepared to receive good news or a resolution to a current problem.", "images/tarot/six-of-wands.jpg");
addToDeck("seven", 7, "wands", "What valor! You have great capabilities to succeed at your endeavors", "images/tarot/seven-of-wands.jpg");
addToDeck("eight", 8, "wands", "Now is the time for action. Build on your past experiences to move forward.", "images/tarot/eight-of-wands.jpg");
addToDeck("nine", 9, "wands", "If you work to understand the structure and organization of situations, you will find comfort and success in stability.", "images/tarot/nine-of-wands.jpg");
addToDeck("ten", 10, "wands", "You feel oppressed even in your successes. Try redefining your values, establishing a sense of gratitude, and widening your vision.", "images/tarot/ten-of-wands.jpg");
addToDeck("page", 11, "wands", "There is a young person around you is eager to be of service, potentially sending an important message at the perfect time.", "images/tarot/page-of-wands-rider-waite-tarot_large.jpg");
addToDeck("knight", 12, "wands", "There is a young person around you, who you can trust. They have clear and honest intentions.", "images/tarot/knight-of-wands-rider-waite-tarot_large.jpg");
addToDeck("queen", 13, "wands", "There is an intelligent, prosperous woman who influences your life and she should be trusted when she offers advice and assistance. She is financially supportive of your goals and plans.", "images/tarot/queen-of-wands.jpg");
addToDeck("king", 14, "wands", "You have an honorable and trustworthy man in your life who has wisdom about when to take action and how to develop your talents into profitable enterprises.", "images/tarot/king-of-wands-rider-waite-tarot_large.jpg");
addToDeck("ace", 1, "swords", "You will quickly have a strong victory over your mental woes.", "images/tarot/ace-of-swords.jpg");
addToDeck("two", 2, "swords", "A once animosity-filled relationship will turn warm. Your opponents will become, at the very least, indifferent to your situations.", "images/tarot/two-of-swords.jpg");
addToDeck("three", 3, "swords", "Remember, although there is loss and separation in your future, resolutions to these issues will provide better footing to create new productive goals.", "images/tarot/three-of-swords.jpg");
addToDeck("four", 4, "swords", "Retreat. Take time to yourself and for yourself, because you need a vacation in order to accomplish your goals.", "images/tarot/four-of-swords.jpg");
addToDeck("five", 5, "swords", "There is saddness, defeat, lack of strength, and tragedy on your horizon.", "images/tarot/five-of-swords.jpg/");
addToDeck("six", 6, "swords", "The next step of your life must be accomplished. Take that first step.", "images/tarot/six-of-swords.jpeg");
addToDeck("seven", 7, "swords", "While all of the options available seem unappealing, have faith that there are still possibilities on the horizon.", "images/tarot/seven-of-swords.jpg");
addToDeck("eight", 8, "swords", "There is a problem that will occur. Handle it immediately for the least disasterous results.", "images/tarot/eight-of-swords.jpg");
addToDeck("nine", 9, "swords", "You are afflicted with a deep sorrow, and it is hard to see through such a depressive state. You are afflicted with feelings of self-pity and betrayal.", "images/tarot/nine-of-swords.jpg");
addToDeck("ten", 10, "swords", "You will realize that some of your values hold no significance to you anymore. Perhaps that will cause you to look back on your past accomplishments with less enthusiasm, but remember that those events are proof that you can accomplish your goals.", "images/tarot/ten-of-swords.jpg");
addToDeck("page", 11, "wands",  "Physical beauty does not equate to trust. Take note. There are hidden enemies and insincere relationships around you.","images/tarot/page-of-swords.jpg");
addToDeck("knight", 12, "wands", "An intelligent, young, charismatic young adult holds influence in your life, but be aware that individual does not hold your best interests at heart.", "images/tarot/prince-of-swords.jpg");
addToDeck("queen", 13, "wands", "A woman, often intelligence and in a position of authority, influences your life; however, she should not be trusted. She manipulates and her manipulations will lead to your chaos.", "images/tarot/queen-of-swords.jpeg");
addToDeck("king", 14, "wands", "There is an man in your life who seeks to exert mental strength and authority over you. He has a certain amount of authority over your decisions and this is a formative situation in your life.", "images/tarot/king-of-wands-rider-waite-tarot_large.jpg");
addToDeck("ace", 1, "pentacles", "Your creative inspirations and new goals will lead to monetary success.", "images/tarot/ace-of-pentacles.jpg");
addToDeck("two", 2, "pentacles", "You have some important decisions on the horizon but those decisions are harmonized by exciting, positive adventures.", "images/tarot/two-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("three", 3, "pentacles", "Developing your current education and talents will lead to monetary success.", "images/tarot/three-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("four", 4, "pentacles", "Your current situation is stable and your pursuits have lead to prosperity.", "images/tarot/four-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("five", 5, "pentacles", "What comes easily, leaves just as easily.", "images/tarot/five-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("six", 6, "pentacles", "Financial security is in your horizon. Be grateful and give back to others.", "images/tarot/six-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("seven", 7, "pentacles", "You are entering an era where you will be rewarded by investments you have made in the past.", "images/tarot/seven-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("eight", 8, "pentacles", "In regards to current or near future job prospects, you have the skills and abilities necessary to accomplish the tasks of the job.", "images/tarot/eight-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("nine", 9, "pentacles", "Your efforts in the past to build financial stability merit you deserved peace of mind.", "images/tarot/nine-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("ten", 10, "pentacles", "Things are going well for you! There might even be surprise gifts or an inheritance in your future.", "images/tarot/ten-of-cups.jpg");
addToDeck("page", 11, "pentacles", "Look for young person who is naive but filled with ambition or a message indicating a new, budding financial situation.", "images/tarot/page-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("knight", 12, "pentacles", "There is a person who sybolizes all potentials in life and who offers you help. Helping them reach their potential will help you reach yours.", "images/tarot/knight-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("queen", 13, "pentacles", "A financially stable, cultured, and wise woman who cares deeply about your life and goals. She is formative in your life.", "images/tarot/queen-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("king", 14, "pentacles", "There is a patron in your life, so be accepting and grateful for all help offered and received.", "images/tarot/king-of-pentacles-meaning-rider-waite-tarot_large.jpg");
addToDeck("ace", 1, "cups", "Your life is fertile. There are numerous budding relationships and this is a time for joy and beauty.", "images/tarot/ace-of-cups.jpg");
addToDeck("two", 2, "cups", "You are destined to share an intimate, passionate, balanced, and productive relationship.", "images/tarot/two-of-cups.jpg");
addToDeck("three", 3, "cups", "You have found something in your life that allows you to express your emotions. This is a positive outlet in your life and will bring emotional fulfillment.", "images/tarot/three-of-cups.jpg");
addToDeck("four", 4, "cups", "Your emotions are clouding your judgment. Take a look at how you feel about youself and others, and consider how those feelings hinder your goals.", "images/tarot/four-of-cups.jpg");
addToDeck("five", 5, "cups", "From an expected gain, there is a loss. Your emotions reflect distress from your unrealized rewards.", "images/tarot/five-of-cups.jpg");
addToDeck("six", 6, "cups", "What memories you have!! These memories are flooding back and will prove to be beneficial in your future prosperity.", "images/tarot/six-of-cups.jpeg ");
addToDeck("seven", 7, "cups", "Balance your imaginative tendencies. While your imagination leads to successful plans, it can also lead to unobtainable goals.", "images/tarot/seven-of-cups.jpg");
addToDeck("eight", 8, "cups", "You have doubts about the trajectory of your goals. But your doubts are more dangerous than failing at your goals.", "images/tarot/eight-of-cups.jpg");
addToDeck("nine", 9, "cups", "There is much success for your in your current situation. You do you boo boo.", "images/tarot/nine-of-cups.jpg");
addToDeck("ten", 10, "cups", "Your relationships are reaching a lovely, stable state. You will find joy in your domestic arrangement as long as you continue to pursue growth in your personal life.", "images/tarot/ten-of-cups.jpg");
addToDeck("page", 11, "cups", "A messenger will deliver news of youthful hope and emotional connection.", "images/tarot/page-of-cups.jpg");
addToDeck("knight", 12, "cups", "Be accepting of invites, offers, travel plans, and risk-taking.", "images/tarot/prince-of-cups.jpg");
addToDeck("queen", 13, "cups", "There is an emotionally deep and supportive person in your life. This should give you comfort when you are in emotionally turbulent situations.", "images/tarot/queen-of-cups.jpg");
addToDeck("king", 14, "cups", "There is a person in your life who offers assistance and can be trusted, especially with advice in areas of justice and fairness.", "images/tarot/king-of-cups.jpg");


//I used this code from the High-Low HW
function shuffle(deck) {
    const shuffleDeck = deck;
    let currentIndex = deck.length;
    let temporaryValue = 0;
    let randomIndex = 0;
    while (currentIndex > 0) {
      randomIndex = Math.ceil(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = shuffleDeck[currentIndex];
      shuffleDeck[currentIndex] = shuffleDeck[randomIndex];
      shuffleDeck[randomIndex] = temporaryValue;
    }
    return shuffleDeck;
  }

const shuffledDeck = shuffle(tarotDeck)