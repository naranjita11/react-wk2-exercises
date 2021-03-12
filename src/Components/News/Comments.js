import { Component } from "react";
import axios from "../../axios";

class Comments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            comments: [],
        }
    }

    componentDidMount() {
        let { articleID } = this.props;

        axios.get(`/articles/${ articleID }/comments`).then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
                loaded: true,
                comments: data.data,
            });
        });
    }


    render() {
        let { comments } = this.state;
        
        return (
            <div className="card mt-4">
                <h4 className="card-header">Comments</h4>
                <ul className="list-group list-group-flush">
                    {/* comments ? <p>No comments as yet... Why not post one?</p> : */}
                        { comments.map(comment => (
                            <li key={ comment.id } className="list-group-item">
                                    <div className="d-flex w-100 justify-content-between">
                                        <p >{ comment.comment }</p>
                                        <p className="badge bg-primary">{ comment.email }</p>
                                    </div>
                            </li>
                        )) }
                </ul>
            </div>
        );
    }

}

export default Comments;