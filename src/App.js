import mondaySdk from "monday-sdk-js";
import { useEffect, useState } from "react";
import "./App.css";

const monday = mondaySdk();

function useSettings() {
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    monday.listen("settings", (res) => {
      setSettings(res.data);
    });
  }, []);

  return settings;
}

function App() {
  const settings = useSettings();

  return (
    <>
      <h1>Settings</h1>
      <pre>{JSON.stringify(settings, null, 2)}</pre>
    </>
  );
}

export default App;
