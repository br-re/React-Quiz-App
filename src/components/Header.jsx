import Logo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Header image" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
