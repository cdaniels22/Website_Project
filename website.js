$("#post-blog").click(function()
    {
        var newBlog = $("#new-blog-post").clone();
        var newBlogTitle = newBlog.find('#new-title');
        $(newBlog).prependTo('#blog-wrapper');
    }
)
