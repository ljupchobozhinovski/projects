let snapshotImage;

function initCamera() {
  const video = document.querySelector("#liveStream");
  const captureBtn = document.querySelector("#capture");
  const canvas = document.querySelector("#canvas");

  navigator.mediaDevices
    .getUserMedia({
      video: {
        facingMode: { ideal: "environment" },
      },
    })
    .then((stream) => {
      video.srcObject = stream;
    });

  video.addEventListener("canplay", function () {
    canvas.width = window.innerWidth - 50;
    canvas.height = window.innerHeight - 350;
  });

  captureBtn.addEventListener("click", function () {
    const ctx = canvas.getContext("2d");
    ctx.drawImage(
      video,
      0,
      0,
      window.innerWidth - 50,
      window.innerHeight - 350
    );
    snapshotImage = canvas.toDataURL();

    window.location = "#artistAddNewItemPage";
    canvas.classList.remove("d-none");
    canvas.style.display = "inline-block";
    snapshotDivButton.style.display = "none";
  });

  window.addEventListener("hashchange", function () {
    const activeStream = video.srcObject;
    const tracks = activeStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });
  });
}
