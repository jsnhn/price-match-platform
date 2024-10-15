import './NavBar.css'
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service' 
// .. Or below... if you do use it has to be userSErvices.logout()
// import {logOut} from '../../utilities/users-service'

export default function NavBar ( {user, setUser} ) {

    function handleLogOut() { // dont need an event, you only need it if you need to know what a user clicked
        usersService.logOut(); // removes local storage
        setUser(null) // update user state
    }

    return (
        <nav>
            <div className="nav-title">
                <Link to="/" className="title">Product Matcher</Link>
            </div>
            <div className="nav-links">
                {user ? (
                    <>
                        <span>Welcome, {user.name}</span>
                        <Link to="" onClick={handleLogOut}>Log Out</Link>
                    </>
                ) : (
                    <Link to="/user/new">Log In</Link>
                )}
            </div>
        </nav>
    );
}