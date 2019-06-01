export const cartItems = (state = [], action)=>{
    switch(action.type)
    {
        case 'ADD':
            return [...state, action.payload]
        case 'DELETE':
            return state.filter(cartItem=>cartItem.id!=action.payload.id)
    }
    return state
}