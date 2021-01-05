// import authService from '../../services/authService'

export function login(userCred) {
    return async dispatch => {
        try {
            console.log(userCred);
        //   const items = await itemService.getItems()
        //   dispatch({ type: 'GET_ITEMS', items });
        }
        catch (err) {
          console.log('err:', err);
        }
      }
  }

  export function sighUp(userCred) {
    return async dispatch => {
        try {
            console.log(userCred);
        //   const items = await itemService.getItems()
        //   dispatch({ type: 'GET_ITEMS', items });
        }
        catch (err) {
          console.log('err:', err);
        }
      }
  }