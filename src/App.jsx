import './App.scss';
import postsFromServer from './api/posts.json';
import commentsFromServer from './api/comments.json';
import usersFromServer from './api/users.json';
import { PostList } from './components/PostList/PostList';
import { CommentList } from './components/CommentList/CommentList';
import { UserInfo } from './components/UserInfo/UserInfo';

function getUserById(userId) {
  return usersFromServer.find(user => user.id === userId) ?? null;
}

const comments = commentsFromServer.map(comment => ({
  ...comment,
  user: getUserById(comment.userId),
}));
const posts = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
}));

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <CommentList comments={comments} />
    <PostList posts={posts} />
    <UserInfo />
  </section>
);
