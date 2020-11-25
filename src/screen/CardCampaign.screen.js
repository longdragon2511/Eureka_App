import InputInformation from '../screens/InputInformation';
import {connect} from 'react-redux';
import {createCampaignAction} from '../redux/actions/CAMPAIGN/campaignActions';

const mapStateToProps = (state) => {
  return {
    createCampaignReducers: state.createCampaignReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onCreateCampaignAction: (data) => {
      dispatch(createCampaignAction(data));
    },
  };
};
const InputInformationScreen = connect(mapStateToProps, mapDispatchToProps)(InputInformation);
export default InputInformationScreen;
