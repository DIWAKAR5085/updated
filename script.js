const games = [
    { name: "GTA V", img: "gta.jpg", min: "Intel Core i5-3470, 8GB RAM, NVIDIA GTX 660 2GB", link: "https://www.rockstargames.com/V/", cracked: "https://fitgirl-repacks.site/grand-theft-auto-v/" },
    { name: "RDR 2", img: "rdr2.jpg", min: "Intel Core i5-2500K, 8GB RAM, NVIDIA GTX 770 2GB", link: "https://www.rockstargames.com/reddeadredemption2/", cracked: "https://fitgirl-repacks.site/red-dead-redemption-2/" },
    { name: "COD 2", img: "cod2.jpg", min: "Intel Pentium 4, 512MB RAM, NVIDIA GeForce 3", link: "https://store.steampowered.com/app/2630/Call_of_Duty_2/", cracked: "https://fitgirl-repacks.site/call-of-duty-2/" },
    { name: "Valorant", img: "valorant.jpg", min: "Intel Core i3-4150, 4GB RAM, Intel HD 3000", link: "https://playvalorant.com/", cracked: "https://fitgirl-repacks.site/valorant/" },
    { name: "PUBG", img: "pubg.jpg", min: "Intel Core i5-4430, 8GB RAM, NVIDIA GTX 960 2GB", link: "https://pubg.com/", cracked: "https://fitgirl-repacks.site/playerunknowns-battlegrounds/" },
    { name: "Forza Horizon 5", img: "forza.jpg", min: "Intel Core i3-4170, 8GB RAM, NVIDIA GTX 650", link: "https://www.xbox.com/en-US/games/forza-horizon-5", cracked: "https://fitgirl-repacks.site/forza-horizon-5/" },
    { name: "Cyberpunk 2077", img: "cyberpunk.jpg", min: "Intel Core i7-4790, 16GB RAM, NVIDIA GTX 1060 6GB", link: "https://www.cyberpunk.net/", cracked: "https://fitgirl-repacks.site/cyberpunk-2077/" },
    { name: "Minecraft", img: "minecraft.jpg", min: "Intel Core i3-3210, 4GB RAM, Intel HD Graphics 4000", link: "https://www.minecraft.net/", cracked: "https://fitgirl-repacks.site/minecraft/" },
    { name: "FIFA 23", img: "fifa.jpg", min: "Intel Core i5-6600K, 8GB RAM, NVIDIA GTX 1050 Ti", link: "https://www.ea.com/games/fifa/fifa-23", cracked: "https://fitgirl-repacks.site/fifa-23/" },
    { name: "Assassin’s Creed Valhalla", img: "ac.jpg", min: "Intel Core i7-6700, 12GB RAM, NVIDIA GTX 1080", link: "https://www.ubisoft.com/game/assassins-creed/valhalla", cracked: "https://fitgirl-repacks.site/assassins-creed-valhalla/" },
];

const software = [
    { name: "Adobe Photoshop", img: "photoshop.jpg", desc: "Professional photo editing tool", link: "https://www.adobe.com/products/photoshop.html" },
    { name: "Microsoft Office", img: "office.jpg", desc: "Word, Excel, PowerPoint & more", link: "https://www.microsoft.com/en-us/microsoft-365/get-started-with-office-2021" },
    { name: "Visual Studio Code", img: "vscode.jpg", desc: "Best code editor", link: "https://code.visualstudio.com/" },
    { name: "Google Chrome", img: "chrome.jpg", desc: "Fastest web browser", link: "https://www.google.com/chrome/" },
    { name: "WinRAR", img: "winrar.jpg", desc: "File compression tool", link: "https://www.win-rar.com/download.html" },
    { name: "AutoCAD", img: "autocad.jpg", desc: "Engineering design software", link: "https://www.autodesk.com/products/autocad/overview" },
];

function showPage(page) {
    document.querySelector(".container").style.display = "none";
    document.getElementById(`${page}-page`).style.display = "block";

    if (page === "games") populateGames();
    else populateSoftware();
}

function goBack() {
    document.querySelectorAll(".page").forEach(page => page.style.display = "none");
    document.querySelector(".container").style.display = "block";
}

function populateGames() {
    document.querySelector(".game-list").innerHTML = games.map(game =>
        `<div class="card">
            <img src="${game.img}" alt="${game.name}">
            <h2>${game.name}</h2>
            <p>Minimum Requirements: ${game.min}</p>
            <div class="download-options">
                <button class="original-btn" onclick="window.open('${game.link}')">Original</button>
                <button class="cracked-btn" onclick="window.open('${game.cracked}')">Cracked</button>
            </div>
        </div>`).join("");
}

function populateSoftware() {
    document.querySelector(".software-list").innerHTML = software.map(app =>
        `<div class="card">
            <img src="${app.img}" alt="${app.name}">
            <h2>${app.name}</h2>
            <p>${app.desc}</p>
            <button class="download-btn" onclick="window.open('${app.link}')">Download</button>
        </div>`).join("");
}
