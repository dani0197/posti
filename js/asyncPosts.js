import postService from './PostService.js';

const $postsRow = document.getElementById('posts-row');

export async function renderPosts() {
  try {
    $postsRow.innerHTML = '';
    const posts = await postService.getPosts();
    posts.forEach(post => {
      const { imageUrl, title, category, publishDate, writtenBy, article } = post;
      $postsRow.innerHTML += postService.postItem(imageUrl, title, category, publishDate, writtenBy, article);
    });
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
}

export async function renderByCategory(category) {
  try {
    const posts = await postService.getPosts();
    $postsRow.innerHTML = '';
    const toRender = posts.filter(post => post.category == category); 
    toRender.forEach(post => {
      const { imageUrl, title, category, publishDate, writtenBy, article } = post;
      $postsRow.innerHTML += postService.postItem(imageUrl, title, category, publishDate, writtenBy, article);
    })
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
};

export async function renderBySearch(value) {
  try {
    const posts = await postService.getPosts();
    const toRender = posts.filter(post => post.title.toLowerCase().includes(value.toLowerCase()))
    $postsRow.innerHTML = '';
    toRender.forEach(post => {
      const { imageUrl, title, category, publishDate, writtenBy, article } = post;
      $postsRow.innerHTML += postService.postItem(imageUrl, title, category, publishDate, writtenBy, article);
    })
  } catch (err) {
    $postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
};