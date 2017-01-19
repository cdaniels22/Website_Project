$("#post-blog").click(function()
    {
        var newBlog = $("#new-blog-post").clone();
        var newBlogTitle = newBlog.find('#new-title');
        newBlogTitle.text($('#new-blog-post').val())
        $('#new-title').appendTo('#blog-title');
    }
)
