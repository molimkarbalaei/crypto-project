import react from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;

// Language: javascript
// first stage:
// install tailwindcss
// we use react router dom: so we need to install react router dom

// **we have:
// count page
//coin page
// home page
// sign in page (login page)
// sign up page (register page)

// **nav bar:
// it is in app.js
// because we want to use it in all pages not only in home page
