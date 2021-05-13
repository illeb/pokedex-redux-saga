import classes from './Menu.module.scss';

const Menu = (props) => {
	return (
		<aside className={classes.Menu}>
			<ul>
				<li>menu1</li>
				<li>menu2</li>
				<li>menu3</li>
			</ul>
		</aside>
	)
}

export default Menu;