import itemService from '../../services/itemService'


export function getItems() {
  return async dispatch => {
    try {
      const items = await itemService.getItems()
      dispatch({ type: 'GET_ITEMS', items });
    }
    catch (err) {
      console.log('err:', err);
    }
  }
}

export function query(search) {
  return async dispatch => {
    try {
      console.log(search);
      // const items = await itemService.getItems()
      // dispatch({ type: 'GET_ITEMS', items });
    }
    catch (err) {
      console.log('err:', err);
    }
  }
}

