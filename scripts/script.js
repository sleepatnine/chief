//burger
function toggleMenu() {
    const body = document.querySelector("body");
    const overlay = document.querySelector(".overlay");
    body.classList.toggle("menu-open");

    if (body.classList.contains("menu-open")) {
      body.classList.add("no-scroll");
      overlay.style.display = "block"
      overlay.classList.add("overlay--active");
    } else {
      body.classList.remove("no-scroll");
      overlay.classList.remove("overlay--active");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 600);
    }
  }

  const overlay = document.querySelector(".overlay");
overlay.addEventListener("click", () => {
  toggleMenu(); 
});
  
  //form
  const form = document.querySelector(".feedback");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch("someurl", { method: "POST" });
  });


  // anchor
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  
  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  
  function validateName() {
    if (nameInput.validity.valueMissing) {
      nameError.textContent = 'Пожалуйста, введите ваше имя';
      nameError.style.display = 'block';
    } else {
      nameError.style.display = 'none';
    }
  }
  
  function validateEmail() {
    if (emailInput.validity.valueMissing) {
      emailError.textContent = 'Пожалуйста, введите вашу почту';
      emailError.style.display = 'block';
    } else if (emailInput.validity.typeMismatch) {
      emailError.textContent = 'Пожалуйста, введите корректный адрес почты';
      emailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
    }
  }
  