import {connect} from 'react-redux';
import Details from '../components/Details';
import { closeModal, deleteTriviaItem } from "../redux/actions"

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, {closeModal, deleteTriviaItem})(Details);