
import '../styles/Variables.css';
import '../styles/Header.css';

export default function Header() {
  return (
    <nav className="kinder-nav">
      <div className="nav-title">Ivy Classroom 🏫</div>
      
      <div className="nav-button-group">
        <button className="kid-nav-btn" style={{ backgroundColor: 'var(--kinder-red)' }}>
          <span style={{ fontSize: '40px' }}>🏠</span>
        </button>
        <button className="kid-nav-btn" style={{ backgroundColor: 'var(--kinder-green)' }}>
          <span style={{ fontSize: '40px' }}>🌟</span>
        </button>
      </div>
    </nav>
  );
}