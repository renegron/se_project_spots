const setEventListeners = (formEl) => {
  const inputList = formEl.querySelectorAll(".modal__input");
  const buttonEl = formEl.querySelector(".modal__submit-button");

  toggleButtonState(inputList, buttonEl);
  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
    enableValidationForForm(formEl);
  });
};

const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    buttonEl.classList.add("modal__submit-button_disabled");
    buttonEl.disabled = true;
  } else {
    buttonEl.classList.remove("modal__submit-button_disabled");
    buttonEl.disabled = false;
  }
};

const showInputError = (formEl, inputEl, errorMessage) => {
  const errorEl = document.querySelector("#" + inputEl.id);
};
