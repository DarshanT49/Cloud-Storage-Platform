import Navbar from '../../layout/homeNav/navbar'

function RegisterPage() {
	return (
		<main style={{ minHeight: '100vh', padding: 24 }}>
			<Navbar />
			<div style={{ minHeight: 'calc(100vh - 120px)', display: 'grid', placeItems: 'center' }}>
			<section
				style={{
					width: 'min(420px, 100%)',
					padding: 32,
					borderRadius: 24,
					background: 'rgba(7, 15, 27, 0.78)',
					border: '1px solid rgba(148, 163, 184, 0.18)',
					color: '#e8eef7',
				}}
			>
				<h1 style={{ marginTop: 0 }}>Create account</h1>
				<p style={{ color: '#b7c4d9' }}>Start organizing files in the cloud.</p>
			</section>
			</div>
		</main>
	)
}

export default RegisterPage
