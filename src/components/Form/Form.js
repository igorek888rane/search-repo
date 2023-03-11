import createElement from "../../utils/createElement";
import Input from "./Input";
import {githubApi} from "../../api/githubApi";

class Form {
    constructor(name, inputName, type, placeholder) {
        this.name = name
        this.inputName = inputName
        this.type = type
        this.placeholder = placeholder
    }

    _render(name, inputName, type, placeholder) {
        const input = new Input(inputName, type, placeholder)
        return createElement(`
                    <form class='form'  name = ${name}>
                        ${input.elem.outerHTML}
                        <button class="form__btn" type="submit">search</button>
                    </form>
        `)
    }

    get elem() {
        return this._render(this.name, this.inputName, this.type, this.placeholder)
    }

    async handleSubmit(e) {
        e.preventDefault()
        const search = e.target[this.inputName]
        const searchValue = e.target[this.inputName].value
        if (searchValue) {
            e.target[this.inputName].value = ''
            const items = await githubApi(searchValue)
            console.log(items);
        } else {
            this.setError(search, 'block', 'Enter repository name')
        }
    }

    handleKeyDown(e) {
        if (e.code !== 'Enter') {
            this.setError(e.target, 'none', '')
        }
    }

    handleBlur(e) {
        if (!e.target.value) {
            this.setError(e.target, 'block', 'Enter repository name')
        }
    }

    setError(el, display, text) {
        el.nextElementSibling.style.display = display
        el.nextElementSibling.innerHTML = text
    }

    addEventListeners() {
        const form = document.querySelector('form')
        form.addEventListener('submit', e => this.handleSubmit(e))
        form.addEventListener('keydown', e => this.handleKeyDown(e))
        form.addEventListener('focusout', e => this.handleBlur(e))
    }
}


export default Form