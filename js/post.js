const SUPABASE_URL = 'https://zqvvhzbnsaygeoaeyxmr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnZoemJuc2F5Z2VvYWV5eG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTc1NzIsImV4cCI6MjA2NTM5MzU3Mn0.Kq8ttUnTCn7ukuvxij3tyN-D50X9eEZw6HnC8Gv6pIE';

fetch(`${SUPABASE_URL}/rest/v1/food_log?select=*&order=created_at.desc`, {
  headers: {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`
  }
})
.then(res => res.json())
.then(data => {
  const container = document.getElementById('posts');
  container.innerHTML = data.map(item => `
    <article>
      <h2>${item.name}</h2>
      <p>Category: ${item.category}</p>
      <p>Quantity: ${item.quantity}</p>
      <small>${new Date(item.created_at).toLocaleString()}</small>
    </article>
  `).join('');
});
