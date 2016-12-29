var count = 0;
document.getElementById('text').innerText = count;

function animateTada(ele) {
	var e = ele.target;
	e.classList.add("animated");
    e.classList.add("tada");
    document.getElementById('text').innerText = ++count;

    var cart = document.getElementById('cartIcon');
    cart.classList.add("animated");
    cart.classList.add("tada");

        window.setTimeout(function() {
        e.classList.remove("animated");
        e.classList.remove("tada");
        cart.classList.remove("animated");
        cart.classList.remove("tada");
    }, 300);
}

var elesZoom = document.getElementsByClassName('zoom');
for(var i=0;i<elesZoom.length;i++) {
	elesZoom[i].addEventListener('click', animateTada);
}