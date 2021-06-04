export const ACTION = {
  ADD: 'ADD',
  REMOVE: 'REMOVE',
  CLEAR: 'CLEAR',
  PAY: 'PAY',
  SETUSER: 'SETUSER',
}
function genData() {
  const order = new Map();
  order.set('Ganyu', 2);
  order.set('Keqing', 1);
  order.set('Rosaria', 4);
  order.set('Klee', 3);
  return order;
}
const defaultState = {
  order: genData(),
  money: null,
  orderCount: 10,
  userId: null,
  userName: 'Log In'
}

function reducer(state = defaultState, action) {
  const newState = {...state};
  switch(action.type) {
    case ACTION.ADD: 
      const newOrder = new Map(newState.order);
      const prev = newOrder.has(action.payload) ? newOrder.get(action.payload) : 0;
      newOrder.set(action.payload, prev + 1);
      newState.orderCount = newState.orderCount + 1;
      newState.order = newOrder;
      return newState;
    case ACTION.REMOVE:
      const newOrderR = new Map(newState.order);
      const prevR = newOrderR.get(action.payload);
      if (prevR === 1) newOrderR.delete(action.payload);
      else newOrderR.set(action.payload, prevR - 1);
      newState.orderCount = newState.orderCount - 1;
      newState.order = newOrderR;
      return newState;
    case ACTION.CLEAR:
      const newOrderClear = new Map();
      newState.orderCount = 0;
      newState.order = newOrderClear;
      return newState;
    case ACTION.PAY:
      newState.money = newState.money - action.payload;
      return newState;
    case ACTION.SETUSER:
      newState.userId = action.payload.userId;
      newState.userName = action.payload.userName;
      newState.money = action.payload.money;
      return newState;
    default:
      return newState;
  }
}
export default reducer;