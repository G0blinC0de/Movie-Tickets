// Business Logic


// Movie Constructor with Prototype
function Movie(id, name) {
    this.id = id;
    this.name = name;
    this.price = 10; // Base price for a ticket
}

// Prototype for calculating the discounted price
Movie.prototype.calculateDiscountedPrice = function (age) {
    if (age < 12 || age > 65) {
        return this.price * 0.75; // 25% discount
    }
    return this.price;
};

// Creating movie instances
let movies = {
    movie1: new Movie("movie1", "Jurassic Park"),
    movie2: new Movie("movie2", "Tombstone"),
    movie3: new Movie("movie3", "Predator")
};

// Store user's selections
let userSelection = {
    movieId: null,
    time: null,
    age: null
};


// UI Logic


function toggleDisplay(elementId, show) {
    document.getElementById(elementId).style.display = show ? 'block' : 'none';
}

function showAlert(message) {
    alert(message);
}

// Event listener for movie submission
document.getElementById('submitMovieBtn').addEventListener('click', function () {
    let movieSelectElement = document.getElementById('movieSelect');
    let selectedMovieId = movieSelectElement.options[movieSelectElement.selectedIndex].id;
    if (selectedMovieId) {
        userSelection.movieId = selectedMovieId;
        toggleDisplay('timeSelection', true);
    } else {
        showAlert('Please select a movie.');
    }
});

document.getElementById('submitTimeBtn').addEventListener('click', function () {
    let timeSelect = document.getElementById('timeSelect').value;
    if (timeSelect) {
        userSelection.time = timeSelect;
        toggleDisplay('ageInputDiv', true);
    } else {
        showAlert('Please select a time.');
    }
});

document.getElementById('submitAgeBtn').addEventListener('click', function () {
    let age = document.getElementById('ageInput').value;
    if (age) {
        userSelection.age = age;
        let selectedMovie = movies[userSelection.movieId];
        let finalPrice = selectedMovie.calculateDiscountedPrice(parseInt(age));

        toggleDisplay('finalDetails', true);
        document.getElementById('selectionDetails').innerHTML = `Movie: ${selectedMovie.name}<br>Time: ${userSelection.time}<br>Price: $${finalPrice.toFixed(2)}`;
    } else {
        showAlert('Please enter your age.');
    }
});

