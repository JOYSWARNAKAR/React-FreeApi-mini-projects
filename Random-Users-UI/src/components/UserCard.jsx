const UserCard = ({ user }) => {
  return (
    <div className="card">
      <img
        src={user.picture.large}
        alt={user.name.first}
      />

      <div className="content">
        <h2>
          {user.name.first} {user.name.last}
        </h2>

        <p>{user.email}</p>

        <span>
          {user.location.city}, {user.location.country}
        </span>
      </div>
    </div>
  );
};

export default UserCard;