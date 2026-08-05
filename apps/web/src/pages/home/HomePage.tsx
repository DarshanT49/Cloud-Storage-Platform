import './HomePage.css'
import Navbar from '../../layout/homeNav/navbar'

const stats = [
	{ value: '2.4 TB', label: 'stored securely' },
	{ value: '99.99%', label: 'availability target' },
	{ value: '128-bit', label: 'encryption at rest' },
]

const features = [
	{
		title: 'Fast uploads',
		description:
			'Move documents, media, and backups into the cloud with a clean drag-and-drop flow.',
	},
	{
		title: 'Shared access',
		description:
			'Give teams controlled access to folders, links, and project spaces without losing visibility.',
	},
	{
		title: 'Smart organization',
		description:
			'Keep every file easy to find with tags, recent activity, and usage insights.',
	},
]

const recentFiles = [
	{ name: 'project-brief.pdf', size: '2.1 MB', status: 'Synced' },
	{ name: 'brand-kit.zip', size: '84 MB', status: 'In progress' },
	{ name: 'team-notes.docx', size: '1.4 MB', status: 'Synced' },
]

function HomePage() {
	return (
		<main className="home-page">
			<Navbar />
			<section className="hero-shell">
				<div className="hero-copy">
					<span className="eyebrow">Cloud storage platform</span>
					<h1>Store, protect, and share every file from one place.</h1>
					<p>
						Keep your documents, media, and project assets organized in a secure cloud
						workspace that feels built for teams.
					</p>

					<div className="hero-actions">
						<a className="button button-primary" href="/register">
							Get started
						</a>
						<a className="button button-secondary" href="/login">
							Sign in
						</a>
					</div>

					<ul className="stat-list" aria-label="Platform highlights">
						{stats.map((stat) => (
							<li key={stat.label}>
								<strong>{stat.value}</strong>
								<span>{stat.label}</span>
							</li>
						))}
					</ul>
				</div>

				<div className="dashboard-card" aria-label="Storage overview preview">
					<div className="dashboard-card__header">
						<div>
							<span className="dashboard-label">Storage overview</span>
							<h2>Workspace vault</h2>
						</div>
						<span className="status-pill">Live</span>
					</div>

					<div className="storage-meter" aria-hidden="true">
						<div className="storage-meter__fill" />
					</div>

					<div className="storage-summary">
						<div>
							<strong>68%</strong>
							<span>used</span>
						</div>
						<div>
							<strong>14</strong>
							<span>shared folders</span>
						</div>
						<div>
							<strong>5 min</strong>
							<span>last backup</span>
						</div>
					</div>

					<div className="file-panel">
						<div className="file-panel__title">
							<h3>Recent files</h3>
							<span>Updated now</span>
						</div>

						<ul>
							{recentFiles.map((file) => (
								<li key={file.name}>
									<div>
										<strong>{file.name}</strong>
										<span>{file.size}</span>
									</div>
									<em>{file.status}</em>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="features-section">
				<div className="section-heading">
					<span className="eyebrow">Why teams use it</span>
					<h2>Everything your storage home page should explain at a glance.</h2>
				</div>

				<div className="feature-grid">
					{features.map((feature) => (
						<article key={feature.title} className="feature-card">
							<h3>{feature.title}</h3>
							<p>{feature.description}</p>
						</article>
					))}
				</div>
			</section>
		</main>
	)
}

export default HomePage
