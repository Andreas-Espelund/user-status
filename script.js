const buttons = {'1':'fm', '2':'idle', '3':'ayk'}

// Function to clear all active states
function clearActiveStates() {
    document.querySelectorAll('#btn-container button').forEach(button => {
        button.classList.remove('active');
    });
}

// Adding event listeners to the buttons
Object.entries(buttons).forEach(([key, val]) => {
    const button = document.getElementById(val);
    if (button) {
        button.addEventListener('click', function() {
            clearActiveStates();
            this.classList.add('active');
        });
    }
});

// Function to activate button by key
function activateButtonByKey(key) {
    const buttonId = buttons[key];
    if (!buttonId) return;
    clearActiveStates();
    const button = document.getElementById(buttonId);
    if (button)button.classList.add('active');
}

// Add event listener for keydown
document.addEventListener('keydown', function(event) {
    activateButtonByKey(event.key);
});
