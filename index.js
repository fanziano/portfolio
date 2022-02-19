// welcome (functions) //
function addWelcome (params = {}) {
    const myGreeting = document.querySelector(".welcome__myGreeting");
    myGreeting.textContent = params.greeting;

    const myName = document.querySelector(".welcome__myName");
    myName.textContent = params.name;
}

function getWelcome() {
    return fetch('https://cdn.contentful.com/spaces/tdf0y7siwz2k/environments/master/entries?access_token=KUgRDoZ3JG7-YI91XqBipE0odsEdDUdaQenpWStno4Y&content_type=welcome')
      .then(response => { return response.json() })
      .then((data) => {
        const welcomeCollection = data.items.map((item) => {
          return {
            greeting: item.fields.greeting,
            name: item.fields.name,  
          }
        })
        return welcomeCollection;
      })
  
}

// intro (functions) //

function addIntro (params = {}) {
    const myTitle = document.querySelector(".intro__myTitle");
    myTitle.textContent = params.title;

    const myText = document.querySelector(".intro__myText");
    myText.textContent = params.text;

    const myPic = document.querySelector(".manpic");
    myPic.src = params.picture
}

function getIntro() {
  return fetch('https://cdn.contentful.com/spaces/tdf0y7siwz2k/environments/master/entries?access_token=KUgRDoZ3JG7-YI91XqBipE0odsEdDUdaQenpWStno4Y&content_type=intro')
    .then(response => { return response.json() })
    .then((data) => {
      const introCollection = data.items.map((item) => {
          const picture = getPicture(item.fields.picture.sys.id, data);
          return {
            title: item.fields.title,
            text: item.fields.text,
            picture: picture.fields.file.url  
          }
      })
    return introCollection;
  })
}

function getPicture(id, data) {
    const idPicture = data.includes.Asset.find((asset) => {
        return asset.sys.id == id;
    });
    return idPicture;
}

// services (functions) //
function addServices (params = {}) {
  const myTemplate = document.querySelector("#services__myTemplate");
  const myServices = document.querySelector(".services__myServices-template");

  myTemplate.content.querySelector(".services__myTemplate-title").textContent = params.title;
  myTemplate.content.querySelector(".services__myTemplate-text").textContent = params.text;
  myTemplate.content.querySelector(".services__myTemplate-pic").src = params.picture;

  const clone = document.importNode(myTemplate.content, true);
  myServices.appendChild(clone);    
}

function getServices() {
  return fetch('https://cdn.contentful.com/spaces/tdf0y7siwz2k/environments/master/entries?access_token=KUgRDoZ3JG7-YI91XqBipE0odsEdDUdaQenpWStno4Y&content_type=services')
    .then(response => { return response.json() })
    .then((data) => {
      const serviceCollection = data.items.map((item) => {
          const picture = getPicture(item.fields.picture.sys.id, data);
            return {
              title: item.fields.title,
              text: item.fields.text,
              picture: picture.fields.file.url  
            }
          })
          return serviceCollection;
    })
}


// MAIN (FUNCTION) //
function main () {
  getWelcome().then((data) => {
      for (const d of data) {
          addWelcome(d);
      }
  })

  getIntro().then((data) => {
      for (const d of data) {
          addIntro(d);
      }
  })

  getServices().then((data) => {
      for (const d of data) {
          addServices(d);
      }
  })

  headerElement(document.querySelector(".header"));
  formElement(document.querySelector(".contactForm"));
  footerElement(document.querySelector(".footer"));
  hamMenu();
}

main ();



