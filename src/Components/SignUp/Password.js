const Password = ({ label, handleChange, value, valid }) => {
  
    
    return (
        <div className="form-group">
        <label>{ label }</label>
        <input
            className="form-control"
            type="password"
            style={{ borderColor: valid ? "" : "red" }}
            value={ value }
            onChange={ handleChange }
        />  
        </div>
    );
  }
  
  export default Password;