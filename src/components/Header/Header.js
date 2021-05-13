import classes from './Header.module.scss';

const Header = (props) => {
	const clickListener = () => {
		console.log('dothelogin');
	}

	return (
		<header className={classes.Header} onClick={clickListener}>
			<button className={classes.ButtonLogin}>doLogin!</button>
		</header>
	)
}

export default Header;