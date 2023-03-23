const asArtist = document.querySelector("#chooseArtist");
const asArtistBtn = document.querySelector("#chooseArtistSelectBtn");
const asVisitor = document.querySelector("#chooseVisitor");
const artistSelector = document.querySelector("#chooseArtistSelectBtn");

let artists = [];

async function initLandingPage() {
  localStorage.removeItem("artist");
  artists = await getArtists();
  artistSelector.innerHTML =
    '<option selected value="Choose" disabled>Choose</option>';
  artists.forEach((artist) => {
    artistSelector.innerHTML += `<option value="${artist.name}">${artist.name}</option>`;
  });

  asArtist.addEventListener("click", handleAsArtist);
  asVisitor.addEventListener("click", handleAsVisitor);
}

function handleAsArtist() {
  const artist = artists.find((a) => a.name == asArtistBtn.value);
  if (artist) {
    localStorage.setItem("artist", JSON.stringify(artist));
    window.location.hash = `artistHomePage`;
  }
}

function handleAsVisitor() {
  window.location.hash = "visitorHomePage";
}
