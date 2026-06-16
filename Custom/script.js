const GalleryImages = document.querySelectorAll(".imageGallery img");

console.log(GalleryImages);

// ❌ Problem 1:
// Ye dono variables tumne bahar bana diye.
// img2 ek fixed element ko store kar raha hai.
// Jab pehli baar image swap hogi to img2 gallery me chala jayega,
// lekin variable ab bhi usi purani image ko refer karega.
// Flip swap ke case me current image ko dynamically lena chahiye.

// const img = document.querySelector(".speacialImage");
// const img2 = document.querySelector(".specialImage2");

function dynamicGallery() {
  GalleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      const img2 = document.querySelector(".imageShow img");
      const state = Flip.getState(img);
      const state2 = Flip.getState(img2);

      document.querySelector(".imageGallery").appendChild(img2);
      document.querySelector(".imageShow").appendChild(img);

      Flip.from(state, {
        duration: 1,
        ease: "power3.in",
        absolute: true,
        scale: true,
      });
      Flip.from(state2, {
        duration: 1,
        ease: "power3.in",
        absolute: true,
        scale: true,
      });
    });
  });
}

dynamicGallery();
