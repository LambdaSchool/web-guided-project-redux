export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const UPDATE_TITLE = "UPDATE_TITLE";

export function toggleEditing() {
    console.log("toggle editing action being dispatched");
    return { type: TOGGLE_EDITING };
}

export const updateTitle = newTitle => {
    return { type: UPDATE_TITLE, payload: newTitle };
};