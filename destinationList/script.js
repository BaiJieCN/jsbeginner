
var detailsForm = document.querySelector('#destination_details_form');
console.log('AAA')
detailsForm.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
    console.log('triggered')
    event.preventDefault();
    //extract value from 
    const destName = event.target.elements['name'].value;
    const destLocation = event.target.elements['location'].value;
    const destPhoto = event.target.elements['photo'].value;
    const destDesc = event.target.elements['description'].value;

    //clear out the form fields
    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = '';
    }

    //create the card
    function createDestinationCard(name, location, photoURL, desc) {
        var card = document.createElement('div');
        card.className = 'card'

        var img = document.createElement('img');
        img.setAttribute('alt', name);
        var constantPhotoUrl = 'images/signpost.jpg';

        if (photoURL.length == 0){
            img.setAttribute('src', constantPhotoUrl);
        } else {
            img.setAttribute('src', photoURL)
        }

        card.appendChild(img)

        var cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        var cardTitle = document.createElement('h3');
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle)

        var cardSubtitle = document.createElement('h4');
        cardSubtitle.innerText = location;
        cardBody.appendChild(cardSubtitle);

        if (description.length !== 0) {
            var cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.innerText = desc;
            cardBody.appendChild(cardText)
        }

        var cardDeleteBtn = document.createElement('button');
        cardDeleteBtn.innerText = 'Remove';

        cardDeleteBtn.addEventListener('click', removeDestination);
        cardBody.appendChild(cardDeleteBtn)

        card.appendChild(cardBody)

        return card;
    }

    function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
    }


    //change header
    var wishListContainer = document.getElementById('title');
    console.log("length = ", wishListContainer.children.length)
    if (wishListContainer.children.length == 0) {
        document.querySelector('#title').innerHTML = 'My Wish List';
    }

    //add card
    var destCard = createDestinationCard(destName,destLocation,destPhoto,destDesc);
    console.log('1')
    document.querySelector('#destination_container').appendChild(destCard)
}