document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const mainImage = document.getElementById('main-image');
        mainImage.src = thumbnail.src;
        const info = document.getElementById('info');
        const dataInfo = thumbnail.getAttribute('data-info').split('|');
        const [title, hours, rating, description, map, contact, fee] = dataInfo;
        info.innerHTML = `
            <h1>${title}</h1>
            <p class="hours">Hours: ${hours}</p>
            <img class="rating-image" src="${rating}" alt="Rating: ${rating}">
            <p class="description">${description}</p>
            <a href="${map}" target="_blank" class="map-link">Google Map Location</a>
            <img class="contact-image" src="${contact}" alt="Contact Information">
            <p class="entrance-fee">${fee}</p>
        `;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const checkBtn = document.querySelector(".checkbtn");
    const nav = document.querySelector("nav ul");
  
    checkBtn.addEventListener("click", function () {
      nav.classList.toggle("nav-active");
    });
  });