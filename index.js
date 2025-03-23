const starEls = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".fa-regular")
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];


starEls.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index)
    });
});

function updateRating(index){
    starEls.forEach((starEls, idx)=>{
        if(idx < index + 1){
            starEls.classList.add("active");
        }else{
            starEls.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) =>{
        emojiEl.style.transform = `translateX(-${index * 50}px)`;
        emojiEl.style.color = colorsArray[index];
    });

}