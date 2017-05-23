# brume

I am not a designer so I cannot impress you with breathtaking Jekyll themes, but brume is something that just came to my mind and I had to build it. It is a clean and simple theme, which has an index page that lists all your blog posts divided by year and an about page.

This is how the "Home" page looks like.

![Home](https://raw.githubusercontent.com/aigarsdz/brume/master/screenshots/home.png)

And this is a single post.

![Post](https://raw.githubusercontent.com/aigarsdz/brume/master/screenshots/post_1.png)

![Post. More content examples.](https://raw.githubusercontent.com/aigarsdz/brume/master/screenshots/post_2.png)

## Usage

Brume can be installed just like any other Jekyll theme as described [here](https://jekyllrb.com/docs/themes/#installing-a-theme),
but there are a couple of additional steps you have to take.

1. All the links are defined in a file *_data/links.yml*, therefore you'll have to create a *_data*
directory and put this file there in order for navigation to be displayed.
2. Brume uses `home` layout for the home page (like the default Jekyll theme). All you have to do
is create an *index.html* or *index.md* file with `layout: home` and a `title` that matches
the title you used for the home page link in the *links.yml* file. Titles are used to indicate
the current page.
3. Update your *_config.yml* file with `color_scheme` option, which value can be `azul`, `ruby`, `amber` or `avocado`,
and is used for links. It is `avocado` by default.

## Theme customization

This theme has 4 predefined colors that can be used for links:

- azul
- ruby
- amber
- avocado

By default it uses *avocado*, but if you want to select another one just change the `color_scheme` setting in
*_config.yml* file.

Express your thoughts about brume on Twitter [@aigarsdz](http://twitter.com/aigarsdz), and help me make it better!
