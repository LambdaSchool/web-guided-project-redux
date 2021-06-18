export const ADD_MEMBER = "ADD_MEMBER"

export const addMember = newMemberName => {
    return {
        type: ADD_MEMBER,
        payload: newMemberName
    }
}