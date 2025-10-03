(function () {

    // Бургер //

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }

    // Корзина //
    document.addEventListener('DOMContentLoaded', function () {
        
        const addToCartBtns = document.querySelectorAll('.add-to-cart');
        const cartCounter = document.getElementById('cartCounter');

        let cartItems = localStorage.getItem('cartItems') ? parseInt(localStorage.getItem('cartItems')) : 0;
        if (cartCounter) cartCounter.textContent = cartItems;

        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                const card = this.closest('.product-card');
                const quantityInput = card ? card.querySelector('.quantity-value') : null;
                const quantity = quantityInput ? parseInt(quantityInput.value) || 1 : 1;

                cartItems += quantity;
                if (cartCounter) cartCounter.textContent = cartItems;

                localStorage.setItem('cartItems', cartItems);

                this.textContent = 'Добавлено!:)';
                setTimeout(() => {
                    this.textContent = 'В корзину';
                }, 1000);

                console.log(`Добавлено ${quantity} товар(ов). Всего: ${cartItems}`);
            });
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        const minusBtns = document.querySelectorAll('.minus');
        const plusBtns = document.querySelectorAll('.plus');
        const quantityInputs = document.querySelectorAll('.quantity-value');

        minusBtns.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                let value = parseInt(quantityInputs[index].value);
                if (value > 1) {
                    quantityInputs[index].value = value - 1;
                }
            });
        });

        plusBtns.forEach((btn, index) => {
            btn.addEventListener('click', function () {
                let value = parseInt(quantityInputs[index].value);
                quantityInputs[index].value = value + 1;
            });
        });
    });

    // FAQ //

    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentNode;
            item.classList.toggle('active');

            document.querySelectorAll('.faq-item').forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Модалка //

    document.getElementById('openModalBtn').addEventListener('click', function () {
        document.getElementById('reviewModal').style.display = 'block';
    });

    document.querySelector('.close').addEventListener('click', function () {
        document.getElementById('reviewModal').style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target == document.getElementById('reviewModal')) {
            document.getElementById('reviewModal').style.display = 'none';
        }
    });

    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');

    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = this.getAttribute('data-rating');
            ratingValue.value = rating;

            stars.forEach((s, index) => {
                if (index < rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
    });

    document.getElementById('reviewForm').addEventListener('submit', function (e) {
        e.preventDefault();

        alert('Отзыв отправлен!');

        document.getElementById('reviewModal').style.display = 'none';

        this.reset();
        stars.forEach(star => star.classList.remove('active'));
        ratingValue.value = '0';
    });

    document.getElementById('photo').addEventListener('change', function (e) {
        const fileUpload = document.getElementById('fileUpload');
        if (this.files.length > 0) {
            fileUpload.innerHTML = `<p>Выбран файл: ${this.files[0].name}</p>`;
        }
    });

    const fileUpload = document.getElementById('fileUpload');
    const fileInput = document.getElementById('photo');

    fileUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = '#666';
    });

    fileUpload.addEventListener('dragleave', () => {
        fileUpload.style.borderColor = '#ddd';
    });

    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = '#ddd';

        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            fileUpload.innerHTML = `<p>Выбран файл: ${e.dataTransfer.files[0].name}</p>`;
        }
    });
}
)();




