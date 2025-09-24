function userVerification(user, pwd) {
    if (user === 'admin' && pwd ===  '12345') {
        return true;
    } else {
        return false;
    }
}

let username = 'admin';
let password = '1233366664545';

let verification = userVerification(username, password);

if (verification === true) {
    console.log('Usuário logado com sucesso!');
} else {
    console.log('Usuário ou senha inválidos!');
}