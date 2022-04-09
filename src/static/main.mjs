import { h, Component, render } from 'https://unpkg.com/preact?module';
import htm from 'https://unpkg.com/htm?module';

// Initialize htm with Preact
const html = htm.bind(h);

function App (props) {
  return html`<h1>Hello ${props.name}!</h1>`;
}

function BasicButton(props) {
  if (props.varinat == "text" || props.varinat == "contained" || props.varinat == "outlined") {
    return html`<Button variant="${props.variant}"></Button>`;
  } else {
    throw("Not found props.varinat");
  }
}




render(html`<${BasicButton} variant="text" />`, document.body);