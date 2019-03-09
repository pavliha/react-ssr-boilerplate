import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import photos from 'src/redux/app/entities/photos/action'
import sortBy from 'lodash/sortBy'

const mapStateTopProps = store => ({
  photos: sortBy(Object.values(store.photos), 'displayOrder'),
})

const mapDispatchToProps = dispatch => ({
  actions: {
    photos: bindActionCreators(photos, dispatch),
  },
})

export default connect(mapStateTopProps, mapDispatchToProps)
