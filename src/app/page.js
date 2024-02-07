import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header
       heading={"This is Home Page"}
       to={"go to Login Page"}
       destRoute={"/login"}
      />
    </>
   
  );
}
