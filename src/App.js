function App() {
    const title = 'Blog Post';
    const body = 'My awesome blog post for the world to see!';
    const blogPosts = [
        { 'id': 1, 'text': 'Blog Post one.' },
        { 'id': 2, 'text': 'Blog Post two.' },
        { 'id': 3, 'text': 'Blog Post three.' }
    ];
    const showBlogs = false;
    const showLoading = <h1>Loading...</h1>;
    if (showBlogs) return (showLoading);
    const showComments = true;
    const commentsBlock = (< div className="comments" >
        <p>Blog Posts count ({blogPosts.length})</p>
        <h3>My blog posts are</h3>
        <h3>Total comments ({blogPosts.length})</h3>
        <ul>
            {blogPosts.map((blog, index) => (
                <li key={index}>{blog.text}</li>
            ))}
        </ul>
    </div >);

    return (
        <div className="container">
            <h1>{title}</h1>
            <p>{body}</p>

            ({showComments ? commentsBlock : showLoading})

        </div>
    )
}

export default App;