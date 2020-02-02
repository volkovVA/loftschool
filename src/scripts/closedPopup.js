export default function closedPopup() {
    const popup = document.querySelector(".js-popup");
    const closeBtn = popup.querySelector(".js-popup-close");

    closeBtn.addEventListener("click", function(e) {
        e.preventDefault();
        popup.style.display = "none";
    });
    popup.addEventListener("click", function(e) {
        if (e.target === popup) {
        closeBtn.click();
        }
    });
}

