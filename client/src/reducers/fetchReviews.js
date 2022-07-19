const initialState = {

};

const fetchReviews = (state = initialState, action) => {
    // console.log("test" + state);
    switch(action.type){
        case "FETCH_REVIEWS": return action.review;
        default : return state ? state : initialState;
    }
}

export default fetchReviews;