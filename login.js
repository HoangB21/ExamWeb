const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
// RegisterForm
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]+$/;
const registerForm = document.querySelector("form.registerForm");
const username = registerForm.querySelector('input[name="username"]');
const email = registerForm.querySelector('input[name="email"]');
const password = registerForm.querySelector('input[name="password"]');
const confirmPassword = registerForm.querySelector(
  'input[name="confirmPassword"]'
);
const errorMesssage = registerForm.querySelector(".erorr_message");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (registerForm.checkVisibility()) {
    validateRegisterForm();
  }
});
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const validateRegisterForm = () => {
  const valuePassWord = password.value;
  errorMesssage.innerHTML = "";
  const valueConfirmPassWord = confirmPassword.value;
  if (!passwordPattern.test(valuePassWord)) {
    errorMesssage.innerHTML =
      "Mật khẩu có ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt";
  }
  if (valuePassWord !== valueConfirmPassWord) {
    errorMesssage.innerHTML = "Mật khẩu nhập lại không khớp";
  }
};
