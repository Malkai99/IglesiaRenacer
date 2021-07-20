import { Helmet } from 'react-helmet'
import logo from '../../assets/logo-renacer-icon.ico'

const Head = () => {
    return (
        <Helmet>
            <title>Renacer | Saltillo</title>
            <link rel="icon" href={logo} />
        </Helmet>
    )
}

export default Head
