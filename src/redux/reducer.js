const BuildsListingsDefaultState = {
  msg: "",
};

export const getBuildsListingReducer = (
  state = BuildsListingsDefaultState,
  action
) => {
  switch (action.type) {
    case "page1":
      return { ...state, msg: "yash" };
  }
};
