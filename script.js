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


};

function brainrotTranslate(text) {
  return text
    .split(" ")
    .map((word) => wordMap[word.toLowerCase()] || word)
    .join(" ");
}

// Translate input text when clicking "Translate"
document.getElementById("translateButton").addEventListener("click", () => {
  const inputText = document.getElementById("inputText").value;
  const outputText = brainrotTranslate(inputText);
  document.getElementById("outputText").value = outputText;
});

// Open suggestion input window
document.getElementById("suggestButton").addEventListener("click", () => {
  const suggestionWindow = window.open(
    "",
    "SuggestionWindow",
    "width=400,height=400,resizable,scrollbars"
  );

  suggestionWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Submit Suggestion</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #282a36;
          color: #ffffff;
          margin: 0;
          padding: 20px;
          text-align: center;
        }
        input, button {
          margin: 10px 0;
          padding: 10px;
          font-size: 16px;
          border-radius: 5px;
          border: none;
        }
        input {
          width: 80%;
        }
        button {
          background-color: #e94560;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #d83450;
        }
      </style>
    </head>
    <body>
      <h1>Submit a Suggestion</h1>
      <label for="suggestWord">Word:</label><br>
      <input type="text" id="suggestWord" placeholder="Enter a word"><br>
      <label for="suggestTranslation">Translation:</label><br>
      <input type="text" id="suggestTranslation" placeholder="Enter a translation"><br>
      <button id="submitSuggestion">Submit</button>
      <button onclick="window.close()">Close</button>
      <script>
        document.getElementById("submitSuggestion").addEventListener("click", () => {
          const suggestWord = document.getElementById("suggestWord").value;
          const suggestTranslation = document.getElementById("suggestTranslation").value;
          if (suggestWord && suggestTranslation) {
            const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
            suggestions.push({ word: suggestWord, translation: suggestTranslation });
            localStorage.setItem("suggestions", JSON.stringify(suggestions));
            alert("Suggestion submitted successfully!");
            window.opener.renderSuggestions();
            window.close();
          } else {
            alert("Please fill out both fields.");
          }
        });
      </script>
    </body>
    </html>
  `);
});

// Open "View Submitted Suggestions" window
document.getElementById("viewSuggestionsButton").addEventListener("click", () => {
  const viewWindow = window.open(
    "",
    "ViewSuggestionsWindow",
    "width=400,height=400,resizable,scrollbars"
  );

  const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
  viewWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Submitted Suggestions</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #282a36;
          color: #ffffff;
          margin: 0;
          padding: 20px;
          text-align: center;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin: 5px 0;
          font-size: 16px;
        }
        button {
          margin-top: 20px;
          background-color: #e94560;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #d83450;
        }
      </style>
    </head>
    <body>
      <h1>Submitted Suggestions</h1>
      <ul>
        ${suggestions.map((s) => `<li>${s.word} > ${s.translation}</li>`).join("")}
      </ul>
      <button onclick="window.close()">Close</button>
    </body>
    </html>
  `);
});

// Render suggestions to update the permanent suggestions list
function renderSuggestions() {
  const suggestions = JSON.parse(localStorage.getItem("suggestions")) || [];
  const permanentList = document.getElementById("permanentSuggestions");
  if (permanentList) permanentList.innerHTML = ""; // Clear the list
}

// Initial rendering of suggestions
renderSuggestions();

