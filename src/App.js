import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Gérer le changement dans le formulaire
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  // Gérer la soumission
  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Merci de remplir tous les champs.');
      return;
    }

    // Pour simplifier, on utilise mailto: pour envoyer un email
    const mailtoLink = `mailto:donia.manai@example.com?subject=Message de ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nContact: ' + formData.email)}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  }

  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <ul>
          <li><a href="#home">Accueil</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#projects">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <div className="App">
        {/* Accueil */}
        <header id="home" className="header">
          <h1>Donia Manai</h1>
          <p>Data Scientist passionnée par l’IA et les projets innovants.</p>
        </header>

        {/* À propos */}
        <section id="about" className="about">
          <h2>À propos</h2>
          <p>
            Je suis diplômée en Data Science et j’aime utiliser l’intelligence artificielle pour résoudre des problèmes concrets. Je m’intéresse particulièrement à l’analyse d’images médicales, la vision par ordinateur, et les projets à impact social.
          </p>
        </section>

        {/* Projets */}
        <section id="projects" className="projects">
          <h2>Mes Projets</h2>
          <ul>
            <li>
              <strong>Surveillance ferroviaire avec YOLOv8</strong> – Détection des anomalies dans les images ferroviaires.
            </li>
            <li>
              <strong>Détection du cancer avec l’IA</strong> – Projet personnel sur l’annotation d’images médicales et entraînement d’un modèle.
            </li>
            <li>
              <strong>Dashboard Power BI</strong> – Analyse visuelle de données RH dans un environnement interactif.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <h2>Contact</h2>
          {submitted && <p className="success-message">Merci pour votre message !</p>}

          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              Nom complet :
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Votre nom"
                required
              />
            </label>

            <label>
              Email :
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre email"
                required
              />
            </label>

            <label>
              Message :
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Votre message"
                required
                rows="5"
              />
            </label>

            <button type="submit">Envoyer</button>
          </form>

          <p>Ou contactez-moi directement : 📧 donia.manai@example.com</p>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 Donia Manai. Tous droits réservés.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
