import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../store/state/auth';
import classes from './Header.module.scss';

const Header = (props) => {

	const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

	return (
		<header className={classes.Header}>
			{!isLoggedIn && <button className={classes.ButtonLogin} onClick={() => dispatch(login())}>doLogin!</button>}
			{isLoggedIn && <button className={classes.ButtonLogin} onClick={() => dispatch(logout())}>doLogout</button>}
		</header>
	)
}

export default Header;