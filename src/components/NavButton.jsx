
export default function NavButton({ icon, label, color, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{ backgroundColor: color }}
      className="nav-btn-style"
    >
      <span>{icon}</span> {label}
    </button>
  );
}