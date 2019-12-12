import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import action from '@/action/types'

export default connect(
  state => ({...state}),
  // dispatch=>bindActionCreators(action,dispatch)
)
