const addNewItemSection = document.querySelector("#artistAddNewItemPage");
const addNewItemDiv = document.querySelector("#addNewItem");
const addNewItemBtn = document.querySelector("#addNewItemBtn");
const snapshot = document.querySelector("#snapshotImg");
const snapshotUrl = document.querySelector("#snapshotUrl");
const snapshotPrice = document.querySelector("#snapshotPrice");
const snapshotType = document.querySelector("#snapshotType");
const snapshotDescription = document.querySelector("#snapshotDescription");
const snapshotTitle = document.querySelector("#snapshotTitle");
const snapshotDivButton = document.querySelector("#snapshotDivButton");
const cancelNewItemBtn = document.querySelector("#cancelNewItemBtn");
const canvasImg = document.querySelector("#canvas");
const checkboxStatus = document.querySelector("#isPublished");
const titleError = document.querySelector("#titleErrorMessage");
const typeErrorMessage = document.querySelector("#typeErrorMessage");
const priceErrorMessage = document.querySelector("#priceErrorMessage");
const imgErrorMessage = document.querySelector("#imgErrorMessage");

itemTypes.forEach((item) => {
  snapshotType.innerHTML += `<option value="${item}">${item}</option>`;
});

addNewItemBtn.addEventListener(
  "click",
  function () {
    const isValid = validateRequiredFields();
    if (isValid) {
      if (localStorage.getItem("itemToBeUpdated")) {
        items = items.map((item) => {
          if (
            item.id === JSON.parse(localStorage.getItem("itemToBeUpdated")).id
          ) {
            return {
              ...item,
              title: snapshotTitle.value,
              description: snapshotDescription.value,
              type: snapshotType.value,
              price: snapshotPrice.value,
              image: snapshotImage ? snapshotImage : snapshotUrl.value,
            };
          }
          return item;
        });
        // UPDATE ITEM
      } else {
        // ADD NEW ITEM
        const newItem = {
          id: Math.floor(Math.random() * 100000000),
          title: snapshotTitle.value,
          description: snapshotDescription.value,
          type: snapshotType.value,
          image: snapshotImage ? snapshotImage : snapshotUrl.value,
          price: snapshotPrice.value,
          artist: JSON.parse(localStorage.getItem("artist")).name,
          dateCreated: Date.now(),
          isPublished: isPublished.checked,
          isAuctioning: false,
          dateSold: "",
          priceSold: "",
        };
        items.unshift(newItem);
        clearInputs()
      }

      localStorage.removeItem("itemToBeUpdated");
      window.location = "#artistItemsPage";
    }
  },
  false
);

cancelNewItemBtn.addEventListener("click", function () {
  clearInputs();
  localStorage.removeItem("itemToBeUpdated");
  window.location = "#artistItemsPage";
});

function validateRequiredFields() {
  if (!snapshotTitle.value) {
    titleError.innerHTML = "Please enter item title";
    snapshotTitle.addEventListener("click", () => {
      titleError.innerHTML = "";
    });
    return false;
  } else if (snapshotType.value === "chooseItemType") {
    typeErrorMessage.innerHTML = "Please select item type";
    snapshotType.addEventListener("click", () => {
      typeErrorMessage.innerHTML = "";
    });
    return false;
  } else if (!snapshotPrice.value) {
    priceErrorMessage.innerHTML = "Please enter item price";
    snapshotPrice.addEventListener("click", () => {
      priceErrorMessage.innerHTML = "";
    });
    return false;
  } else if (!snapshotImage && !snapshotUrl.value) {
    imgErrorMessage.innerHTML = "Please take a snapshot or enter an URL";
    snapshot.addEventListener("click", () => {
      imgErrorMessage.innerHTML = "";
    });
    snapshotUrl.addEventListener("click", () => {
      imgErrorMessage.innerHTML = "";
    });
    return false;
  }

  return true;
}

function initArtistAddNewItemPage() {
  let itemToBeUpdated = localStorage.getItem("itemToBeUpdated");
  if (itemToBeUpdated) {
    const artItem = JSON.parse(itemToBeUpdated);
    snapshotTitle.value = artItem.title;
    snapshotDescription.value = artItem.description;
    snapshotType.value = artItem.type;
    snapshotPrice.value = artItem.price;
    snapshotUrl.value = artItem.image;
    snapshot.isPublished = artItem.isPublished;
    addNewItemBtn.innerHTML = "Update";
  } else {
    addNewItemBtn.innerHTML = "Add New Item";
  }
}

function clearInputs() {
  snapshot.value = "";
  snapshotUrl.value = "";
  snapshotPrice.value = "";
  snapshotType.value = "";
  snapshotDescription.value = "";
  snapshotTitle.value = "";
  const context = canvasImg.getContext("2d");
  context.clearRect(0, 0, canvasImg.width, canvasImg.height);
  canvas.style.display = "none";
  snapshotDivButton.style.display = "inline-block";
  isPublished.checked = false;
}
