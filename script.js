document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (this.checkValidity()) {
        showThankYouModal();
        this.reset();
    }
});

// Formateo automático para el número de tarjeta
document.getElementById('card-number').addEventListener('input', function (e) {
    this.value = this.value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim().slice(0, 19);
});

// Formateo automático para la fecha de expiración
document.getElementById('expiry-date').addEventListener('input', function (e) {
    this.value = this.value.replace(/\D/g, '').replace(/^(\d{2})/, '$1/').slice(0, 5);
});

function showThankYouModal() {
    const modal = document.getElementById('thank-you-modal');
    modal.classList.add('show');
}

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('thank-you-modal');
    modal.classList.remove('show');
});