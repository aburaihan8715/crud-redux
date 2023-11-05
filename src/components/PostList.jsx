import { useSelector, useDispatch } from "react-redux";
import { fetchPostData } from "../redux/postSlice";
import { useEffect } from "react";
import Loading from "../ui/Loading";
import ErrorMessage from "../ui/ErrorMessage";

const PostList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.post);
  const someData = data?.slice(0, 10);

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <ul className="my-4 grid grid-cols-3 gap-4">
      {someData?.map((item) => (
        <PostItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default PostList;

// single post component
const PostItem = ({ item }) => {
  return (
    <li className="rounded border p-2">
      <h3 className="border-b text-2xl font-semibold capitalize">
        {item.title}
      </h3>
      <p className="mt-2">{item.body}</p>
    </li>
  );
};
