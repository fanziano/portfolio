function footerElement(el) {
    const footerEl = document.createElement("div")
    footerEl.innerHTML = `
    <div class="footer__container">
        <div class="footer__wrapper">
            
            <div class="footer__wrapper-logo">
                <img src="./img/logo.png" class="logo">
            </div>
            <div class="footer__wrapper-socialMedia">
                <div class="socialMedia">
                    <img class="socialMedia__pic" src="./img/facebook.png">
                    <a class="socialMedia__path" href="https://www.facebook.com/profile.php?id=1102381937">Facebook</a>
                </div>
                <div class="footer__wrapper-socialMedia">
                    <img class="socialMedia__pic" src="img/linkedin.png">
                    <a class="socialMedia__path" href="https://ar.linkedin.com/in/fernando-anziano-27bb1384/">Linkedin</a>
                </div>
                <div class="footer__wrapper-socialMedia">
                    <img class="socialMedia__pic" src="./img/github.png">
                    <a class="socialMedia__path" href="https://github.com/fanziano">Github</a>
                </div>
            </div>
        </div>
    </div>
    `
    el.appendChild(footerEl)
}