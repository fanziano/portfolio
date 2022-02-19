function addIntro(params = {}) {
    const myServices = document.querySelector(".heading")
    myServices.textContent = params.heading
}

function addServices(params = {}) {
    const serviceTemplate = document.querySelector("#iDo__template")
    const serviceContent = document.querySelector(".iDo__content")

    serviceTemplate.content.querySelector(".iDo__template-title").textContent = params.title
    serviceTemplate.content.querySelector(".iDo__template-text").textContent = params.text
    serviceTemplate.content.querySelector(".iDo__template-pic").src = params.picture

    var clone = document.importNode(serviceTemplate.content, true)
    serviceContent.appendChild(clone)
}

function getIntro() {
    return fetch('https://cdn.contentful.com/spaces/tdf0y7siwz2k/environments/master/entries?access_token=KUgRDoZ3JG7-YI91XqBipE0odsEdDUdaQenpWStno4Y&content_type=myservices')
        .then(response => { return response.json() })
        .then((data) => {
            const introCollection = data.items.map((item) => {
                const picture = getPicture(item.fields.picture.sys.id, data);
                return {
                    heading: item.fields.heading,
                    title: item.fields.title,
                    text: item.fields.text,
                    picture: picture.fields.file.url
                }
            })
            return introCollection
        })

}


function getPicture(id, data) {
    const idPicture = data.includes.Asset.find((asset) => {
        return asset.sys.id == id;
    });
    return idPicture;
}


function main() {
    getIntro().then((data) => {
        for (const d of data) {
            addIntro(d);
        }
    })
    getIntro().then((data) => {
        for (const d of data) {
            addServices(d);
        }
    })

    headerElement(document.querySelector(".header"))
    footerElement(document.querySelector(".footer"))
    hamMenu()
}

main()