import { Link } from 'react-router-dom'
import './navbar.css'

const primaryLinks = [
	{ label: 'Home', to: '/' },
	{ label: 'Features', to: '/#features' },
	{ label: 'Storage', to: '/#storage' },
	{ label: 'Support', to: '/#support' },
]

function Navbar() {
	return (
		<header className="navbar">
			<div className="navbar__brand">
				<Link to="/" className="navbar__logo">
					<span className="navbar__mark" aria-hidden="true">
						CS
					</span>
					<span>
						<strong>Cloud Storage</strong>
						<small>Secure file platform</small>
					</span>
				</Link>
			</div>

			<nav className="navbar__nav" aria-label="Primary navigation">
				{primaryLinks.map((link) => (
					<Link key={link.label} to={link.to} className="navbar__link">
						{link.label}
					</Link>
				))}
			</nav>

			<div className="navbar__actions">
				<Link to="/login" className="navbar__button navbar__button--ghost">
					Sign in
				</Link>
				<Link to="/register" className="navbar__button navbar__button--solid">
					Create account
				</Link>
			</div>
		</header>
	)
}

export default Navbar