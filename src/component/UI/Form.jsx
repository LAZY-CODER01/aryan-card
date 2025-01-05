// import { useEffect, useState } from "react";
// import { postData, updateData } from "../../api/PostApi";

// export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
//   const [addData, setAddData] = useState({
//     title: "",
//     body: "",
//     image: "",
//   });

//   let isEmpty = Object.keys(updateDataApi).length === 0;

//   // Get the updated data and add it into input fields
//   useEffect(() => {
//     if (updateDataApi) {
//       setAddData({
//         title: updateDataApi.title || "",
//         body: updateDataApi.body || "",
//         image: updateDataApi.image || "",
//       });
//     }
//   }, [updateDataApi]);

//   const handleInputChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     setAddData((prev) => {
//       return {
//         ...prev,
//         [name]: value,
//       };
//     });
//   };

//   // Add new post data
//   const addPostData = async () => {
//     const res = await postData(addData);
//     if (res.status === 200) {
//       setData([...data, res.data]);
//       setAddData({ title: "", body: "", image: "" });
//     }
//   };

//   // Update post data
//   const updatePostData = async () => {
//     try {
//       const res = await updateData(updateDataApi.id, addData);
//       if (res.status === 200) {
//         setData((prev) => {
//           return prev.map((curElem) => {
//             return curElem.id === updateDataApi.id ? res.data : curElem;
//           });
//         });
//         setAddData({ title: "", body: "", image: "" });
//         setUpdateDataApi({});
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const action = e.nativeEvent.submitter.value;
//     if (action === "Add") {
//       addPostData();
//     } else if (action === "Edit") {
//       updatePostData();
//     }
//   };

//   return (
//     <>
//       <form className="section-form" onSubmit={handleFormSubmit}>
//         <div>
//           <label htmlFor="image"></label>
//           <input
//             type="text"
//             autoComplete="off"
//             id="image"
//             name="image"
//             placeholder="Add Image Link"
//             value={addData.image}  // Corrected here
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="title"></label>
//           <input
//             type="text"
//             autoComplete="off"
//             id="title"
//             name="title"
//             placeholder="Add Title"
//             value={addData.title}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <div>
//           <label htmlFor="body"></label>
//           <input
//             type="text"
//             autoComplete="off"
//             id="body"
//             name="body"
//             placeholder="Add Post"
//             value={addData.body}
//             onChange={handleInputChange}
//             required
//           />
//         </div>

//         <button type="submit" value={isEmpty ? "Add" : "Edit"}>
//           {isEmpty ? "Add" : "Edit"}
//         </button>
//       </form>
//     </>
//   );
// };






// import { useEffect, useState } from "react";
// import { postData, updateData } from "../../api/PostApi";

// export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
//   const [addData, setAddData] = useState({
//     title: "",
//     body: "",
//     image: "",
//   });

//   useEffect(() => {
//     if (updateDataApi) {
//       setAddData({
//         title: updateDataApi.title ,
//         body: updateDataApi.body ,
//         image: updateDataApi.image ,
//       });
//     }
//   }, [updateDataApi]);


//   const handleInputChange = (e) => {
//     const  name = e.target.name;
//     const  value = e.target.value;
//     setAddData((prev) => {
//       return{
//       ...prev,
//       [name]: value,
//     };
//   });
//   };

// // Add new post data
// //   const addPostData = async () => {
// //     const res = await postData(addData);
// //     if (res.status === 200) {
// //       setData([...data, res.data]);
// //       setAddData({ title: "", body: "", image: "" });
// //     }
// //   };

//   const addPostData = async () => {
  
//       const res = await postData(addData);
//       if (res.status === 200) {
//         setData([...data, res.data]);
//         setAddData({ title:"", body:"", image:"" });
//       }
    
//   };


// // Update post data
// //   const updatePostData = async () => {
// //     try {
// //       const res = await updateData(updateDataApi.id, addData);
// //       if (res.status === 200) {
// //         setData((prev) => {
// //           return prev.map((curElem) => {
// //             return curElem.id === updateDataApi.id ? res.data : curElem;
// //           });
// //         });
// //         setAddData({ title: "", body: "", image: "" });
// //         setUpdateDataApi({});
// //       }
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };


//   const updatePostData = async () => {
//     try {
//       console.log("Updating post with ID:", updateDataApi.id);
//       console.log("Data being sent:", addData);
  
//       const res = await updateData(updateDataApi.id, addData);
//       if (res.status === 200) {
//         setData((prev) => 
//           prev.map((curElem) =>
//             curElem.id === updateDataApi.id ? res.data : curElem
//           )
//         );
//         setAddData({ title: "", body: "", image: "" });
//         setUpdateDataApi({});  // Clear the update data
//       }
//     } catch (error) {
//       console.error("Error updating post:", error);
//     }
//   };
  
//   //   const handleFormSubmit = (e) => {
// //     e.preventDefault();
// //     const action = e.nativeEvent.submitter.value;
// //     if (action === "Add") {
// //       addPostData();
// //     } else if (action === "Edit") {
// //       updatePostData();
// //     }
// //   };
//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!addData.title || !addData.body || !addData.image) {
//       console.error("All fields are required.");
//       return;
//     }
//     const action = e.nativeEvent.submitter.value;
//     if (action === "Add") addPostData();
//     else if (action === "Edit") updatePostData();
//   };

//   return (
//     <form className="section-form" onSubmit={handleFormSubmit}>
//       <div>
//         <label htmlFor="image">Image Link</label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           placeholder="Add Image Link"
//           value={addData.image}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           placeholder="Add Title"
//           value={addData.title}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="body">Body</label>
//         <input
//           type="text"
//           id="body"
//           name="body"
//           placeholder="Add Post"
//           value={addData.body}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <button type="submit" value={updateDataApi && updateDataApi._id ? "Edit" : "Add"}>
//         {updateDataApi && updateDataApi._id ? "Edit" : "Add"}
//       </button>
//     </form>
//   );
// };




// import { useEffect, useState } from "react";
// import { postData, updateData } from "../../api/PostApi";

// export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
//   const [addData, setAddData] = useState({
//     title: "",
//     body: "",
//     image: "",
//   });

//   useEffect(() => {
//     if (updateDataApi) {
//       setAddData({
//         title: updateDataApi.title,
//         body: updateDataApi.body,
//         image: updateDataApi.image,
//       });
//     }
//   }, [updateDataApi]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Add new post data
//   const addPostData = async () => {
//     try {
//       const res = await postData(addData);
//       if (res.status === 200) {
//         // Using functional setData to ensure proper state update
//         setData((prevData) => [...prevData, res.data]);
//         setAddData({ title: "", body: "", image: "" }); // Clear the form after adding post
//       }
//     } catch (error) {
//       console.error("Error adding post:", error);
//     }
//   };

//   // Update post data
//   const updatePostData = async () => {
//     try {
//       const res = await updateData(updateDataApi.id, addData);
//       if (res.status === 200) {
//         setData((prevData) =>
//           prevData.map((curElem) =>
//             curElem.id === updateDataApi.id ? res.data : curElem
//           )
//         );
//         setAddData({ title: "", body: "", image: "" });
//         setUpdateDataApi({});  // Clear the update data
//       }
//     } catch (error) {
//       console.error("Error updating post:", error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!addData.title || !addData.body || !addData.image) {
//       console.error("All fields are required.");
//       return;
//     }
//     const action = e.nativeEvent.submitter.value;
//     if (action === "Add") addPostData();
//     else if (action === "Edit") updatePostData();
//   };

//   return (
//     <form className="section-form" onSubmit={handleFormSubmit}>
//       <div>
//         <label htmlFor="image">Image Link</label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           placeholder="Add Image Link"
//           value={addData.image}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           placeholder="Add Title"
//           value={addData.title}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="body">Body</label>
//         <input
//           type="text"
//           id="body"
//           name="body"
//           placeholder="Add Post"
//           value={addData.body}
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <button type="submit" value={updateDataApi && updateDataApi.id ? "Edit" : "Add"}>
//         {updateDataApi && updateDataApi.id ? "Edit" : "Add"}
//       </button>
//     </form>
//   );
// };


// import { useEffect, useState } from "react";
// import { postData, updateData } from "../../api/PostApi";

// export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
//   // Set default values for addData
//   const [addData, setAddData] = useState({
//     title: "",
//     body: "",
//     image: "",
//   });

//   // Effect to populate the form when editing
//   useEffect(() => {
//     if (updateDataApi && updateDataApi.id) {
//       setAddData({
//         title: updateDataApi.title || "", // Ensure value is never undefined
//         body: updateDataApi.body || "",    // Ensure value is never undefined
//         image: updateDataApi.image || "",  // Ensure value is never undefined
//       });
//     } else {
//       setAddData({ title: "", body: "", image: "" }); // Reset form if no post is being edited
//     }
//   }, [updateDataApi]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setAddData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Add new post data
//   const addPostData = async () => {
//     try {
//       const res = await postData(addData);
//       if (res.status === 200) {
//         setData((prevData) => [...prevData, res.data]);
//         setAddData({ title: "", body: "", image: "" }); // Clear the form after adding post
//       }
//     } catch (error) {
//       console.error("Error adding post:", error);
//     }
//   };

//   // Update post data
//   const updatePostData = async () => {
//     try {
//       const res = await updateData(updateDataApi.id, addData);
//       if (res.status === 200) {
//         setData((prevData) =>
//           prevData.map((curElem) =>
//             curElem.id === updateDataApi.id ? res.data : curElem
//           )
//         );
//         setAddData({ title: "", body: "", image: "" });
//         setUpdateDataApi({});  // Clear the update data after update
//       }
//     } catch (error) {
//       console.error("Error updating post:", error);
//     }
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (!addData.title || !addData.body || !addData.image) {
//       console.error("All fields are required.");
//       return;
//     }
//     const action = e.nativeEvent.submitter.value;
//     if (action === "Add") {
//       addPostData();
//     } else if (action === "Edit") {
//       updatePostData();
//     }
//   };

//   return (
//     <form className="section-form" onSubmit={handleFormSubmit}>
//       <div>
//         <label htmlFor="image">Image Link</label>
//         <input
//           type="text"
//           id="image"
//           name="image"
//           placeholder="Add Image Link"
//           value={addData.image} // Always controlled
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           id="title"
//           name="title"
//           placeholder="Add Title"
//           value={addData.title} // Always controlled
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <div>
//         <label htmlFor="body">Body</label>
//         <input
//           type="text"
//           id="body"
//           name="body"
//           placeholder="Add Post"
//           value={addData.body} // Always controlled
//           onChange={handleInputChange}
//           required
//         />
//       </div>

//       <button type="submit" value={updateDataApi && updateDataApi.id ? "Edit" : "Add"}>
//         {updateDataApi && updateDataApi.id ? "Edit" : "Add"}
//       </button>
//     </form>
//   );
// };









import { useEffect, useState } from "react";
import { postData, updateData } from "../../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
  
  const [addData, setAddData] = useState({ title: "", price: "", imageUrl:"" });

  let isEmpty = Object.keys(updateDataApi).length === 0;

  //get the updated data and add into input field
  useEffect(()=>{
    if(updateDataApi){
      setAddData({
        title:updateDataApi.title || "",
        price:updateDataApi.price || "",
        imageUrl:updateDataApi.imageUrl || "",
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
        };
  
        // Update the data state
        setData((prevData) => [...prevData, newPost]);
        
        // Clear the form
        setAddData({ title: "", price: "", imageUrl: "" });

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
          setAddData({ title: "", price: "", imageUrl: "" });
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



