const initialState = {
    galleryData: [],
    loading: true
}

const galleryDataReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "getImages":
            return {
                ... state,
                galleryData: action.payload,
                loading: false
            }

        default: 
            return state    
    }
}

export default galleryDataReducer;