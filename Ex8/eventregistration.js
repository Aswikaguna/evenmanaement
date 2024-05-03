var EventRegistrationForm = /** @class */ (function () {
    function EventRegistrationForm() {
        var form = document.getElementById('registrationForm');
        form.addEventListener('submit', this.validateForm);
    }
    EventRegistrationForm.prototype.validateForm = function (event) {
        event.preventDefault();
        var name = document.getElementById('EName').value;
        var email = document.getElementById('Email').value;
        var age = document.getElementById('Age').value;
        var gender = document.querySelector('input[name="Gender"]:checked');
        var location = document.getElementById('Location').value;
        var eventType = document.getElementById('EventType').value;
        if (name.trim() === '' || email.trim() === '' || age.trim() === '' || !gender || location.trim() === '' || eventType.trim() === '') {
            this.displayError('All fields are required');
            return;
        }
        if (!/^[a-zA-Z\s]*$/.test(name)) {
            this.displayError('Invalid name format');
            return;
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            this.displayError('Invalid email format');
            return;
        }
        if (isNaN(parseInt(age)) || parseInt(age) < 18 || parseInt(age) > 99) {
            this.displayError('Invalid age');
            return;
        }
        window.location.href = 'success.html';
    };
    EventRegistrationForm.prototype.displayError = function (message) {
        var errorContainer = document.createElement('div');
        errorContainer.className = 'alert alert-danger mt-3';
        errorContainer.textContent = message;
        var form = document.getElementById('registrationForm');
        form.appendChild(errorContainer);
    };
    return EventRegistrationForm;
}());
var eventRegistrationForm = new EventRegistrationForm();
