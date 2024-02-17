const DarkModeReducer = (state, action) =>{
    switch(action.type){
        case "Toggle":{
            return {
                darkMode: !state.darkMode,
            };
        }
        default:
            return state;
    }
}

export default DarkModeReducer;