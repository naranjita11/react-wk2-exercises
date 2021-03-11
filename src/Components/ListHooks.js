// Create a <List> component that consists of a <ul>, an <input>, and a <button>Add</button>. When you click the "Add" button, whatever is in the <input> should get added to the <ul>.

import { useState } from "react";

const ListHooks = () => {

    const [item, setItem] = useState("");
    const [listItems, setListItems] = useState([]);
    
    const handleChange = (e) => {
        setItem(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setListItems([...listItems, item]);
        setItem("");
    };

    return (
        <>
            <h3 className="mt-4">List</h3>
            <form className="form-group" onSubmit={ handleSubmit }>
                <input
                    className="form-control"
                    type="string"
                    value={ item }
                    onChange={ handleChange }
                />
                <button className="btn btn-primary">
                        Add
                </button>
            </form>
            <ul className="list-group mt-4">
                { listItems.map((item, i) => (
                    <li className="list-group-item" key={ i }>{ item }</li>
                )) }
            </ul>
        </>
    );

}

export default ListHooks;