let count = 0;

let increaseCount = () => {
    count++
    displayCount();
    checkCountValue();
}

let displayCount = () => {
    document.getElementById('countDisplay').innerHTML=count;
}

let checkCountValue = () => {
    if (count === 10) {
        alert('you gained 10 followers!');
    } else if (count === 20) {
        alert('you gained 20 followers!');
    }
}

