const refs = {
  btnStartRefs: document.querySelector('[data-start]'),
  btnStopRefs: document.querySelector('[data-stop]'),
  bodyRef: document.body,
};

refs.btnStartRefs.addEventListener('click', onChangeColorClick);
refs.btnStopRefs.addEventListener('click', onStopChangeColorClick);

let timerId = null;

function onChangeColorClick() {
  timerId = setInterval(
    () => {
      refs.bodyRef.style.backgroundColor = getRandomHexColor();
    },
    1000,
    refs.btnStartRefs.setAttribute('disabled', true)
  );
}

function onStopChangeColorClick() {
  clearInterval(timerId);
  refs.btnStartRefs.removeAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
