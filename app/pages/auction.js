let bidsCounter = 0;
let highestCurrentBid = 0;
const highestBidParagraph = document.querySelector("#highestBidParagraph");
const showCurrentBid = document.querySelector("#showCurrentBid");

function initAuction() {
  const hideAuctionDiv = document.querySelector("#hideAuctionDiv");
  const showAuctionDiv = document.querySelector("#showAuctionDiv");
  const isArtist = localStorage.getItem("artist") ? true : false;

  if (localStorage.getItem("auction")) {
    generateAuction();
  } else {
    showAuctionDiv.classList.add("d-none");
    hideAuctionDiv.classList.remove("d-none");
    hideAuctionDiv.innerHTML = `<div class="my-5 card text-center reverseDefaultColors">
    <i class="fa-solid fa-magnifying-glass-dollar fa-5x py-3"></i>
    <div class="card-body">
     
      <p class="card-text">There is currently no active auction.</p>
    
    </div>
    ${
      isArtist
        ? `<a id="noActiveAuction" href="#artistHomePage">
    <button id="goBackToHome" class="my-3 btn defaultColors w-50 text-center mr-auto ml-auto">
       Go back
    </button>
  </a>`
        : `<a id="noActiveAuction" href="#visitorHomePage">
  <button id="goBackToHome" class="my-3 btn defaultColors w-50 text-center mr-auto ml-auto">
     Go back
  </button>
</a>`
    }
    
  </div>`;
  }
}

function generateAuction() {
  const currentAuction = JSON.parse(localStorage.getItem("auction"));
  const isArtist = localStorage.getItem("artist") ? true : false;
  const showAuctionDiv = document.querySelector("#showAuctionDiv");
  const auctionItemImg = document.querySelector("#auctionItemImg");
  const auctionItemTitle = document.querySelector("#auctionItemTitle");
  const auctionItemDescription = document.querySelector(
    "#auctionItemDescription"
  );
  const showCurrentBid = document.querySelector("#showCurrentBid");
  const buyNowPrice = document.querySelector("#buyNowPrice");
  const bidValueInput = document.querySelector("#bidValueInput");
  const placeYourBid = document.querySelector("#placeYourBid");
  const modalAuctionTitle = document.querySelector("#modalAuctionTitle");
  const startOfTheAuction = document.querySelector("#startOfTheAuction");
  const auctionStartingPrice = document.querySelector("#auctionStartingPrice");
  const numberOfBids = document.querySelector("#numberOfBids");
  const timer = document.querySelector("#timer");

  const interval = setInterval(function () {
    const now = new Date().getTime();
    const countDown = localStorage.getItem("timer");
    if (countDown) {
      const distance = countDown - now;

      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.innerHTML = `${minutes}m ${seconds}s`;

      if (distance < 0) {
        timer.innerHTML = "EXPIRED";
        items = items.map((item) => {
          if (item.id === currentAuction.item.id) {
            item.isAuctioning = false;
            item.dateSold = new Date();
            item.priceSold = highestCurrentBid;
          }
          return item;
        });
        localStorage.removeItem("auction");
        localStorage.removeItem("timer");
        document.querySelector("body").classList.remove("modal-open");
        clearInterval(interval);
        initAuction();
      }
    }
  }, 1000);

  const auctioningItem = currentAuction.item;
  const startingPriceOfItem = Math.floor(auctioningItem.price / 2);

  showAuctionDiv.classList.remove("d-none");
  hideAuctionDiv.classList.add("d-none");

  placeYourBidButton.disabled = isArtist;

  placeYourBid.innerHTML = isArtist ? "View" : "Place your bid";

  auctionItemImg.setAttribute("src", auctioningItem.image);
  auctionItemTitle.innerHTML = auctioningItem.title;
  auctionItemDescription.innerHTML = auctioningItem.description;

  bidValueInput.value =
    highestCurrentBid > 0 ? parseInt(highestCurrentBid) + 10 : startingPriceOfItem;
  buyNowPrice.innerHTML = `$${Math.floor(auctioningItem.price * 10)}`;
  showCurrentBid.innerHTML = highestCurrentBid;
  modalAuctionTitle.innerHTML = auctioningItem.title;
  auctionStartingPrice.innerHTML = `$${startingPriceOfItem}`;
  numberOfBids.innerHTML = bidsCounter;
  startOfTheAuction.innerHTML = `Auction started on ${formatDate(
    currentAuction.startingDate
  )} at ${formatTime(currentAuction.startingDate)}`;

  placeYourBidButton.addEventListener("click", placeBid);
}

function placeBid() {
  const userBidValue = bidValueInput.value;
  const errorMessage = document.querySelector("#errorMessage");
  if (userBidValue <= highestCurrentBid) {
    errorMessage.classList.remove("d-none");
  } else {
    errorMessage.classList.add("d-none");
    const biddingList = document.querySelector("#biddingList");
    biddingList.innerHTML += `<li class="list-group-item list-group-item-success">$${userBidValue}</li>`;
    bidsCounter += 1;
    numberOfBids.innerHTML = bidsCounter;
    highestCurrentBid = userBidValue;
    highestBidParagraph.innerHTML = `$ ${highestCurrentBid}`;
    showCurrentBid.innerHTML = highestCurrentBid;
  }
}
