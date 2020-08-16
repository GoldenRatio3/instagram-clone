import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
	const [posts, setPosts] = useState([
		{
			username: 'Brad',
			caption: 'Welcome!',
			imageUrl:
				'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
		},
		{
			username: 'Captain Tom',
			caption: "A'hoy sirs",
			imageUrl:
				'https://cdn.bannerbuzz.co.uk/media/catalog/product/resize/560/b/o/boat-lettering.jpg',
		},
		{
			username: 'Test User',
			caption: "Hi All! I'm a test user",
			imageUrl: 'http://s3.amazonaws.com/37assets/svn/765-default-avatar.png',
		},
	]);

	return (
		<div className="app">
			<div className="app__header">
				<img
					className="app_headerImage"
					src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
					alt=""
				/>
			</div>
			{posts.map((post) => (
				<Post
					username={post.username}
					caption={post.caption}
					imageUrl={post.imageUrl}
				/>
			))}
		</div>
	);
}

export default App;
