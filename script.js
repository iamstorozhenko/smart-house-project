class MainOption {
  constructor() {}
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-light";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Light";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i id="bulb" class="far fa-lightbulb"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.prepend(backgr);
  }
}

const mainOpt = new MainOption();
mainOpt.render();

const getLight = document.getElementById("btn-light");
getLight.addEventListener("click", lightSettings);

function lightSettings(e) {
  console.log(e.target);
  const curtainsSettings = document.createElement("div");
  curtainsSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Lighting";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  curtainsSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(curtainsSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-light");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-light");
    btn.disabled = true;
  }
  clicked();

  const inputOnOff = document.createElement("input");
  inputOnOff.type = "checkbox";
  inputOnOff.id = "input-checker";
  curtainsSettings.append(inputOnOff);

  const getText = document.createElement("p");
  getText.id = "getRandomColorText";
  getText.innerHTML = "Use random light color: ";
  curtainsSettings.append(getText);

  const btnWrapper = document.createElement("div");
  btnWrapper.id = "btn-wrapper";
  curtainsSettings.append(btnWrapper);

  const randomBtn = document.createElement("button");
  randomBtn.id = "btn-random";
  randomBtn.innerHTML = '<i class="fas fa-random"></i>';
  btnWrapper.append(randomBtn);

  const createRandomColor = document.createElement("div");
  createRandomColor.id = "random-color";
  btnWrapper.append(createRandomColor);

  const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  randomBtn.addEventListener("click", () => {
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexColor[getRandomColor()];
    }
    createRandomColor.style.backgroundColor = hex;
  });
  function getRandomColor() {
    return Math.floor(Math.random() * hexColor.length);
  }

  inputOnOff.addEventListener("click", checkOnOff);

  function checkOnOff() {
    if (inputOnOff.checked == true) {
      document.getElementById("btn-random").style.opacity = 1;
      document.getElementById("random-color").style.opacity = 1;
      document.getElementById("getRandomColorText").style.opacity = 1;
    } else if (inputOnOff.checked == false) {
      document.getElementById("getRandomColorText").style.opacity = 0;
      document.getElementById("btn-random").style.opacity = 0;
      document.getElementById("random-color").style.opacity = 0;
    }
  }
  checkOnOff();
}

class Curtains extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-curtains";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Curtains";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-adjust"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const curtainsOpt = new Curtains();
curtainsOpt.render();

const getCurtains = document.getElementById("btn-curtains");
getCurtains.addEventListener("click", curtainsSettings);

function curtainsSettings(e) {
  console.log(e.target);
  const curtainsSettings = document.createElement("div");
  curtainsSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Curtains";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  curtainsSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(curtainsSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-curtains");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-curtains");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffCurtains = document.createElement("input");
  inputOnOffCurtains.type = "checkbox";
  inputOnOffCurtains.id = "input-checker-curtains";
  curtainsSettings.append(inputOnOffCurtains);

  //   const getText = document.createElement("p");
  //   getText.id = "getRandomColorText";
  //   getText.innerHTML = "Get random light color: ";
  //   curtainsSettings.append(getText);

  //   const btnWrapper = document.createElement("div");
  //   btnWrapper.id = "btn-wrapper";
  //   curtainsSettings.append(btnWrapper);

  //   const randomBtn = document.createElement("button");
  //   randomBtn.id = "btn-random";
  //   randomBtn.innerHTML = '<i class="fas fa-random"></i>';
  //   btnWrapper.append(randomBtn);

  //   const createRandomColor = document.createElement("div");
  //   createRandomColor.id = "random-color";
  //   btnWrapper.append(createRandomColor);

  //   const hexColor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  //   randomBtn.addEventListener("click", () => {
  //     let hex = "#";
  //     for (let i = 0; i < 6; i++) {
  //       hex += hexColor[getRandomColor()];
  //     }
  //     createRandomColor.style.backgroundColor = hex;
  //   });
  //   function getRandomColor() {
  //     return Math.floor(Math.random() * hexColor.length);
  //   }

  //   inputOnOffCurtains.addEventListener("click", checkOnOff);

  //   function checkOnOff() {
  //     if (inputOnOffCurtains.checked == true) {
  //       document.getElementById("btn-random").disabled = false;
  //       document.getElementById("btn-random").style.opacity = 1;
  //       document.getElementById("random-color").style.opacity = 1;
  //     } else if (inputOnOffCurtains.checked == false) {
  //       document.getElementById("btn-random").disabled = true;
  //       document.getElementById("btn-random").style.opacity = 0.3;
  //       document.getElementById("random-color").style.opacity = 0.3;
  //     }
  //   }
  //   checkOnOff();
}

class Garage extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-garage";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Garage";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-warehouse"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const garage = new Garage();
garage.render();

const getGarage = document.getElementById("btn-garage");
getGarage.addEventListener("click", garageSettings);

function garageSettings(e) {
  console.log(e.target);
  const garageSettings = document.createElement("div");
  garageSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Garage";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  garageSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(garageSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-garage");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-garage");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffGarage = document.createElement("input");
  inputOnOffGarage.type = "checkbox";
  inputOnOffGarage.id = "input-checker-garage";
  garageSettings.append(inputOnOffGarage);

  const getExtraLight = document.createElement("p");
  getExtraLight.id = "extra-light-text";
  getExtraLight.innerHTML = "Add extra light";
  garageSettings.append(getExtraLight);

  const extraGarageLight = document.createElement("input");
  extraGarageLight.type = "checkbox";
  extraGarageLight.id = "extra-garage-light";
  garageSettings.append(extraGarageLight);
}

class Temperature extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-temperature";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Temperature";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-temperature-high"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const temperature = new Temperature();
temperature.render();

const getTemperature = document.getElementById("btn-temperature");
getTemperature.addEventListener("click", temperatureSettings);

function temperatureSettings(e) {
  console.log(e.target);
  const temperatureSettings = document.createElement("div");
  temperatureSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Temperature";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  temperatureSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(temperatureSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-temperature");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-temperature");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffTemperature = document.createElement("input");
  inputOnOffTemperature.type = "checkbox";
  inputOnOffTemperature.id = "input-checker-temperature";
  temperatureSettings.append(inputOnOffTemperature);

  const rangeBtnWrapper = document.createElement("div");
  rangeBtnWrapper.id = "range-wrapper";
  const rangeBtn = document.createElement("input");
  rangeBtn.id = "range-btn";
  rangeBtn.type = "range";
  rangeBtn.min = "10";
  rangeBtn.max = "35";
  rangeBtn.step = "1";
  rangeBtn.value = "24";
  const textRange = document.createElement("span");
  textRange.id = "result";
  textRange.innerText = rangeBtn.value;
  rangeBtn.addEventListener("change", () => {
    textRange.innerText = rangeBtn.value;
  });
  temperatureSettings.append(rangeBtnWrapper);
  rangeBtnWrapper.append(textRange);
  rangeBtnWrapper.append(rangeBtn);

  inputOnOffTemperature.addEventListener("click", checkInput);

  function checkInput() {
    if (inputOnOffTemperature.checked == true) {
      rangeBtnWrapper.style.opacity = 1;
    } else if (inputOnOffTemperature.checked == false) {
      rangeBtnWrapper.style.opacity = 0;
    }
  }
  checkInput();
}

class Tv extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-tv";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "TV";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-tv"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const tv = new Tv();
tv.render();

const getTV = document.getElementById("btn-tv");
getTV.addEventListener("click", tvSettings);

function tvSettings(e) {
  console.log(e.target);
  const tvSettings = document.createElement("div");
  tvSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "TV";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  tvSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(tvSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-tv");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-tv");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffTV = document.createElement("input");
  inputOnOffTV.type = "checkbox";
  inputOnOffTV.id = "input-checker-tv";
  tvSettings.append(inputOnOffTV);

  const chanellAllWrapper = document.createElement("div");
  chanellAllWrapper.id = "channel-all-wrapper";
  tvSettings.append(chanellAllWrapper);

  const tvOption = document.createElement("p");
  tvOption.id = "tv-option";
  tvOption.innerText = "Choose chanel: ";
  chanellAllWrapper.append(tvOption);

  const chanelValue = document.createElement("span");
  chanelValue.id = "chanel-value";
  chanelValue.innerHTML = 0;
  chanellAllWrapper.append(chanelValue);

  const chanelWrapper = document.createElement("div");
  chanelWrapper.id = "chanel-wrapper";
  chanellAllWrapper.append(chanelWrapper);

  const btnBack = document.createElement("button");
  btnBack.id = "btn-back";
  btnBack.classList.add("btn-back");
  btnBack.innerText = "-";
  chanelWrapper.append(btnBack);

  const btnForward = document.createElement("button");
  btnForward.classList.add("btn-forward");
  btnForward.id = "btn-forward";
  btnForward.innerText = "+";
  chanelWrapper.append(btnForward);

  btnForward.addEventListener("click", increment);

  function increment() {
    let elem = document.getElementById("chanel-value");
    let value = elem.innerHTML;
    value++;
    console.log(value);
    document.getElementById("chanel-value").innerHTML = value;
  }
  increment();

  btnBack.addEventListener("click", decrement);
  function decrement() {
    let elem = document.getElementById("chanel-value");
    let value = elem.innerHTML;
    value--;
    document.getElementById("chanel-value").innerHTML = value;
  }

  inputOnOffTV.addEventListener("click", checkInputTv);

  function checkInputTv() {
    if (inputOnOffTV.checked == true) {
      chanellAllWrapper.style.opacity = 1;
    } else if (inputOnOffTV.checked == false) {
      chanellAllWrapper.style.opacity = 0;
    }
  }
  checkInputTv();
}

class Music extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-music";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Music";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-music"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const music = new Music();
music.render();

const getMusic = document.getElementById("btn-music");
getMusic.addEventListener("click", musicSettings);

function musicSettings(e) {
  console.log(e.target);
  const musicSettings = document.createElement("div");
  musicSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Music";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  musicSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(musicSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-music");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-music");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffMusic = document.createElement("input");
  inputOnOffMusic.type = "checkbox";
  inputOnOffMusic.id = "input-checker-music";
  musicSettings.append(inputOnOffMusic);

  const audioPlayerWrapper = document.createElement("div");
  audioPlayerWrapper.id = "audio-player-wrapper";

  const player = document.createElement("audio");
  player.controls = true;
  player.id = "player";
  const src = document.createElement("source");
  src.src = "./beatles.mp3";
  player.append(src);
  audioPlayerWrapper.append(player);
  musicSettings.append(audioPlayerWrapper);

  inputOnOffMusic.addEventListener("click", checkInputMusic);
  function checkInputMusic() {
    if (inputOnOffMusic.checked == true) {
      player.style.opacity = 1;
    } else if (inputOnOffMusic.checked == false) {
      player.style.opacity = 0;
    }
  }
  checkInputMusic();
}

class Kitchen extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("button");
    backgr.id = "btn-kitchen";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Kichen";
    backgr.append(text);
    const icon = document.createElement("p");
    icon.innerHTML = '<i class="fas fa-utensils"></i>';
    backgr.append(icon);
    const getContainer = document.getElementById("container");
    getContainer.append(backgr);
  }
}
const kitchen = new Kitchen();
kitchen.render();

const getKitchen = document.getElementById("btn-kitchen");
getKitchen.addEventListener("click", kitchenSettings);

function kitchenSettings(e) {
  console.log(e.target);
  const kitchenSettings = document.createElement("div");
  kitchenSettings.id = "choose-light-color";
  const text = document.createElement("p");
  text.innerHTML = "Kitchen";
  const crossExit = document.createElement("div");
  crossExit.classList.add("cross");
  crossExit.innerHTML = '<i class="fas fa-times"></i>';
  text.append(crossExit);
  kitchenSettings.prepend(text);
  const getBackground = document.getElementById("space");
  getBackground.prepend(kitchenSettings);

  const deleteBtn = document.getElementsByClassName("cross")[0];
  deleteBtn.addEventListener("click", deleteCross);

  function deleteCross(e) {
    const item = e.target;
    if (item.classList[0] === "cross") {
      const crossDelete = item.parentElement.parentElement;
      crossDelete.remove();
      const btn = document.getElementById("btn-kitchen");
      btn.disabled = false;
    }
  }

  function clicked() {
    const btn = document.getElementById("btn-kitchen");
    btn.disabled = true;
  }
  clicked();

  const inputOnOffKitchen = document.createElement("input");
  inputOnOffKitchen.type = "checkbox";
  inputOnOffKitchen.id = "input-checker-kitchen";
  kitchenSettings.append(inputOnOffKitchen);

  const boilKettle = document.createElement("input");
  boilKettle.type = "checkbox";
  boilKettle.id = "boil-kettle";
  kitchenSettings.append(boilKettle);
}
