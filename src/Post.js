import React, from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({ username, caption, imageUrl }) {
	const [comments, setComments] = useState([]);

	return (
		<div className="post">
			<div className="post__header">
				<Avatar className="post__avatar" alt="Bradley" />
				<h3>{username}</h3>
			</div>
			<img className="post__image" src={imageUrl} alt="" />
			<p className="post__text">
				<strong>{username}</strong> {caption}
			</p>
		</div>
	);
}
export default Post;
