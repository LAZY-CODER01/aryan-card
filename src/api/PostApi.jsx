import axios from "axios";

const api = axios.create({
    baseURL:"https://aryan-server-blush.vercel.app/api/v1",
});

// to get apidata
export function getPosts(){
    return api.get("/getCards");
}

//delete method
export const deletePosts=(id)=>{
     return api.delete(`/deleteCard/${id}`);
}

//post method
export function postData(post){
    return api.post("/createCard",post);
}

//put method
export function updateData(id,post){
    return api.put(`/updateCard/${id}`,post);
}