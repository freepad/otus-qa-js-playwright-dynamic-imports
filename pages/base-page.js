export class BasePage {
    constructor(page) {
        this.page = page
    }

    get header() {
        return import('./components/header').then(({ Header }) => {
            return new Header(this.page)
        })
    }
}
