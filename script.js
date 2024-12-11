const wordMap = {
  "hello": "yo",
    "goodbye": "peace",
    "friend": "bruzz",
    "bros": "bruzz",
    "hoes": "huzz",
    "teacher": "tuzz",
    "grandma": "guzz",
    "love": "luv",
    "great": "lit",
    "amazing": "fire",
    "style": "drip",
    "cool": "chill",
    "family": "fam",
    "funny": "lol",
    "excited": "hyped",
    "hungry": "starving",
    "delicious": "bussin",
    "okay": "bet",
    "awesome": "goat",
    "suspicious": "sus",
    "throw": "yeet",
    "bold": "savage",
    "good": "gucci",
    "respect": "F in the chat",
    "ice cream": "bing chilling",
    "muscle legend": "gigachad",
    "awkward": "cringe",
    "true self": "based",
    "challenge": "no nut november",
    "rapper": "ice spice",
    "weird": "delulu",
    "funny noise": "metal pipe falling",
    "prodigy": "baby gronk",
    "charisma": "rizz",
    "strange": "only in ohio",
    "actor": "keanu reeves",
    "long-awaited": "gta 6",
    "creepy rooms": "backrooms",
    "meme name": "quandale dingle",
    "dominance pose": "t-pose",
    "flirting": "rizzing up",
    "strange shake": "grimace shake",
    "fnaf": "freddy fazbear",
    "pizza meme": "ayo the pizza here",
    "dancing": "skibidi",
    "exciting": "poggers",
    "funny": "Family Guy funny moments",
    "hustle mindset": "grindset",
    "dominant male": "sigma male",
    "awkward movie": "kino",
    "delusional": "delulu",
    "legend": "goat",
    "iconic shake": "grimace shake",
    "meme": "chungus",
    "furry meme": "ugandan knuckles",
    "actor legend": "keanu reeves",
    "viral meme": "ankha zone",
    "music motivator": "dj khaled",
    "confusing rooms": "backrooms",
    "popular game": "pizza tower",
    "weird internet": "redpilled",
    "holiday challenge": "no nut november",
    "boys": "lads",
    "girls": "shawties",
    "money": "racks",
    "fight": "beef",
    "angry": "mad af",
    "internet": "wifi haven",
    "victory": "dub",
    "failure": "L",
    "chopped": "chuzz",
    "freshman": "fruzz",
    "young": "yuzz",
    "mom": "muzz",
    "dad": "duzz",
    "dillan gawlak": "dgawk",
    "raygan": "sussy baka",
    "savanna": "Among Us Fingers",
    "kate": "Brendan's wife",
    "mags": "swag mags",
    "karnati": "K",
    "shayaan": "Shybaby",
    "Katherine": "Shayaans slave",
    "Saxson": "retard",
    "jamian": "Williams kitten",
    "Masturbating for a long period of time": "Gooning",
    "Abusing ones self until you are about to ejaculate but before you ejaculate you halt to maintain the dopamine inside your body": "gooning",
    "bro": "bruzz",
    "golf": "ts ass",
    "Henry": "Golf bruzz",
};

function brainrotTranslate(text) {
  return text
    .split(" ")
    .map(word => wordMap[word.toLowerCase()] || word)
    .join(" ");
}

document.getElementById("translateButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const outputText = brainrotTranslate(inputText);
  document.getElementById("outputText").value = outputText;
});

document.getElementById("wordListLink").addEventListener("click", () => {
  const wordList = document.getElementById("wordList");
  const wordListContent = document.getElementById("wordListContent");
  wordListContent.innerHTML = Object.entries(wordMap)
    .map(([word, translation]) => `<li>${word}: ${translation}</li>`)
    .join("");
  wordList.classList.remove("hidden");
});

document.getElementById("closeWordList").addEventListener("click", () => {
  document.getElementById("wordList").classList.add("hidden");
});

document.getElementById("suggestButton").addEventListener("click", () => {
  document.getElementById("suggestionBox").classList.remove("hidden");
});

document.getElementById("closeSuggestionBox").addEventListener("click", () => {
  document.getElementById("suggestionBox").classList.add("hidden");
});

document.getElementById("submitSuggestion").addEventListener("click", () => {
  const suggestWord = document.getElementById("suggestWord").value;
  const suggestTranslation = document.getElementById("suggestTranslation").value;
  if (suggestWord && suggestTranslation) {
    alert(`Suggestion submitted: ${suggestWord} => ${suggestTranslation}`);
    document.getElementById("suggestWord").value = "";
    document.getElementById("suggestTranslation").value = "";
    document.getElementById("suggestionBox").classList.add("hidden");
  } else {
    alert("Please fill out both fields before submitting.");
  }
});

    
