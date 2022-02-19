function formElement(el) {
    const contactEl = document.createElement("div")
    contactEl.innerHTML = `
    <form class="contact__container">
        <div class="contact__form">
            <label class="contact__label" for="name">Nombre</label>
            <input class="contact__input" type="text" id="name" name="name">
        </div>
        <div class="contact__form">
            <label class="contact__label" for="email">Email</label>
            <input class="contact__input" type="text" id="email" name="email">
        </div>
        <div class="contanct__form">
            <label class="contact__label" for="mensaje">Mensaje</label>
            <textarea class="contact__input" id="mensaje" name="mensaje" cols="30" rows="10"></textarea>
        </div>
        <div>
            <button class="contact__button">Enviar</button>
        </div>
    </form>
    `
    el.appendChild(contactEl)
}

function submitData() {
    const contact = document.querySelector(".contactForm")

    contact.addEventListener('submit', (event) => {
        event.preventDefault();
        const contactData = new FormData(event.target);
        const objetctData = Object.fromEntries(contactData.entries());

        var messageData =`
        Nombre: ${objetctData.name} /
        Mail: ${objetctData.email} /
        Mensaje: ${objetctData.mensaje}
        `

        fetch("https://apx-api.vercel.app/api/utils/dwf", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": messageData,
                "to": "fanziano@yahoo.com.ar",
                "message": messageData,
            })
        }).then(() => {
            alert("Message sent")
            document.querySelectorAll(".contact__input").forEach((input) => {
                input.value = ""
            })
        }).catch(() => {
            alert("Message failed")
        })
    })
}

submitData()