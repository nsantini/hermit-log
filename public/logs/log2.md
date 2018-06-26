# The tech

This "blog" is made using [create-react-app](https://github.com/facebook/create-react-app), [react-desktop](https://github.com/gabrielbull/react-desktop), and [react-markdown](https://github.com/rexxars/react-markdown).

Create React App (CRA) is a very handy scafolding tool for creating ReactJS applications. It comes with batteries included, from a development server to production build process. It also facilitates structuring your app, including static public assets.

Following the structure defined by CRA, I create blog posts as markdown (md) files, and locate them inside the public folder, so they are available for the built version of the app.

Since the blog posts files are in the public asset folder, I can load them using the standard browser [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. I then use React Markdown to present the content of the blog posts.

The only `hack` I have to perform is keeping a `JSON` file listing the file names of the available blogposts so that my app can iterate over and load them. This is probably the next *target* on my TODO list :).