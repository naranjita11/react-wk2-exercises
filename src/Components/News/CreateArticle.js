import { Component } from "react";
import axios from "../../axios";
import history from "../../history";

class CreateArticle extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            tags: "",
        }

        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeContent=this.handleChangeContent.bind(this);
        this.handleChangeTags=this.handleChangeTags.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChangeTitle(e) {
        this.setState({ title: e.currentTarget.value });
    }

    handleChangeContent(e) {
        this.setState({ content: e.currentTarget.value });
    }

    handleChangeTags(e) {
        this.setState({ tags: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();        
        
        let { title, content, tags } = this.state;

        axios.post("/articles", {
            title: title,
            content: content,
            // could use a regex to ensure all spaces and commas are removed but this basically works too
            tags: tags.split(", "),
        }).then(() => {
            this.setState({ 
                title: "",
                content: "",
                tags: "",
            });
        });

        history.push("/news");

    }


    render() {
        let { title, content, tags} = this.state;

            return (
                <form className="form-group" onSubmit={ this.handleSubmit }>
                    <label>Title</label>
                    <input
                        onChange={ this.handleChangeTitle }
                        value={ title }
                        name="title"
                        className="form-control"
                    />

                    <label>Article</label>
                    <textarea
                        onChange={ this.handleChangeContent }
                        value={ content }
                        name="content"
                        className="form-control"
                    />

                    <label>Tags</label>
                    <input
                        onChange={ this.handleChangeTags }
                        value={ tags }
                        name="tags"
                        className="form-control"
                    />

                    <button
                        className="btn btn-primary mt-4">
                            Create article
                    </button>

                </form>
            );
    }

}

export default CreateArticle;