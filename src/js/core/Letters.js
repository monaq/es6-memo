class Letters {
    constructor() {
        this._items = [];
        this._subscription = null;
    }

    letterFactory(data) {
        return {
            id: this.getItems().length + 1,
            title: data.title,
            category: Number(data.category),
            created: new Date()
        }
    }

    getItems() {
        return this._items;
    }

    addLetter(item) {
        this._items.push(item);
        this._subscription();
    }

    _subscribe (fn) {
        this._subscription = fn;
    }

}

export default Letters