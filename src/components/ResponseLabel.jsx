import { getBoxStyles } from '../utils/styleUtils'

// eslint-disable-next-line react/prop-types
const ResponseLabel = ({ type, children }) => {
    const labelJss = getBoxStyles(type)
    return <p style={labelJss}>{children}</p>
}

export default ResponseLabel