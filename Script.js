const myPosts = [
{title: "How I Built This Website with GitHub", date: "Oct 31, 2026", content: "I built this realistic blog using GitHub Pages on my phone. No money needed!"},
{title: "My ICT Journey as S3 Student", date: "Oct 30, 2026", content: "I am learning HTML, CSS and GitHub. My goal is to become an ICT expert."},
{title: "Football at Bunamwaya", date: "Oct 29, 2026", content: "Football training every evening. Preparing for inter-class games."}
];
const container = document.getElementById('posts');
const allPostsContainer = document.getElementById('all-posts');
const target = container || allPostsContainer;
if(target){
target.innerHTML = myPosts.map(p => `
<div class="post-card">
<small>${p.date}</small>
<h3>${p.title}</h3>
<p>${p.content}</p>
</div>
`).join('');
}
