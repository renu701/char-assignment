import { LOGO_URL } from "../utils/constants"
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
        </div>
    )
}

export default Header;