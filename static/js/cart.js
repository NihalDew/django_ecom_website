var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    updateBtns[i].addEventListener('click', function() {
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('productID:', productID, 'Action:', action)

        console.log('USER:', user)
        if (user === 'AnonymousUser') {
            console.log('Not logged in')
        } else {
            console.log('user is logged in,sending data')
        }
    })
}


function updateUserOrder(productID, action) {
    console.log('User is authenticated,sending data...')

    var url = '/upadte_item/'
    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 'productID': productID, 'action': action })
        })
        .then((response)) => {
            return response.json();
        })
.then((data)) => {
console.log('Data:', data)

});
}