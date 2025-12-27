import Navbar from "./Navbar";
import Home from "./Home";
import Event from "./Event";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import Sessions from "./Sessions";
import Feedback from "./Feedback";
import Register from "./Register";

export default function AiVerse4() {
  return (
    <div className="bg-[#0B0B0B] text-white selection:bg-[#7C5CFF] selection:text-black">
      <Navbar />
      <main>
        <section id="home"><Home /></section>
        <section id="event"><Event /></section>
        <section id="speakers"><Speakers /></section>
        <section id="agenda"><Agenda /></section>
        <section id="sessions"><Sessions /></section>
        <section id="feedback"><Feedback /></section>
        <section id="register"><Register /></section>
      </main>
    </div>
  );
}