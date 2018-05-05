class Store {
    constructor() {
        this.setStateCallBackMap = {};

        this.getStateCallBackMap = {};
    }

    setStateOf(componentName, state) {
        if (! componentName in this.setStateCallBackMap)
            return null;
        this.setStateCallBackMap[componentName](state);
    }

    getStateOf(componentName) {
        if (! componentName in this.getStateCallBackMap)
            return null;
        return this.getStateCallBackMap[componentName]();
    }

    register(componentName, componentSetState, componentState) {
        this.setStateCallBackMap[componentName] = componentSetState;
        this.getStateCallBackMap[componentName] = componentState;
    }
}

export default Store;