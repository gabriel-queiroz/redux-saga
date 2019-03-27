import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ActionsCreators from "../../store/actions/repositories";

const Home = ({ repositories, addRepositorie }) => {
  return (
    <div>
      <h1>react</h1>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}> {repo.name} </li>
        ))}
      </ul>
      <button onClick={() => addRepositorie("comer")}>cliquem-me</button>
    </div>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionsCreators, dispatch);

const mapStateToProps = state => ({
  repositories: state.repositories.data
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
