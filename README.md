# brume

I am not a designer so I cannot impress you with breathtaking Jekyll themes, but brume is something that just came to my mind and I had to build it. It is a clean and simple theme, which has an index page that lists all your blog posts divided by year and an about page. brume uses redcarpet as the Markdown processor with strikethrough extension enabled by default (so you can use ~~ to strike out words).

This is how the "Home" page looks like.

![Home](https://dl.dropboxusercontent.com/u/9924988/Screen%20Shot%202014-02-08%20at%2016.34.04.png)

And this is a single post.

![Home](https://dl.dropboxusercontent.com/u/9924988/Screenshot%202014-02-08%2016.36.06.png)

## Usage

- Download the ZIP file and extract it's contents.
- Open *_config.yml* file and enter your site's URL and add additional configuration or update the existing one if needed.
- Open *_data/brume.yml* file and fill in values for site name (site title), author (your name) and description (blog description). This file contains all the custom information about your page. You can access it using `site.data.brume` object.
- Open *about/index.md* file and add information about you or your site. You can delete this file and directory if not needed.
- Open *_data/links.yml* and add additional links or update the existing ones that you want to be displayed in the navigation menu.
- If you don't want to use CC BY-NC 4.0 licence for the content, then you should change the footer text, which is located in *_layouts/default.html*.
- Generate your site and be happy!

In case you don't want to list all the posts in the index page, brume has a support for pagination, but you have to set the option in *_config.yml* file and change the *index.html* file to include pagination section that is located in *_includes/pagination.html* and also change the `for` loop in *index.html* to iterate over `paginator.posts` instead of `site.posts`.

Express your thoughts about brume on Twitter [@aigarsdz](http://twitter.com/aigarsdz), and help me make it better!