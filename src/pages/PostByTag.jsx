import { useParams } from "react-router-dom";

const PostByTag = () => {
  const { tag } = useParams();
  return <div>PostByTag tag: {tag}</div>;
};

export default PostByTag;
