async function initVisitorFiltersPage() {
  const artists = await getArtists();
  filterByArtist.innerHTML = `<option selected value="" disabled>Choose</option>`;
  artists.forEach((artist) => {
    filterByArtist.innerHTML += `<option value="${artist.name}">${artist.name}</option>`;
  });
  initItemType();
}

function initItemType() {
  filterByType.innerHTML = `<option selected value="" disabled>Choose</option>`;
  itemTypes.forEach((item) => {
    filterByType.innerHTML += `<option value="${item}">${item}</option>`;
  });
  const closeFilters = document.querySelector("#closeFilters");
  closeFilters.addEventListener("click", clearFilters);
}

function clearFilters() {
  filterByTitle.value = "";
  filterByArtist.value = "";
  filterByMinimumPrice.value = "";
  filterByMaximumPrice.value = "";
  filterByType.value = "";
  window.location = "#visitorListingPage";
}
