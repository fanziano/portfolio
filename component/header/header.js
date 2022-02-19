function headerElement(el) {
    const headerEl = document.createElement("div");
    headerEl.innerHTML = `
    <div class="headerContainer">

        <a class="headerLogo" href="./index.html">
            <img src="./img/logo.png" alt="logo" class="logo">
        </a>
            
        <div class="headerClick">
            <div class="headerClick__nav">
                <a href="./portfolio.html" class="headerClick__nav-item">Portfolio</a>
                <a href="./servicios.html" class="headerClick__nav-item">Servicios</a>
                <a href="./contacto.html" class="headerClick__nav-item">Contacto</a>
            </div>

            <button class="headerClick__ham">
                <span class="headerClick__ham-line"></span>
                <span class="headerClick__ham-line"></span>
                <span class="headerClick__ham-line"></span>
            </button>

            <div class="headerClick__pop">
                <div class="headerClick__pop-content">
                    <button class="headerClick__pop-button">X</button>
                    <div class="headerClick__pop-content-links">
                        <a href="./portfolio.html">Portfolio</a>
                        <a href="./servicios.html">Servicios</a>
                        <a href="./contacto.html">Contacto</a>
                    </div> 
                </div> 
            </div> 
        </div> 
         
    </div>  
    `
    el.appendChild(headerEl);
};

function hamMenu() {
    const openHam = document.querySelector(".headerClick__ham");
    const closeHam = document.querySelector(".headerClick__pop-button");
    const hamEl = document.querySelector(".headerClick__pop");
    
    openHam.addEventListener ("click", () => {
        hamEl.style.display = "inherit";
    });
    closeHam.addEventListener ("click", () => {
        hamEl.style.display = ""; 
    });
}

