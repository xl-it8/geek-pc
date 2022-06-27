const initState = {}
export const login = (preState = initState, action) => {
    const { type, data } = action
    switch (type) {
        case 'LOGIN':
            return data;
        default:
            return preState
    }
    
}