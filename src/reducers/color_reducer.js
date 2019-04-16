
const INITIAL_STATE = {
    green: {
      count: 0
    },
    blue: {
      count: 0
    },
    red: {
      count: 0
    },
    current: "green"
};

const COLORS = ['red', 'green', 'blue'];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'UPDATE_COLOR': {

          // Generate next pet color
          const nextColor = COLORS[Math.floor(Math.random() * COLORS.length)];



          return Object.assign({}, state, { [nextColor]: { count: ++state[nextColor].count}}, {current: nextColor});
        }
        default:
            return state;
    }
}
