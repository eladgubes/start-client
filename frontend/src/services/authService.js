import HttpService from './HttpService';


export default {
    signup,
    login,
    logout,
}


async function signup(inputUser) {
    const userCred = {
        fullName: inputUser.inputName,
        email: inputUser.inputMail,
        password: inputUser.inputPass
    }
    const user = await HttpService.post('auth/signup', userCred)
    return _handleLogin(user)
}



async function login(userCred) {
    const user = await HttpService.post('auth/login', userCred)
    return _handleLogin(user)
}

async function logout() {
    await HttpService.post('auth/logout')
    sessionStorage.clear();
}


function _handleLogin(user) {
    sessionStorage.setItem('user', JSON.stringify(user))
    return user;
}



