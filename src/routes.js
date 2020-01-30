import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import NavContainer from "./containers/NavContainer";
import HomeContainer from "./containers/HomeContainer";

export default (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={NavContainer} />
                <Route path="/" component={HomeContainer} exact />
            </Switch>
        </Router>
    );
};

// const withValidToken = (WrappedComponent) => {
//     return class extends React.Component {
//       async componentDidMount() {
//         const response = await getTokenDetails();
//         if (!response.ok) {
//           localStorage.removeItem("x-access-token");
//           localStorage.removeItem("isPremiumUser");
//           localStorage.removeItem("isFirstUserLogin");
//           this.props.history && this.props.history.push("/signin");
//         }
//       }
//       render() {
//         return <WrappedComponent {...this.props} />;
//       }
//     };
//   };