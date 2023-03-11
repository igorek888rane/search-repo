import createElement from "../../utils/createElement";

class ListEl {
    constructor(number, item) {
        this.item = item
        this.number = number
    }

    _render(number, item) {
        return createElement(`
            <div class='list__item'>
            ${number + 1}.<a  target='_blank'  href=${item.svn_url}>${item.name}</a>
            </div>
        `)
    }

    get elem() {
        return this._render(this.number, this.item)
    }

}

export default ListEl