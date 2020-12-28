export const authservice = {
    login,
    signup,
    logout,
};

function login(cred) {
    return fetch("http://localhost:4000/user/login", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
    }).then(res => {
        res.text().then(text => {
            localStorage.setItem('currentUser', JSON.parse(text).token);
        });
        return res;
    }).catch(err => {
            return err.json()
        }
    )
        ;
}

function logout() {
    localStorage.setItem('currentUser', null);
    this.props.history.push('/Components/Login');
}

function signup(cred) {
    return fetch("http://localhost:4000/user/signup", {
        headers: {
            "Content-Type": "application/json"
        },
        method: 'post',
        body: JSON.stringify(cred),
    }).then(res => {
        res.text().then(text => {
            localStorage.setItem('currentUser', JSON.parse(text).token);
        });
        return res
    }).catch(err => {
            return err.json();
        }
    )
        ;
}