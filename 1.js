
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.linki a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Удаляем активный класс со всех ссылок
            links.forEach(link => link.classList.remove('active'));

            // Добавляем активный класс к текущей ссылке
            this.classList.add('active');

            // Предотвращаем переход по ссылке
            event.preventDefault();
        });
    });
});

