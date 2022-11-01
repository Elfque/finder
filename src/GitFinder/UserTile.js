const UserTile = ({ user }) => {
  return (
    <div className="userTile">
      <img src={`${user.avatar_url}`} alt="" />
      <div className="user_name">{user.login}</div>
      <button className="visit">
        <a href={user.html_url} target="blank">
          Visit Page
        </a>
      </button>
    </div>
  );
};

export default UserTile;
