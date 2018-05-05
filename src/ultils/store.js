function emptyFunction(){
    return undefined;
}

class Store {
    constructor() {
        this.setStateCallBackMap = {};

        this.getStateCallBackMap = {};
    }

    setStateOf(componentName, state) {
        if (! componentName in this.setStateCallBackMap)
            return emptyFunction();
        this.setStateCallBackMap[componentName](state);
    }

    getStateOf(componentName) {
        if (! componentName in this.getStateCallBackMap)
            return emptyFunction();
        return this.getStateCallBackMap[componentName]();
    }

    register(componentName, componentSetState, componentState) {
        this.setStateCallBackMap[componentName] = componentSetState;
        this.getStateCallBackMap[componentName] = componentState;
    }
}

export default Store;