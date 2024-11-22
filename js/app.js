// Utility function to get elements
const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

// Navigation toggle
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links');
});

// Footer date
const date = getElement('#date');
const currentYear = new Date().getFullYear();
date.textContent = currentYear;

// Email validation on the contact form
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    const emailInput = getElement('#email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!emailPattern.test(emailInput)) {
      alert('Please enter a valid Gmail address (e.g., example@gmail.com)');
      event.preventDefault(); // Prevent form submission if email is invalid
    }
  });
}
