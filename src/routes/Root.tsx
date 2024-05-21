import Header from "components/Header.tsx";
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <>
      <Header />
      <main className="container mt-8 mx-auto h-screen">
        <Outlet />
      </main>
    </>
  )
}
