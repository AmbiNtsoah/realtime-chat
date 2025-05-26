function toggleForms() {
      document.getElementById('login-form').classList.toggle('hidden');
      document.getElementById('signup-form').classList.toggle('hidden');
    }

    function handleLogin() {
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      console.log("Tentative de login avec : ", email, password);
      alert("Connexion réussie (simulation)");
    }

    function handleSignup() {
      const name = document.getElementById('signup-name').value;
      const email = document.getElementById('signup-email').value;
      const password = document.getElementById('signup-password').value;

      console.log("Tentative d'inscription avec : ", name, email, password);
      alert("Inscription réussie (simulation)");
    }