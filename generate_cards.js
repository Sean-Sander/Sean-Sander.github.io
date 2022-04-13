const cards = require("./cards.json")

for (let card of cards['cards']) {
    console.log(card);

    var thumbnail = "";

    if (card.img.length > 0) { 
        thumbnail = `<img src="${card.img}">`;
    } else {
        thumbnail = `<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>`;
    }

    var buttonTwo = "";

    if (card.buttonTwoName.length > 0) {
        buttonTwo = `<a href="${card.buttonTwoURL}" target="#" class="btn btn-sm btn-outline-secondary">${card.buttonTwoeName}</a>`;
    } else {
        buttonTwo = "";
    }

    const card_html = `
<div class="col">
          <div class="card shadow-sm">
            ${thumbnail}

            <div class="card-body">
              <p class="card-text">${card.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <a href="${card.buttonOneURL}" target="#" class="btn btn-sm btn-outline-secondary">${card.buttonOneName}</a>
                  ${buttonTwo}
                </div>
                <small class="text-muted">${card.time}</small>
              </div>
            </div>
          </div>
        </div>
`;
    if (typeof document !== "undefined") {
        document.getElementById("cards").innerHTML += card_html;
    }
}