const SUPABASE_URL = 'https://zqvvhzbnsaygeoaeyxmr.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnZoemJuc2F5Z2VvYWV5eG1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4MTc1NzIsImV4cCI6MjA2NTM5MzU3Mn0.Kq8ttUnTCn7ukuvxij3tyN-D50X9eEZw6HnC8Gv6pIE';

document.getElementById('postForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const foodItem = {
    name: form.name.value,
    category: form.category.value,
    quantity: form.quantity.value ? Number(form.quantity.value) : null
  };

  const res = await fetch(`${SUPABASE_URL}/rest/v1/food_log`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal'
    },
    body: JSON.stringify(foodItem)
  });

  if (res.ok) {
    alert('Food item logged!');
    form.reset();
  } else {
    const errorText = await res.text();
    alert('Error submitting food item:\n' + errorText);
  }
});