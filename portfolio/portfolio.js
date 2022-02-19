function addIntro(params = {}) {
    const myPortfolio = document.querySelector(".heading")
    myPortfolio.textContent = params.heading
} 

function addPortfolio(params = {}) {
    const portfolioTemplate = document.querySelector("#iHave__template")
    const portfolioContent = document.querySelector(".iHave__content")

    portfolioTemplate.content.querySelector(".iHave__template-title").textContent = params.title
    portfolioTemplate.content.querySelector(".iHave__template-text").textContent = params.text
    portfolioTemplate.content.querySelector(".iHave__template-link").href = params.url
    portfolioTemplate.content.querySelector(".iHave__template-pic").src = params.picture

    var clone = document.importNode(portfolioTemplate.content, true)
    portfolioContent.appendChild(clone)
}


function getIntro() {
    return fetch('https://cdn.contentful.com/spaces/tdf0y7siwz2k/environments/master/entries?access_token=KUgRDoZ3JG7-YI91XqBipE0odsEdDUdaQenpWStno4Y&content_type=myportfolio')
        .then(response => { return response.json() })
        .then((data) => {
            const introCollection = data.items.map((item) => {
                const picture = getPicture(item.fields.picture.sys.id, data);
                return {
                    heading: item.fields.heading,
                    title: item.fields.title,
                    text: item.fields.text,
                    url: item.fields.url,
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
            addPortfolio(d);
        }
    })

    headerElement(document.querySelector(".header"))
    footerElement(document.querySelector(".footer"))
    hamMenu()
}

main()