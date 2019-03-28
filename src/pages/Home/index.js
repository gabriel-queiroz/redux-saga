import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as RepositoriesActions } from "../../store/ducks/repositories";

const Home = ({ repositories, addRepository, removeRepository }) => {
  const [repository, setRepository] = useState("");

  const handleChangeRepository = e => {
    const { value } = e.target;
    setRepository(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!!repository) {
      addRepository(repository);
      setRepository("");
    }
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
        <button type="submit">adicionar</button>
      </form>
      <ul>
        {repositories.map(repo => (
          <li style={{ marginBottom: "10px" }} key={repo.id}>
            <span>{repo.name}</span>
            <button
              onClick={() => removeRepository(repo.id)}
              style={{ marginLeft: "10px" }}
            >
              remover
            </button>
          </li>
        ))}
      </ul>
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
