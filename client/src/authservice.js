export const authservice = {
    login,
    signup,
    logout,
};

function login(cred) {
    fetch("http://localhost:4000/user/login", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
    }).then(res => {
        console.log(res);
        return res.text().then(text => {
            localStorage.setItem('currentUser', JSON.parse(text).token);
            return text && JSON.parse(text);
        })
    }).catch(err => {
            console.log(err);
            return err.json()
        }
    );
}

function logout() {
    localStorage.setItem('currentUser', null);
    this.props.history.push('/Components/Login');
}

function signup(cred){
    fetch("http://localhost:4000/user/signup", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
    }).then(res => {
        console.log(res);
        return res.json()
    }).catch(err =>
        console.log(err)
    );

}