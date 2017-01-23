$("#post-blog").click(function() {
    var newBlogTitle = $('#new-title').val();
    var newBlogAuthor = $('#new-author').val();
    var newBlogDate = $('#new-date').val();
    var newBlogContent = $('#new-content').val();
    var newBlogPost = $("#blog-wrapper1").clone();
    $(newBlogPost).find("#blog-title").text(newBlogTitle);
    $(newBlogPost).find("#blog-author").text(newBlogAuthor);
    $(newBlogPost).find("#blog-date").text(newBlogDate);
    $(newBlogPost).find("#blog-content").text(newBlogContent);
    $(newBlogPost).prependTo("#blog-wrapper1").first();
});
