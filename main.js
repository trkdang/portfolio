let uni = document.getElementById('university')
let showImg = document.getElementById('khai')

let open = function() {
    showImg.style.display = 'block';

}
let close = function() {
    showImg.style.display = 'none';
}

uni.addEventListener('click', open);


let college = document.getElementById('college')
let showImgCollege = document.getElementById('lasalle')

let openCol = function() {
    showImgCollege.style.display = 'block';
}
let closeCol = function() {
    showImgCollege.style.display = 'none';
}
college.addEventListener('click', openCol);

