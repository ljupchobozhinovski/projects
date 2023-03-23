const filterByTitle = document.querySelector("#filterByTitle");
const filterByArtist = document.querySelector("#filterByArtist");
const filterByMinimumPrice = document.querySelector("#filterByMinPrice");
const filterByMaximumPrice = document.querySelector("#filterByMaxPrice");
const filterByType = document.querySelector("#filterByType");

function initVisitorListingPage() {
  const listingItemRow = document.querySelector(".listingItemRow");
  const title = filterByTitle.value;
  const artist = filterByArtist.value;
  const minPrice = parseInt(filterByMinimumPrice.value);
  const maxPrice = parseInt(filterByMaximumPrice.value);
  const type = filterByType.value;
  const publishedItems = items.filter((item) => item.isPublished);

  const itemsToRender = publishedItems.filter(
    (item) =>
      (title ? item.title.toLowerCase().includes(title.toLowerCase()) : true) &&
      (artist ? item.artist === artist : true) &&
      (minPrice ? item.price >= minPrice : true) &&
      (maxPrice ? item.price <= maxPrice : true) &&
      (type ? item.type === type : true)
  );

  itemsToRender.sort((a, b) => a.price - b.price)
  if (!itemsToRender.length) {
    return (listingItemRow.innerHTML = `<div class="container vh-100 defaultColors">
    <div class="row">
      <div class="col">
        <p class="h3 text-center py-5">There are no items to render.</p>
      </div>
    </div>
  </div>`);
  }
  listingItemRow.innerHTML = "";

  itemsToRender.forEach((item, index) => {
    const color = index % 2 === 0 ? "defaultColors" : "reverseDefaultColors";
    const badgeColor = index % 2 === 0 ? "badge-brown" : "badge-light-brown";

    return (listingItemRow.innerHTML += `
      
      <div class="col listingItemContainer">
          <div class="card w-100 mb-4">
            <img src="${item.image}" class="card-img-top" alt="${item.title}">
            <div class="card-body ${color}">
            <row class="d-flex justify-content-between" >
            <h3 class = "fontReenieBeenie">${item.artist}</h3>
            <p class="badge ${badgeColor} mt-auto mb-auto">$ ${item.price}</p>
            </row>
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
            </div>
          </div>
      </div>`);
  });
}
