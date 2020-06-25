import { connect } from "react-redux";
import { createTriviaItem } from "../redux/actions";
import InputForm from '../components/InputForm';

const mapStateToProps = (state) => {
  return { trivia: state.trivia };
};

export default connect(null, { createTriviaItem })(InputForm);