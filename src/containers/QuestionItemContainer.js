import {connect} from 'react-redux';
import QuestionItem from '../components/QuestionItem';
import { openModal } from "../redux/actions"

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, {openModal})(QuestionItem);