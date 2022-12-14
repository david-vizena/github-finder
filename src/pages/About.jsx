function About() {
	return (
		<div>
			<h1 className='text-6xl mb-4'>Github Finder</h1>
			<p className='mb-4 text-2xl font-light'>
				A React app to search GitHub profiles and see profile details. This
				project was built in React, and uses Tailwind CSS with the DaisyUI
				addon. It uses Actions, Context and Reducer functionality from React. It
				has been deployed to production by using Vercel.
			</p>
			<p className='text-lg text-gray-400'>
				Version <span className='text-white'>1.0.0</span>
			</p>
			<p className='text-lg text-gray-400'>
				Layout By:
				<a className='text-white' href='https://github.com/david-vizena'>
					David Vizena
				</a>
			</p>
		</div>
	);
}

export default About;
