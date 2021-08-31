// class MainComponent {
//   constructor() {}
//   renderBackround() {
//     const backgr = document.createElement("div");
//     backgr.id = "backgr";
//   }
//   renderText() {
//     const text = document.createElement("p");
//     text.id = "text";
//     text.innerHTML = "Light";
//   }
//   renderIcon() {
//     const icon = document.createElement("p");
//     icon.id = "icon";
//     icon.innerHTML = '<i id="bulb" class="far fa-lightbulb"></i>';
//   }

// }

// const lightBtn = new MainComponent();
// lightBtn.renderBackround()

class MainOption {
  constructor() {}
  render() {
    const backgr = document.createElement("div");
    backgr.id = "btns";
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

class Curtains extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("div");
    backgr.id = "btns";
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

class Garage extends MainOption {
  constructor() {
    super();
  }
  render() {
    const backgr = document.createElement("div");
    backgr.id = "btns";
    const text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Curtains";
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
    const backgr = document.createElement("div");
    backgr.id = "btns";
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
    const backgr = document.createElement("div");
    backgr.id = "btns";
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
    const backgr = document.createElement("div");
    backgr.id = "btns";
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
    const backgr = document.createElement("div");
    backgr.id = "kitchen";
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
