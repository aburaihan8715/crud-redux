import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const id = user?.length + 1;
  // console.log(user);

  const submitHandler = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const age = Number(e.target[2].value);
    if (!name || !email || !age) return alert("Name, email and age required!!");
    dispatch(addUser({ id, name, email, age }));
    navigate("/");
  };
  return (
    <div className="rounded border p-4">
      <div>
        <h2 className="text-center text-3xl uppercase">Add user</h2>
      </div>
      <form onSubmit={submitHandler}>
        <div className="space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Age</span>
            </label>
            <input
              type="number"
              placeholder="Enter age"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <button className="w-full rounded-md bg-emerald-700 px-6 py-3 uppercase">
              submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
