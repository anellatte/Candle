function calcCartPriceAndDelivery() {
	const cartWrapper = document.querySelector('.cart-wrapper');
	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	const deliveryCost = document.querySelector('.delivery-cost');
	const cartDelivery = document.querySelector('[data-cart-delivery]');

	let priceTotal = 0;

	priceElements.forEach(function (item) {

		const amountEl = item.closest('.cart-item').querySelector('[data-counter]');

		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);
	});


	if (priceTotal > 0) {
		cartDelivery.classList.remove('none');
	} else {
		cartDelivery.classList.add('none');
	}

	if (priceTotal >= 8000) {
		deliveryCost.classList.add('free');
		deliveryCost.innerText = 'free';
		let del = 0;
		totalPriceEl.innerText = priceTotal + del;
	} else {
		deliveryCost.classList.remove('free');
		deliveryCost.innerText = '1000 TG';
		let del = 1000;
		totalPriceEl.innerText = priceTotal + del;
	}

}