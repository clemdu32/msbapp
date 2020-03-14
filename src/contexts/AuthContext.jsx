import * as React from 'react';
const AuthContext = React.createContext({
    state: {},
    logOut: () => {},
    signIn: () => {}
});

export default AuthContext;
