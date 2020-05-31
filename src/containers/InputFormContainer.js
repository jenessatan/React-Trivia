import { connect } from "react-redux";
import { addTrivia } from "../redux/actions";
import InputForm from '../components/InputForm';

const mapStateToProps = (state) => {
  return { trivia: state.trivia };
};

export default connect(mapStateToProps, { addTrivia })(InputForm);