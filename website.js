$("#post-blog").click(function()
    {
        var newBlog = $("#new-blog-post").clone();
        var newBlogTitle = newBlog.find('#new-title');
        newBlogTitle.text($('#new-title').val())
        $(newBlogTitle).prependTo('#blog-wrapper');
    }
)
