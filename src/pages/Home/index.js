import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const Home = ({ repositories, addRepository }) => {
  const [repository, setRepository] = useState("");

  const handleChangeRepository = e => {
    const { value } = e.target;
    setRepository(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert("submetendo");
  };

  return (
    <div>
      <h1>Repositories</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="add repository"
          value={repository}
          onChange={handleChangeRepository}
        />
      </form>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}> {repo.name} </li>
        ))}
      </ul>
      <button onClick={() => addRepository("comer")}>cliquem-me</button>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(RepositoriesActions, dispatch);

const mapStateToProps = state => ({
  repositories: state.repositories.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
