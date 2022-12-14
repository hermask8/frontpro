import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Profile from "./Pages/Profile/Profile";
import { useSelector } from "react-redux";
import Chat from "./Pages/Chat/Chat";
import bgFeed from "./assets/img/feed.png";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div
      className="App"
      style={{
        height:
          window.location.href === "https://frontpro.vercel.app/chat"
            ? "calc(100vh - 2rem)"
            : "auto",
        backgroundImage: 
        window.location.href === "https://frontpro.vercel.app/auth"
        ?  "none" : '',
        padding: 
        window.location.href === "https://frontpro.vercel.app/auth"
        ?  "0rem" : ''
      }}
    >
      <div className="blur" style={{ top: "-18%", right: "0",
        display: 
        window.location.href === "https://frontpro.vercel.app/auth"
        ?  "none" : '', }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem",
        display: 
        window.location.href === "https://frontpro.vercel.app/auth"
        ?  "none" : '', }}></div>
      <Routes>
        <Route
          path="/"
          element={user ? <Navigate to="home" /> : <Navigate to="auth" />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={user ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />

        <Route
          path="/chat"
          element={user ? <Chat /> : <Navigate to="../auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
