function toggleForms() {
  document.getElementById('login-form').classList.toggle('hidden');
  document.getElementById('signup-form').classList.toggle('hidden');
}

const API_URL = 'http://localhost:9669';

function handleSignup() {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    alert(data.message || 'Inscription réussie');
    if (!data.error) toggleForms(); // switch vers login
  })
  .catch(err => console.error('Erreur:', err));
}

function handleLogin() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })
  .then(res => res.json())
  .then(data => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Connexion réussie !');
      showProfile();
      window.location.href = '/message';
    } else {
      alert(data.message || 'Échec de la connexion');
    }
  })
  .catch(err => console.error('Erreur:', err));
}

function showProfile() {
  const token = localStorage.getItem('token');
  if (!token) return alert('Token manquant');

  fetch(`${API_URL}/user/profile`, {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then(res => res.json())
  .then(data => {
    alert('Bienvenue, ID utilisateur : ' + data.userId);
  })
  .catch(err => {
    alert('Échec d\'accès au profil');
    console.error(err);
  });
}