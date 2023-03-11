import './index.html';
import './index.scss';
import Form from "./components/Form/Form";
import ListRepo from "./components/ListRepo/ListRepo";


const form = new Form('search-form', 'search', 'text', 'Search-repositories ')
const list = new ListRepo()

document.querySelector('#app').innerHTML = `
          <div class='form__container container'>
                ${form.elem.outerHTML}
           </div>
                 ${list.elem.outerHTML}
`


form.addEventListeners()