// Thumbnail click to update main image and info
document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Update main image
        const mainImage = document.getElementById('main-image');
        mainImage.src = thumbnail.src;

        // Update the information
        const info = document.getElementById('info');
        const [title, description] = thumbnail.getAttribute('data-info').split('|');
        info.innerHTML = `<h1>${title}</h1><p>${description}</p>`;
    });
});



document.querySelectorAll('.thumbnail').forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Update main image
        const mainImage = document.getElementById('main-image');
        mainImage.src = thumbnail.src;

        // Update the information
        const info = document.getElementById('info');
        const dataInfo = thumbnail.getAttribute('data-info').split('|');
        
        // Extract data (title, hours, rating, description, map, contact, fee)
        const [title, hours, rating, description, map, contact, fee] = dataInfo;

        // Populate the info section
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
