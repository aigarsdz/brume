# brume

I am not a designer so I cannot impress you with breathtaking Jekyll themes, but brume is something that just came to my mind and I had to build it. It is a clean and simple theme, which has an index page that lists all your blog posts divided by year and an about page. brume uses redcarpet as the Markdown processor with strikethrough extension enabled by default (so you can use ~~ to strike out words).

This is how the "Home" page looks like.

![Home](https://dl.dropboxusercontent.com/u/9924988/Screen%20Shot%202014-02-26%20at%2018.48.57.png)

And this is a single post.

![Home](https://dl.dropboxusercontent.com/u/9924988/Screen%20Shot%202014-02-26%20at%2018.49.04.png)

## Usage

**Important:** The latest version of brume uses `site.baseurl` for links, therefore, if you want to put your site in a subdirectory, update the *_config.yml* file!

- Download the ZIP file and extract it's contents.
- Open *_config.yml* file and enter your site's URL and add additional configuration or update the existing one if needed.
- Open *_data/brume.yml* file and fill in values for site name (site title), author (your name) and description (blog description). This file contains all the custom information about your page. You can access it using `site.data.brume` object.
- Open *about/index.md* file and add information about you or your site. You can delete this file and directory if not needed.
- Open *_data/links.yml* and add additional links or update the existing ones that you want to be displayed in the navigation menu.
- If you don't want to use CC BY-NC 4.0 licence for the content, then you should change the footer text, which is located in *_layouts/default.html*.
- Generate your site and be happy!

## Theme customization

This theme has 4 predefined colors that can be used for links:

- azul
- ruby
- amber
- avocado

![Color Examples](https://dl.dropboxusercontent.com/u/9924988/colors_new.png)

By default it uses *azure*, but if you want to select another one just change the second class of `container` div in *_layouts/default.html* to one of the provided names.

Express your thoughts about brume on Twitter [@aigarsdz](http://twitter.com/aigarsdz), and help me make it better!
