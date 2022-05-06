const userState = {
  login: false,
  me: null,
};

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

const userReducer = (state = userState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: true,
        me: action.data,
      };
    case LOGOUT:
      return {
        ...state,
        login: false,
        me: null,
      };
    default:
      return state;
  }
};
export default userReducer;
