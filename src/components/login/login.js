const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
// RegisterForm
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
  errorMesssage.innerHTML = "";
  if (registerForm.checkVisibility()) {
    const check = validateRegisterForm();
    console.log(1);
    if (check) {
      registerForm.submit();
    }
  }
});
signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const validateRegisterForm = () => {
  let valuePassWord = password.value;
  let valueConfirmPassWord = confirmPassword.value;
  console.log(valuePassWord, valueConfirmPassWord);
  if (valuePassWord !== valueConfirmPassWord) {
    console.log(1);
    errorMesssage.innerHTML = "Mật khẩu nhập lại không khớp";
    return false;
  }
  if (passwordPattern.test(valuePassWord) === false) {
    console.log(2);
    console.log(passwordPattern.test(valuePassWord));
    errorMesssage.innerHTML =
      "Mật khẩu có ít nhất một chữ hoa, một chữ thường, một chữ số và một ký tự đặc biệt";
    return false;
  }
  console.log(3);
  return true;
};