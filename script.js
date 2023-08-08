const toggleBtn = document.getElementById('show');
const daftarDiv = document.getElementById('daftarDiv');
toggleBtn.addEventListener('click', function() {
    //Toggle display none/block untuk memunculkan/div
    if (daftarDiv.style.display  === 'block') {
        daftarDiv.style.display = 'none';
    } else {
        daftarDiv.style.display = 'block';
    }
});