const Types = {
  SET_FILTER: "interviewPage/setFilter",
};
const setFilter = ({ filterName, flag }) => ({
  type: Types.SET_FILTER,
  payload: { filterName, flag },
});
export { setFilter, Types };
