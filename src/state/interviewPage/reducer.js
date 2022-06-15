import { Types } from "./actions";
const defaultState = {
  confirmed: false,
  pending: false,
  rescheduled: false,
  available: true,
  person: false,
  phone: false,
  online: false,
  allType: false,
  allStatus: false,
  weekEnd: false,
};
const reducer = (state = defaultState, action) => {
  let newState = { ...state };
  if (!action.payload) return newState;
  const { filterName, flag } = action.payload;
  switch (action.type) {
    case Types.SET_FILTER:
      newState[filterName] = flag;
      break;
    default:
      break;
  }
  return newState;
};
export default reducer;
