const initialState = {
  todo: [{
      title: "Welcome to Dendy App",
      lists: [],
      show: true,
    }],
  loading: false
}

const reducer = (state=initialState, action) => {
  const newState = {...state};
  var i = action.value
  switch (action.type) {
    case "ON_SORT_END":
      newState.todo = i
      break;
    case "ADD_CATEGORY":
      var promptName = prompt("Nama Kategori?");
      if(promptName){
        newState.todo = [
          {
            title: promptName,
            lists: [],
            show: true,
          },
          ...newState.todo
        ]
      }
      break;
    case "EDIT_CATEGORY":
      var result = prompt("Ganti Nama Kategori?", newState.todo[i].title);
      if (result) {
        newState.todo[i].title =  result
      }
      break;
    case "DELETE_CATEGORY":
      newState.todo.splice(i, 1);
      break;
    case "ADD_LIST":
      var promptList = prompt("Tambah Catatan");
      if (promptList) {
        newState.todo[i].lists = [
          {
            list: promptList,
            show: true,
            status: false,
          },
          ...newState.todo[i].lists
        ]
      }
      break;
    case "EDIT_LIST":
      var promptEdit = prompt("Tambah List", newState.todo[i[0]].lists[i[1]].list);
      if (promptEdit) {
        newState.todo[i[1]].lists[i[1]].list = promptEdit
      }
      break;
    case "DELETE_LIST":
      newState.todo[i[0]].lists.splice(i[1], 1);
      break;
    case "TOGGLE_LIST":
      newState.todo[i[1]].lists[i[1]].status = !newState.todo[i[1]].lists[i[1]].status
      break;
    case "TOGGLE_FILTER_CATEGORY":
        newState.todo[i].show = !newState.todo[i].show
      break;
    case "LOADING_PROGRESS":
      newState.loading = i
      break;
    default:
    return newState;
  }
  newState.todo = [...newState.todo]
  return newState;
}

export default reducer;
