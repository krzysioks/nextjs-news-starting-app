import NavLink from "./components/NavLink";
import Link from "next/link";
import classes from "./mainHeader.module.css";

const MainHeader = () => {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">NextNews</Link>
			</div>
			<nav className={classes.nav}>
				<ul>
					<li>
						<NavLink href="/news">News</NavLink>
					</li>
					<li>
						<NavLink href="/archive">Archive</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainHeader;
