const container = document.getElementById('container');

/* for (let i = 0; i < titles.length; i++) {
  const heading = document.createElement('h3');
  heading.innerText = titles[i];
  container.appendChild(heading);
} */

for (let i = 0; i < posts.length; i++) {
  const post = document.createElement('div');
  post.style.backgroundColor = 'lightGrey';

  // Title
  const heading = document.createElement('h3');
  heading.style.color = 'green';
  heading.innerText = 'Pealkiri: ' + posts[i].title;
  post.appendChild(heading);
  // Author
  const author = document.createElement('p');
  author.style.fontStyle = 'italic';
  author.innerText = 'Autor: ' + posts[i].author;
  post.appendChild(author);
  // Content
  const content = document.createElement('p');
  content.innerText = 'Sisu: ' + posts[i].content;
  post.appendChild(content);
  container.appendChild(post);
}