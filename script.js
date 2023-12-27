// Function to clear all active states
function clearActiveStates() {
    document.querySelectorAll('#btn-container button').forEach(button => {
        button.classList.remove('active');
    });
}

// Add event listeners to buttons
document.getElementById('fm').addEventListener('click', function() {
    clearActiveStates();
    this.classList.add('active');
    // Additional actions for FM
});

document.getElementById('idle').addEventListener('click', function() {
    clearActiveStates();
    this.classList.add('active');
    // Additional actions for Idle
});

document.getElementById('ayk').addEventListener('click', function() {
    clearActiveStates();
    this.classList.add('active');
    // Additional actions for AYK
});



// Function to activate button by key
function activateButtonByKey(key) {
    const buttons = {
        '1': document.getElementById('fm'),
        '2': document.getElementById('idle'),
        '3': document.getElementById('ayk')
    };

    if (buttons[key]) {
        clearActiveStates();
        buttons[key].classList.add('active');
    }
}

// Add event listener for keydown
document.addEventListener('keydown', function(event) {
    activateButtonByKey(event.key);
});
