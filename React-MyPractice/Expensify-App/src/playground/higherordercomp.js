import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>INFO</h1>
        <p>This is info: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is admin info. Please donot share!</p>}
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>You are not allowd to see this information</p> }
            
        </div>
    )
}
const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin = {false} info= "There are details"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are details" />, document.getElementById('app'))
