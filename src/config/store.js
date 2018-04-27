class Store {
    constructor() {
        this.setStateCallbackMap = {}
    }

    setStateOf(componentName, state) {
        this.setStateCallbackMap[componentName](state)
    }

    setSetStateCallback(componentName, cb) {
        this.setStateCallbackMap[componentName] = cb
    }
}

export default Store;