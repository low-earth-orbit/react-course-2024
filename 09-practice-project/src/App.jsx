import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SidePanel from "./components/SidePanel";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SidePanel />
      <NewProject />
      <NoProjectSelected />
    </main>
  );
}

export default App;
