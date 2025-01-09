import { useEffect, useState } from "react";
import { deletePosts, getPosts } from "../../api/PostApi";
import { Form } from "./Form";

export function Posts() {
  const [data, setData] = useState([]);
  const [updateDataApi, setUpdateDataApi] = useState({});

  const getPostData = async () => {
    const res = await getPosts();
    setData(res.data.data);
  };

  useEffect(() => {
    getPostData();
  }, []);  // Fetch data only once on mount

  const handleDeletePost = async (_id) => {
    try {
      const res = await deletePosts(_id);
      if (res.status === 200) {
        setData((prevData) => prevData.filter((post) => post._id !== _id));
      }
    } catch (error) {
      console.error("Error deleting post:");
    }
  };
  

  const handleUpdatePost = (curElem) => {
    setUpdateDataApi(curElem);
  };

  return (
    <>
      <section>
        <Form
          className="section-form"
          data={data}
          setData={setData}
          updateDataApi={updateDataApi}
          setUpdateDataApi={setUpdateDataApi}
        />
      </section>
      <section className="section-post">
        <ol>
          {data.map((curElem, index) => {
  const { _id, title, price, imageUrl,type } = curElem;
  return (
    <li key={_id || index}>
      <p>Title: {title}</p>
      <p>Price: {price}</p>
      <p>type: {type}</p>
      <img src={imageUrl} alt="Post" />
      <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
      <button className="btn-delete" onClick={() => handleDeletePost(_id)}>Delete</button>
    </li>
  );
})
}
        </ol>
      </section>
    </>
  );
}
