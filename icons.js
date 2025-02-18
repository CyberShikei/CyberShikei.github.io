const images = "/images";

const icons = [
    { name: "profile_pic", url: "https://github.com/CyberShikei", img: `${images}/profile_pic.jpg` },
    { name: "GitHub", url: "https://github.com/", img: `${images}/github_logo.png` },
    { name: "LinkedIn", url: "https://www.linkedin.com/", img: `${images}/linkedin_logo.png` },
    { name: "Google", url: "https://www.google.com/", img: `${images}/google_logo.png` },
    { name: "YouTube", url: "https://www.youtube.com/", img: `${images}/youtube_logo.png` }
];

const iconContainer = document.getElementById("icon-container");

icons.forEach(icon => {
    const iconElement = document.createElement("div");
    iconElement.classList.add("icon");

    iconElement.innerHTML = `
        <a href="${icon.url}" target="_blank" class="icon-link", id="${icon.name}">
            <img src="${icon.img}" alt="${icon.name}" class="icon-image" id="${icon.name}">
        </a>
    `;

    iconContainer.appendChild(iconElement);
});

