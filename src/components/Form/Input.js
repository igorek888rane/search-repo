import createElement from "../../utils/createElement";

class Input {
    constructor(name) {
        this.name = name
    }

    _render(name) {
        return createElement(`
                <div class="form__input">
                    <input name = ${name}>
                    <div class="form__error"></div>
                </div>
`)
    }

    get elem() {
        return this._render(this.name)
    }
}


export default Input