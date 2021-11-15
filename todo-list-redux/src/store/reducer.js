const defaultState = {
  inputValue: "",
  list: [],
};

const reducer = (state = defaultState, action) => {
  //console.log(state, action);
  if (action.type === "change_input_value") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.inputValue);
    newState.inputValue = "";
    //console.log(newState);
    return newState;
  }
  if (action.type === "delete_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.spliced(action.index, 1);
    return newState;
  }
  return state;
};
export default reducer;
