//import { BehaviorSubject } from 'rxjs';
//const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export const authservice = {
    login,
    signup,
    logout,
    //currentUser: currentUserSubject.asObservable(),
    //get currentUserValue () { return currentUserSubject.value }
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
            //localStorage.setItem('currentUser',JSON.stringify(text))
            return text && JSON.parse(text);})
    }).catch(err => {
            console.log(err);
            return err.json()
        }
    );
}

function logout() {

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