import { useState } from "react";

const UpdateContent = (props) =>
{
    let [title, setTitle] = useState(props.data.title);
    let [desc, setDesc] = useState(props.data.desc);
    return(
        <article>
            <h2>Update</h2>
            <form action  = "/update_process"
                  method = "post"
                  onSubmit = {(e) =>{
                    e.preventDefault();
                    props.onSubmit(
                        e.target.title.value,
                        e.target.desc.value
                    );
                    // e.target.title.value="";
                    // e.target.desc.value="";
                  }}>
                    <input type ="text" name = "title" value={title} 
                    onChange = {(e)=>{setTitle(e.target.value);} }/> <br />
                   
                    <input type ="text" name = "desc" value={desc} 
                    onChange = {(e)=>{setDesc(e.target.value);} } /> <br />
                    
                    <input type = "submit" value = "제출" />

                </form>
        </article>
    )
}

export default UpdateContent;