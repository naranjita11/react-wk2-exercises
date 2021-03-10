import { Component } from "react";
import axios from "../../axios";

class Articles extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            articles: [],
        }
    }

    componentDidMount() {
        axios.get("/articles").then(({ data }) => {
            // once the data has come back update the component state
            this.setState({
            loaded: true,
            articles: data.data,
            });
        });
    }

    render() {
        let { articles, loaded } = this.state;
        
        return !loaded ? <p>Loading...</p> : (
            <>
                <h2>Blog Posts!</h2>
                <ul className="list-group">
                { articles.map(article => (
                    <li key={ article.id } className="list-group-item">
                        <a href={"news/"+article.id}>
                            <div className="d-flex w-100 justify-content-between">
                                <p>{ article.title }</p>
                                <p>{ article.tags.map(tag => (
                                    <span className="badge bg-primary" key={ tag }>{ tag }</span>
                                )) }</p>
                            </div>
                        </a>
                    </li>
                    )) }
                </ul>
            </>
        );
    }

}

export default Articles;