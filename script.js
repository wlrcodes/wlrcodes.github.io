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
    "cool": "sigma",
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
    "katherine": "Shayaans slave",
    "saxson": "retard",
    "jamian": "Williams kitten",
    "masturbating for a long period of time": "Gooning",
    "abusing ones self until you are about to ejaculate but before you ejaculate you halt to maintain the dopamine inside your body": "gooning",
    "bro": "bruzz",
    "golf": "ts ass",
    "talk": "yap",
    "cute": "skibidi",
    "lame": "beta",
};

// Translate input text when clicking "Translate"
document.getElementById("translateButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const outputText = brainrotTranslate(inputText);
  document.getElementById("outputText").value = outputText;
});

function brainrotTranslate(text) {
  return text
    .split(" ")
    .map((word) => wordMap[word.toLowerCase()] || word)
    .join(" ");
}

// Toggle "Current Words" dropdown
document.getElementById("currentWordsButton").addEventListener("click", () => {
  const dropdown = document.getElementById("currentWordsDropdown");
  const isVisible = dropdown.classList.contains("visible");

  if (isVisible) {
    dropdown.classList.remove("visible");
    dropdown.style.display = "none";
  } else {
    dropdown.innerHTML = Object.entries(wordMap)
      .map(([word, translation]) => `<p><strong>${word}</strong>: ${translation}</p>`)
      .join("");
    dropdown.classList.add("visible");
    dropdown.style.display = "block";
  }
});

// Suggestions handling
document.getElementById("suggestButton").addEventListener("click", () => {
  // Code to handle suggestions (unchanged from the original)
});

document.getElementById("viewSuggestionsButton").addEventListener("click", () => {
  // Code to view suggestions (unchanged from the original)
});
