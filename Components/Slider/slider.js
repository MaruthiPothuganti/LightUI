const slider = document.querySelector('#rangeSlider');
const output = document.querySelector('#value');
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
}
