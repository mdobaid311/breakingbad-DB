const searchBtn = document.querySelector(".character-search");
const record = document.getElementById("no-record");

async function getCharacters(url) {
  const res = await fetch(url);
  const data = await res.json();
  if (data.length > 0 && searchBtn.value) {
    record.style.display = "none";
    showCharacters(data);
  } else {
    main.innerHTML = "";
    record.style.display = "block";
  }
}

function showCharacters(characters) {
  main.innerHTML = "";
  characters.forEach((character) => {
    console.log(character);
    const { name, img, occupation, nickname } = character;
    const characterEl = document.createElement("div");
    characterEl.classList.add("character");
    characterEl.innerHTML = `
    <img src="${img}" alt="${name}" />
    <div class="character-info">
      <h3>${name}</h3>
    </div>
    <div class="overview">
      <h3>Overview</h3>
      ${(nickname, occupation)} 
    </div>
  `;
    main.appendChild(characterEl);
  });
}

searchBtn.addEventListener("search", (event) => {
  event.preventDefault();
  const input = event.target.value;
  const url = `https://www.breakingbadapi.com/api/characters?name=${input} `;

  console.log(url);
  getCharacters(url);
});
