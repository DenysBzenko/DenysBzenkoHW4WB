document.querySelector('.search-input').addEventListener('focus', function() {
    document.querySelector('.suggestions').style.display = 'block';
});

document.querySelector('.search-input').addEventListener('blur', function() {
    setTimeout(() => {
        document.querySelector('.suggestions').style.display = 'none';
    }, 200);
});
