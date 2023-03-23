const navbarInnerText = document.querySelector("#navbar");

function handleNavbarText() {
  const landingPage = ["#landingPage"];
  const visitorPage = [
    "#visitorListingPage",
    "#visitorHomePage",
    "#visitorLandingPage",
  ];
  const artistPage = [
    "#artistHomePage",
    "#artistMenu",
    "#artistItemsPage",
    "#artistAddNewItemPage",
    "#camera",
  ];

  const isArtist = localStorage.getItem("artist") ? true : false;

  if(isArtist) {
    artistPage.push("#auction") 
  } else {
    visitorPage.push("#auction")
  }

  if (landingPage.includes(location.hash) || !location.hash) {
    navbarInnerText.innerHTML = `<a class="navbar-brand mx-0 my-0">
    <p
      id="streetArtistsNav"
      class="mx-0 my-0 defaultColors h3 fontReenieBeenie"
    >
      Street ARTists
    </p>
    <p id="ArtistsNav defaultColors"></p>
  </a>`;
  }
  if (visitorPage.includes(location.hash)) {
    navbarInnerText.innerHTML = `
    <a href="#landingPage"
      ><img
        id = "smallLogo"
        src="./assets/images/Logo.svg"
        width="70"
        height="70"
        alt="streetARTists.svg"
        class="mr-1"
    /></a>

    <a class="navbar-brand mx-0 my-0 mr-auto" href="#visitorHomePage">
      <p
        id="streetArtistsNav"
        class="mx-0 my-0 defaultColors h3 fontReenieBeenie"
      >
        Street ARTists
      </p>
      <p id="ArtistsNav defaultColors"></p>
    </a>
    <a href="#auction"
      ><img
        src="./assets/images/Auction.svg"
        width="40"
        height="40"
        alt="auction.svg"
        id = "auctionIcon"
    /></a>`;
  }

  if (artistPage.includes(location.hash)) {
    const artist = JSON.parse(localStorage.getItem("artist"));

    navbarInnerText.innerHTML = `<a href="#landingPage"
    ><img
      id = "smallLogo"
      src="./assets/images/Logo.svg"
      width="70"
      height="70"
      alt="streetARTists.svg"
      class="mr-1"
  /></a>

  <a class="navbar-brand mx-0 my-0 mr-auto" href="#artistHomePage">
    <p
      id="streetArtistsNav"
      class="mx-0 my-0 defaultColors h4 fontReenieBeenie"
    >
      ${artist.name}
    </p>
    <p id="ArtistsNav defaultColors"></p>
  </a>


  <div class="dropdown">
  <a class="defaultColors" href="#" role="" data-toggle="dropdown" aria-expanded="false" href="#"
  ><img
    src="./assets/images/burger-menu.svg"
    width="40"
    height="40"
    alt="burger-menu.svg"
/></a>
  <div class="dropdown-menu px-5 mx-0 dropdownMenuRight text-decoration-none reverseDefaultColors fontSizeXXLarge vw-100">
    <a class="dropdown-item lightBrownDefaultColor text-center" href="#artistHomePage">Home</a>
    <a class="dropdown-item lightBrownDefaultColor text-center" href="#artistItemsPage">Items</a>
    <a class="dropdown-item lightBrownDefaultColor text-center" href="#auction">Auction</a>
  </div>
</div>
  `;
  }
}

handleNavbarText()

window.addEventListener("hashchange", () => {
  handleNavbarText();
});

async function getArtists() {
  let artists = JSON.parse(localStorage.getItem("artists"));
  if (!artists) {
    const xhttp = new XMLHttpRequest();
    return new Promise((resolve) => {
      xhttp.onload = function () {
        artists = JSON.parse(this.responseText);
        localStorage.setItem("artists", JSON.stringify(artists));
        resolve(artists);
      };
      xhttp.open("GET", "https://jsonplaceholder.typicode.com/users");
      xhttp.send();
    });
  }
  return artists;
}

function formatDate(dateNumber) {
  return new Date(dateNumber).toLocaleDateString("en-GB");
}

function formatTime(time) {
  return new Date(time).toLocaleTimeString("en-GB")
}

function getItemsByArtist() {
  const artist = JSON.parse(localStorage.getItem("artist"));
  const itemsByArtist = items.filter((item) => item.artist === artist.name);
  return itemsByArtist;
}
