import {connect} from 'react-redux';
import Details from '../components/Details';
import { closeModal, deleteTrivia } from "../redux/actions"

const mapStateToProps = (state) => ({
  modal: state.modal
})

export default connect(mapStateToProps, {closeModal, deleteTrivia})(Details);