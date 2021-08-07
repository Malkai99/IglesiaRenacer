import { Helmet } from 'react-helmet'
import logo from '../../assets/logo-renacer-icon.ico'

const Head = () => {
    return (
        <Helmet>
            <title>Renacer | Saltillo</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta name="author" content="Santiago Ortega" />
            <meta name="copyright" content="Santiago copyright © 2021" />
            <meta http-equiv="Content-Language" content="es"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href={logo} />
            <link rel="apple-touch-icon" href={logo} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,900;1,900&display=swap" rel="stylesheet" />
        </Helmet>
    )
}

export default Head
