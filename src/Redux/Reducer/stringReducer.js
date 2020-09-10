const initialState = {
  str: "몰라몰라",
  str2: "뭔데",
};
export const stringReducer1 = (state = initialState, action) => {
  console.log("넘어왔냐????", action); //3-6
  return state;
};

export const stringReducer2 = (state = initialState, action) => {
  console.log("넘어왔냐????", action); //3-6
  return state;
};
