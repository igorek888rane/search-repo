import createElement from "../../../utils/createElement";

class Loader {
    _render() {
        return createElement(`
                        <div class='loading'>
                               <div class="loading__item"></div>
                               <p class='loading__text'>Loading...</p>
                        </div>`)
    }

    get elem() {
        return this._render()
    }
}

export default Loader