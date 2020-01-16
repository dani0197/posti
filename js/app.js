import { renderPosts, renderByCategory, renderBySearch } from "./asyncPosts.js";
renderPosts();

const $filterPicker = document.getElementById('category-picker');
const $searchBar = document.getElementById('search-posts-field');
$filterPicker.addEventListener('change', e => {
    const category = e.target.value;
    console.log(e.target.value);
    if (category != '') {
        renderByCategory(category);
    } else {
        renderPosts();
    }
});

$searchBar.addEventListener('input', e => {
    const value = e.target.value;
    console.log(value);
    if (value != '') {
        renderBySearch(value);
    } else {
        renderPosts();
    }
})