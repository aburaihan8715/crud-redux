import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserList = () => {
  const users = useSelector((state) => state.user);
  // console.log(users);
  return (
    <ul className="my-4 space-y-2">
      {users?.map((item) => (
        <UserItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default UserList;

const UserItem = ({ item }) => {
  // console.log(item);
  return (
    <li className="flex justify-between rounded border p-4">
      <div>
        <h2 className="text-3xl font-semibold capitalize">Name: {item.name}</h2>
        <p>Email: {item.email}</p>
        <p>Age: {item.age}</p>
      </div>

      <div className="space-x-2 self-center">
        <UserDeleteBtn id={item.id} />
        <Link to={`/update-user/${item.id}`}>
          <button className="rounded bg-yellow-600 px-4 py-2 uppercase">
            update
          </button>
        </Link>
      </div>
    </li>
  );
};

// user delete button component
import { deleteUser } from "../redux/userSlice";
const UserDeleteBtn = ({ id }) => {
  const dispatch = useDispatch();

  const userDeleteHandler = () => {
    dispatch(deleteUser({ id }));
  };
  return (
    <button
      onClick={userDeleteHandler}
      className="rounded bg-red-600 px-4 py-2 uppercase"
    >
      delete
    </button>
  );
};
