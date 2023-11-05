import { Link, NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="flex justify-between rounded bg-neutral p-2">
      <Link to="/">
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-4xl font-semibold text-transparent">
          ReduxCrud
        </button>
      </Link>
      <ul className="flex items-center">
        <li>
          <NavLink
            className="inline-block rounded-md bg-emerald-700 px-4 py-3 uppercase"
            to={`/post`}
          >
            post
          </NavLink>
        </li>
      </ul>
      <Link to="/create-user">
        <button className="rounded bg-emerald-700 px-6 py-3 uppercase">
          add user
        </button>
      </Link>
    </nav>
  );
};

export default AppNav;
