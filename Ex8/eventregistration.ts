class EventRegistrationForm {
  constructor() {

    const form = document.getElementById('registrationForm') as HTMLFormElement;
    form.addEventListener('submit', this.validateForm);
  }

  private validateForm(event: Event) {
    event.preventDefault();

    const name = (document.getElementById('EName') as HTMLInputElement).value;
    const email = (document.getElementById('Email') as HTMLInputElement).value;
    const age = (document.getElementById('Age') as HTMLInputElement).value;
    const gender = document.querySelector('input[name="Gender"]:checked');
    const location = (document.getElementById('Location') as HTMLInputElement).value;
    const eventType = (document.getElementById('EventType') as HTMLSelectElement).value;

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
  }

  private displayError(message: string) {
    const errorContainer = document.createElement('div');
    errorContainer.className = 'alert alert-danger mt-3';
    errorContainer.textContent = message;
    const form = document.getElementById('registrationForm') as HTMLFormElement;
    form.appendChild(errorContainer);
  }
}


const eventRegistrationForm = new EventRegistrationForm();
