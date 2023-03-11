import createElement from "../../utils/createElement";

class ListEl {
    constructor(item) {
        this.item = item
    }

    _render(item) {
        return createElement(`
            <div class='list__item'>
                 <p class="list__name"> Name:<a class='list__info' target='_blank'  href=${item.svn_url}>${item.name}</a></p>
                 <p class="list__description">Description: <span class='list__info' >${item.description ? item.description : 'Not found'}</span></p>
                 <p class="list__clone_url">Visibility: <span class='list__info' >${item.visibility}</span></p>
            </div>
        `)
    }

    get elem() {
        return this._render(this.item)
    }

}

export default ListEl