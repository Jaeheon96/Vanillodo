import App from "./App.js";
import createComponent from "./createComponent.js";

const $app = document.getElementById("app");
const AppComponent = createComponent(App);

$app.innerHTML = AppComponent;
