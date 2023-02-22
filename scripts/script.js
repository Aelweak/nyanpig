const skins = document.querySelectorAll(".skins");
const rainbowPig = document.querySelector(".loader-container svg");
const pig = document.querySelector(".pig");
const stateButton = document.querySelector(".state-button");
const loaderState = document.querySelector(".loader-state");

// Set active link (skins menu)

console.log([...skins]);

skins.forEach((skin) => {
    skin.addEventListener("click", ({ target }) => {
        skins.forEach((skin) => {
            if (skin === target) {
                skin.classList.add("active");
                skin.setAttribute("aria-selected", "true");
                skin.setAttribute("tabindex", "-1");
            } else {
                skin.classList.remove("active");
                skin.setAttribute("aria-selected", "false");
                skin.setAttribute("tabindex", "0");
            }
        });
        rainbowPig.setAttribute("class", target.dataset.skin);
    });
});

// Click on pig => ❤

pig.addEventListener("click", () => {
    let newHeart = document.createElementNS("http://www.w3.org/2000/svg", "g");
    newHeart.classList.add("heart");
    newHeart.innerHTML =
        '<rect width="1" height="1" transform="translate(32 3)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31 2)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(33 2)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(34 1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(34)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(30)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(30 1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(32)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(33 -1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31 -1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31)" fill="#cf2626"/><rect width="1" height="1" transform="translate(31 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(32 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(33 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(33)" fill="#cf2626"/><rect width="1" height="1" transform="translate(32 2)" fill="#cf2626"/>';
    pig.appendChild(newHeart);
    setTimeout(() => {
        pig.removeChild(newHeart);
    }, 600);
});

stateButton.addEventListener("click", () => {
    stateButton.classList.toggle("active");
    loaderState.classList.toggle("enter-exit");
});
