import createElement from "../../utils/createElement";
import Input from "./Input";

class Form {
    constructor(name, inputName) {
        this.name = name
        this.inputName = inputName
    }

    _render(name, inputName) {
        const input = new Input(inputName)
        return createElement(`
                    <form class='form'  name = ${name}>
                        ${input.elem.outerHTML}
                        <button class="form__btn" type="submit">search</button>
                    </form>
        `)
    }

    get elem() {
        return this._render(this.name, this.inputName)
    }

    handleSubmit(e) {
        e.preventDefault()
        console.log(e.target[this.inputName].value);
        e.target[this.inputName].value = ''
    }

    addEventListeners() {
        document.querySelector('form').addEventListener('submit', e => this.handleSubmit(e))
    }
}


export default Form