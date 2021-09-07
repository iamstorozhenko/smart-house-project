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
  getText.innerHTML = "Get random light color: ";
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
      document.getElementById("btn-random").disabled = false;
      document.getElementById("btn-random").style.opacity = 1;
      document.getElementById("random-color").style.opacity = 1;
    } else if (inputOnOff.checked == false) {
      document.getElementById("btn-random").disabled = true;
      document.getElementById("btn-random").style.opacity = 0.3;
      document.getElementById("random-color").style.opacity = 0.3;
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
