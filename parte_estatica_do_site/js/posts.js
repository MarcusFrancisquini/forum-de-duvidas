// eslint-disable-next-line no-unused-vars
function toggleLike(element) {
  const unlikedImage = "../images/unliked.svg";
  const likedImage = "../images/liked.svg";
  if (element.src.includes("unliked.svg")) {
    element.src = likedImage;
  } else {
    element.src = unlikedImage;
  }
}
