import React from "react";

const AddInput = props => {
  const {
    handleSubmit,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange
  } = props;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input onChange={handleNameChange} value={newName} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} value={newNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddInput;
