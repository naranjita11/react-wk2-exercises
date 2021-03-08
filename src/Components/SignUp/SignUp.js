// Create a component <Password label="Password"> that contains an <input> with a <label>. Inside a <SignUp minimumLength={ 12 }> component put two of these <Password> components: one should have the label "Password" and the other "Confirm Password". Both <Password> components should have a red border unless they are longer than minimumLength and match each other.

// Hint: If you don't remember it, go back over the Controlled Components material from last week first

import { Component } from "react";
import Password from "./Password";

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            password: "",
            confirmPassword: "",
        };

        this.handleChangePassword=this.handleChangePassword.bind(this);
        this.handleChangeConfirmPassword=this.handleChangeConfirmPassword.bind(this);
    }

    handleChangePassword(e) {
        this.setState({ password: e.currentTarget.value });
    }

    handleChangeConfirmPassword(e) {
        this.setState({ confirmPassword: e.currentTarget.value });
    }

    isValid() {
        let { minimumLength } = this.props;
        let { password, confirmPassword } = this.state;

        return ((password.length >= minimumLength) && (password === confirmPassword));
    }

    render() {
        return (
            <>
                <Password
                    label="Password"
                    handleChange={ this.handleChangePassword }
                    value={ this.state.password }
                    valid={ this.isValid() }
                />

                <Password
                    label="Confirm password"
                    handleChange={ this.handleChangeConfirmPassword }
                    value={ this.state.confirmPassword }
                    valid={ this.isValid() }
                />


        
            </>
        )
    }


}

export default SignUp;