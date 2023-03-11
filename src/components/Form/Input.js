import createElement from "../../utils/createElement";

class Input {
    constructor(name, type,placeholder) {
        this.name = name
        this.type = type
        this.placeholder = placeholder
    }

    _render(name, type,placeholder) {
        return createElement(`
                <div class="form__input">
                    <input name = ${name} type = ${type} placeholder=${placeholder}>
                    <div class="form__error"></div>
                </div>
`)
    }

    get elem() {
        return this._render(this.name, this.type,this.placeholder)
    }
}


export default Input