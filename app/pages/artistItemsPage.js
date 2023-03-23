function initArtistItemsPage() {
  renderCards();
}

function renderCards() {
  const listingItemRow = document.querySelector("#listingItemRow");
  const itemsByArtist = getItemsByArtist();

  listingItemRow.innerHTML = "";
  itemsByArtist.forEach((item) => {
    const publishedButton = item.isPublished
      ? ` <button
    id="unpublishBtn"
    type="button"
    class="btn greenColor text-white w-30 h-25 smallerFont mr-2"
  >
    Unpublish
  </button>`
      : ` <button
  id="publishBtn"
  type="button"
  class="btn btn-secondary text-white w-30 h-25 smallerFont mr-2"
>
  Publish
</button>`;

    const auctioningButton = item.isAuctioning
      ? "View auction"
      : "Send to auction";

    listingItemRow.innerHTML += `
    <div class="col listingItemContainer">
    <div class="card w-100 mb-3">
      <img src="${item.image}">
      <div class="card-body defaultColors smallerFont">
        <row class="d-flex justify-content-between">
          <h5 class="fontReenieBeenie">${item.artist}</h5>
          <p class="badge badge-brown mt-auto mb-auto p-2">
            $ ${item.price}
          </p>
        </row>
        <h5 class="card-title h6">${item.title}</h5>
        <h6 class="text-danger smallerFont">${formatDate(item.dateCreated)}</h6>
        <p class="card-text text-justify">${item.description}</p>
      </div>
      <div
        class="card-footer reverseDefaultColors d-flex justify-content-between" id="${
          item.id
        }"
      >
        <button
          id="sendToAuctionBtn"
          type="button"
          class="btn blueColor text-white w-35 h-25 smallerFont mr-2"
        >
          ${auctioningButton}
        </button>
        ${publishedButton}
       
        <button
          id="removeBtn"
          type="button"
          data-toggle="modal" data-target="#removeModal"
          class="btn redColor text-white w-23 h-25 smallerFont mr-2"
        >
          Remove
        </button>
        <button
          id="editBtn"
          type="button"
          class="btn defaultColors w-16 h-25 smallerFont"
        >
          Edit
        </button>
      </div>
    </div>
  </div>
    

  <div class="modal fade" id="removeModal" tabindex="-1" aria-labelledby="exampleRemoveModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header defaultColors">
        <h5 class="modal-title" id="removeModalLabel">Removing item from the list</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body defaultColors font-weight-bolder">
       Are you sure you want to remove this item?
      </div>
      <div class="modal-footer justify-content-between defaultColors">

      
      <button type="button" class="close btn btn-secondary" data-dismiss="modal" aria-label="Close">
      <span class="badge badge-pill badge-secondary" aria-hidden="true">Cancel</span>
    </button>

    <button id="confirmRemove" type="button" class="close btn btn-primary" data-dismiss="modal" aria-label="Close">
    <span class="badge badge-pill badge-danger" aria-hidden="true">Confirm</span>
  </button>

        
    
      </div>
    </div>
  </div>
</div> `;
  });
  addClickEvents();
}

function addClickEvents() {
  const sendToAuctionBtn = document.querySelectorAll("#sendToAuctionBtn");
  const unpublishBtn = document.querySelectorAll("#unpublishBtn");
  const publishBtn = document.querySelectorAll("#publishBtn");
  const removeBtn = document.querySelectorAll("#removeBtn");
  const editBtn = document.querySelectorAll("#editBtn");
  const confirmRemoveBtn = document.querySelector("#confirmRemove");
  let removeItemId = "";

  sendToAuctionBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const itemId = e.target.parentElement.id;
      sendToAuction(itemId);
    })
  );

  if (unpublishBtn) {
    unpublishBtn.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const itemId = e.target.parentElement.id;
        unpublishItem(itemId);
        renderCards();
      })
    );
  }

  if (publishBtn) {
    publishBtn.forEach((btn) =>
      btn.addEventListener("click", (e) => {
        const itemId = e.target.parentElement.id;
        publishItem(itemId);
        renderCards();
      })
    );
  }

  removeBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      removeItemId = e.target.parentElement.id;
    });
  });

  confirmRemoveBtn.addEventListener("click", (e) => {
    items = items.filter((item) => item.id != removeItemId);
    document.querySelector("body").classList.remove("modal-open");
    renderCards();
  });

  editBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const itemId = e.target.parentElement.id;
      editItem(itemId);
      window.location = "#artistAddNewItemPage";
    })
  );
}

function sendToAuction(itemId) {
  const auctionItem = items.find((item) => item.isAuctioning);
  if (!auctionItem) {
    items = items.map((item) => {
      if (itemId == item.id) {
        if (!item.isPublished) {
          alert("Item is not published");
        } else {
          item.isAuctioning = true;
          localStorage.setItem(
            "auction",
            JSON.stringify({
              item,
              startingDate: Date.now(),
            })
          );
          const countDown = new Date().getTime() + 2 * 60000;
          localStorage.setItem("timer", countDown);
          window.location = "#auction";
        }
      }
      return item;
    });
  } else if (auctionItem.id == itemId) {
    window.location = "#auction";
  }
}

function publishItem(itemId) {
  items = items.map((item) => {
    if (item.id == itemId) {
      item.isPublished = true;
    }
    return item;
  });
}

function unpublishItem(itemId) {
  items = items.map((item) => {
    if (item.id == itemId) {
      item.isPublished = false;
    }
    return item;
  });
}

function editItem(itemId) {
  const artItem = items.find((item) => item.id == itemId);
  localStorage.setItem("itemToBeUpdated", JSON.stringify(artItem));
}
