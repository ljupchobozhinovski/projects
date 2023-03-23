window.addEventListener("hashchange", handleRouting);
window.addEventListener("load", handleRouting);

function handleRouting() {
  let hash = location.hash;
  const allPages = document.querySelectorAll(".page");
  allPages.forEach((page) => (page.style.display = "none"));

  if (!hash) {
    hash = "#landingPage";
  }

  const currentPage = document.querySelector(hash);
  currentPage.style.display = "block";

  switch (hash) {
    case "#landingPage":
      initLandingPage();
      break;
    case "#visitorHomePage":
      initVisitorHomePage();
      break;
    case "#visitorListingPage":
      initVisitorListingPage();
      break;
    case "#visitorFiltersPage":
      initVisitorFiltersPage();
      break;
    case "#artistHomePage":
      initArtistHomePage();
      break;
    case "#artistItemsPage":
      initArtistItemsPage();
      break;
    case "#artistAddNewItemPage":
      initArtistAddNewItemPage();
      break;
    case "#camera":
      initCamera();
      break;
    case "#auction":
      initAuction();
      break;
    default:
      break;
  }
}
