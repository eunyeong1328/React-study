const CreateContent = (props) => { 
    return( 
        <article>
            <h2>Create</h2>
            <form action = "/create_process" mothod = "post"
            onSubmit ={(e)=>{
                e.preventDefault();
                props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value
                );
                e.target.title.value="";
                e.target.desc.value="";   
            }}>
            <input type="text" name = "title" placeholder="title"></input>
            <input type="text" name = "desc" placeholder="description"></input>
            <input type="submit" value = "제출"></input>
            </form>
         </article>
    )   
}

export default CreateContent;