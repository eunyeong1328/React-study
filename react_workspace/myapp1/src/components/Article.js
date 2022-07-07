const Article = (props) =>{
    return (
        <article>
        {/* <h2>HTML</h2>
            HTML is HyperText Markup Language */}
            <h2>{props.title}</h2>
            {props.desc}
        </article>
    )
}

export default Article;