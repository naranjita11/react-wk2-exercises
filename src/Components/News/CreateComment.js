import { Component } from "react";
import axios from "../../axios";

class CreateComment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            comment: "",
        }

        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangeComment=this.handleChangeComment.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({ email: e.currentTarget.value });
    }

    handleChangeComment(e) {
        this.setState({ comment: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();        
        
        let { email, comment } = this.state;
        let { articleID } = this.props;

        axios.post(`/articles/${ articleID }/comments`, {
            email: email,
            comment: comment,
        }).then(() => {
            this.setState({
                email: "",
                comment: ""
            });
        });
    }

    // commponentDidUpdate() {
    //     window.location.reload(true);
    //     console.log("did update");
    // }

    render() {
        let { email, comment} = this.state;

            return (
                <form className="card form-group mt-4" onSubmit={ this.handleSubmit }>
                    <h4 className="card-header">Add a comment</h4>
                    <div className="card-body">
                        <label>Email</label>
                        <input
                            onChange={ this.handleChangeEmail }
                            value={ email }
                            name="email"
                            className="form-control"
                        />

                        <label>Comment</label>
                        <textarea
                            onChange={ this.handleChangeComment }
                            value={ comment }
                            name="comment"
                            className="form-control"
                        />

                        <button
                            className="btn btn-primary mt-4">
                                Add comment
                        </button>
                    </div>
                </form>
            );
    }

}

export default CreateComment;