const progress = document.getElementById( 'progress' );
const form = document.getElementById('form');
const inputFile = document.getElementById('file');

form.addEventListener('submit' ,(e)=> {
    if(inputFile.value.trim() !== '') {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', form.getAttribute('action'));
        xhr.setRequestHeader('Content-type', 'multipart/form-data');
        xhr.upload.addEventListener('progress', (e) => {
            progress.value = (e.loaded / e.total).toFixed(2);
        });
        xhr.send(new FormData(form));
    }
    e.preventDefault();
});
