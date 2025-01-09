
import { useEffect, useState } from "react";
import { postData, updateData } from "../../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  
  const [addData, setAddData] = useState({ title: "", price: "", imageUrl:"" ,type:""});

  let isEmpty = Object.keys(updateDataApi).length === 0;

  //get the updated data and add into input field
  useEffect(()=>{
    if(updateDataApi){
      setAddData({
        title:updateDataApi.title || "",
        price:updateDataApi.price || "",
        imageUrl:updateDataApi.imageUrl || "",
        type:updateDataApi.type || "",
      });
      }
  },[updateDataApi])

  const handleInputChange=(e)=>{
      const name =e.target.name;
      const value =e.target.value;
      setAddData((prev)=>{
        return{
          ...prev,
          [name]:value
        };
      });
  };

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      if (res.status === 200) {
        // Create a new post object based on the response structure
        const newPost = {
          _id: res.data._id, // Ensure unique identifier is included
          title: addData.title,
          price: addData.price,
          imageUrl: addData.imageUrl,
          type: addData.type,
        };
  
        // Update the data state
        setData((prevData) => [...prevData, newPost]);
        
        // Clear the form
        setAddData({ title: "", price: "", imageUrl: "",type:" " });

      }
    } catch (error) {
      console.error("Error adding post:", error);
    }
  };
  

    //updatePostdata
    const updatePostData = async () => {
      try {
        const res = await updateData(updateDataApi._id, addData);
        if (res.status === 200) {
          setData((prev) =>
            prev.map((curElem) =>
              curElem._id === updateDataApi._id ? { ...curElem, ...addData } : curElem
            )
          );
    
          // Reset form and update state
          setAddData({ title: "", price: "", imageUrl: "",type:"" });
          setUpdateDataApi({});
        }
      } catch (error) {
        console.error("Error updating post:", error);
      }
    };
    
    


  const handleFormSubmit=(e)=>{
        e.preventDefault();
        const action  = e.nativeEvent.submitter.value;
        if(action==="Add"){
        addPostData();
        }
        else if(action==="Edit"){
          updatePostData();
        }
  }

  return (
    <>
      <form className="section-form" onSubmit={handleFormSubmit}>
       

        <div>
          <label htmlFor="title"></label>
          <input
            type="text"
            autoComplete="off"
            id="title"
            name="title"
            placeholder="Add Title"
            value={addData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="type"></label>
          <input
            type="text"
            autoComplete="off"
            id="type"
            name="type"
            placeholder="Add type"
            value={addData.type}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price"></label>
          <input
            type="text"
            autoComplete="off"
            id="price"
            name="price"
            placeholder="Add Price"
            value={addData.price}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="imageUrl"></label>
          <input
            type="text"
            autoComplete="off"
            id="imageUrl"
            name="imageUrl"
            placeholder="Add Image Link"
            value={addData.imageUrl}  // Corrected here
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" value={isEmpty?"Add":"Edit"}>
          {isEmpty ? "Add" : "Update"}
        </button>
      </form>
    </>
  );
};



