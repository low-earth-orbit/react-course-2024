import NewProject from "./components/NewProject";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SidePanel />
      <NewProject />
    </main>
  );
}

export default App;
