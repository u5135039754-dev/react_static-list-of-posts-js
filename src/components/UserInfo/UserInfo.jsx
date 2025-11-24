import './UserInfo.scss';

export const UserInfo = ({ user, post }) => {
  if (!user) {
    return null; // або якийсь fallback
  }

  return (
    <a className="UserInfo" href={`mailto:${post.user.email}`}>
      {post.user.name}
    </a>
  );
};
