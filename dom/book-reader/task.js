const fontsList = document.querySelectorAll('.font-size');
const colorList = document.querySelectorAll('.book__control_color a');
const bgColorList = document.querySelectorAll('.book__control_background a');
const bookContent = document.querySelector('.book__content');

fontsList.forEach((font,idx) => font.addEventListener('click', (event) => {
    event.preventDefault();
    bookContent.classList.remove('book_fs-big','book_fs-small');
    fontsList.forEach(item => item.classList.remove('font-size_active'));
    font.classList.add('font-size_active');
    idx === 0 ? bookContent.classList.add('book_fs-small')
    :idx === 2 ? bookContent.classList.add('book_fs-big') : null;
}));

colorList.forEach((color,idx) => color.addEventListener('click', (event) => {
    event.preventDefault();
    bookContent.classList.remove('book_color-black','book_color-gray','book_color-whitesmoke');

    colorList.forEach(item => item.classList.remove('color_active'));
    color.classList.add('color_active');
    idx === 0 ? bookContent.classList.add('book_color-black')
    :idx === 1 ? bookContent.classList.add('book_color-gray') 
    :idx === 2 ? bookContent.classList.add('book_color-whitesmoke') : null;
}));

bgColorList.forEach((color,idx) => color.addEventListener('click', (event) => {
    event.preventDefault();
    bookContent.classList.remove('bg_color_black','bg_color_gray','bg_color_white');

    bgColorList.forEach(item => item.classList.remove('color_active'));
    color.classList.add('color_active');
    idx === 0 ? bookContent.classList.add('bg_color_black')
    :idx === 1 ? bookContent.classList.add('bg_color_gray') 
    :idx === 2 ? bookContent.classList.add('bg_color_white') : null;
}));
