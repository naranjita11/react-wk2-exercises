import { Component } from "react";
import axios from "../../axios";

class Article extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        }
    }

    componentDidMount() {
        let { id } = this.props;

        axios.get(`/articles/${id}`).then(({ data }) => {
            this.setState({ 
                title: data.data.title,
                content: data.data.content,
                tags: data.data.tags,
            });
        });
    }


    render() {
        let { title, content, tags} = this.state;
        
        return title === "" ? <p>Loading</p> : (
            <div className="card">
                
                <h2 className="card-header">{ title }</h2>
                <article className="card-body">
                    <p>{ content }</p>
                    <p>{ tags.map(tag => (
                        <span className="badge bg-primary" key={ tag }>{ tag }</span>
                    )) }</p>
                </article>

            </div>
        );
    }

}

export default Article;