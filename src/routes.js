import React from 'react';
import { Switch, Router, Route } from "react-router-dom";
import history from "./history";
import HomeContainer from "./containers/HomeContainer";
import AboutContainer from "./containers/AboutContainer";
import MediaContainer from "./containers/MediaContainer";
import ContactContainer from "./containers/ContactContainer";

export default (props) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={HomeContainer} exact />
                <Route path="/about" component={AboutContainer} exact />
                <Route path="/media" component={MediaContainer} exact />
                <Route path="/contact" component={ContactContainer} exact />
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