import './index.html';
import './index.scss';
import Form from "./components/Form/Form";


const form = new Form('search-form', 'search', 'text','Search-repositories ')

document.querySelector('#app').innerHTML = `
          <div class='form__container container'>
                ${form.elem.outerHTML}
           </div>
`


form.addEventListeners()