const checkInputValidity = (formEl, inputEl) => {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
};

const showInputError = (formEl, inputEl, errorMessage) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errorMessageEl) {
    errorMessageEl.textContent = errorMessage;
  }
};

const hideInputError = (formEl, inputEl) => {
  const errorMessageEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errorMessageEl) {
    errorMessageEl.textContent = "";
  }
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputEl) => {
    return !inputEl.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonEl) => {
  if (hasInvalidInput(inputList)) {
    submitButtonDisabled(buttonEl);
  } else {
    submitButtonEnabled(buttonEl);
  }
};

const setEventListeners = (formEl) => {
  const inputList = Array.from(formEl.querySelectorAll(".modal__input"));
  const buttonEl = formEl.querySelector(".modal__button");

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", function () {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
};

const submitButtonDisabled = (buttonEl) => {
  buttonEl.classList.add("modal__save-button-error");
  buttonEl.disabled = true;
};

const submitButtonEnabled = (buttonEl) => {
  buttonEl.classList.remove("modal__save-button-error");
  buttonEl.disabled = false;
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form, .modal__post-form");
  formList.forEach((formEl) => {
    setEventListeners(formEl);
  });
};

enableValidation();
