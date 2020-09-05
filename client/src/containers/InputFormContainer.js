import { connect } from "react-redux";
import { createTriviaItem } from "../redux/actions";
import InputForm from '../components/InputForm';

export default connect(null, { createTriviaItem })(InputForm);