import { connect } from 'react-redux';
import { get } from 'lodash'

const ReduxStoreWrapper = ({children, ...output}) => {
  delete output.selector;
  delete output.dispatch;
  return (children(output));
}


const mapStateToProps = (state, {selectors}) => {
  return Object.keys(selectors)
    .reduce((object, key) => {
        object[key] = get(state, selectors[key]);
        return object;
      }, {})
};

export default connect(mapStateToProps)(ReduxStoreWrapper);
