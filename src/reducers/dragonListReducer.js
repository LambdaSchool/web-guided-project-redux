const initialState = {
    newMember: '',
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
    ]
};

export const dragonListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEMBER':
            return { ...state }
        default:
            return state;
    }
}