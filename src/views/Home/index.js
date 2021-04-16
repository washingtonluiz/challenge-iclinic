//Components
import { Button } from "../../components";

//CSS
import "./index.css";

function Home() {
  return (
    <div className="main">
      <header className="main__header">
        <h1 className="main__header--text">
          Welcome to <strong>iClinic</strong>
        </h1>
        <h2 className="main__header--description">FRONTEND CHALLENGE</h2>
      </header>
      <Button path="/mestre" name="START" type="link" style="btn-start" />
    </div>
  );
}

export default Home;
