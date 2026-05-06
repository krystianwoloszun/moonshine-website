"use client";

import { FormEvent, useState } from "react";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

const contactEmail = "moonshineband.kontakt@gmail.com";

export default function ContactForm() {
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      message.trim(),
      "",
      `Mail kontaktowy: ${senderEmail.trim()}`,
    ].join("\n");

    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(
      subject.trim(),
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="bg-zinc-950 px-4 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
        <div>
          <p className={`text-2xl uppercase tracking-wider text-gray-400 ${bebas.className}`}>
            Kontakt
          </p>
          <h2 className={`mt-2 text-5xl uppercase tracking-wider md:text-7xl ${bebas.className}`}>
            Napisz do nas
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-gray-300">
            Formularz przygotuje wiadomość do wysłania na adres{" "}
            <a className="text-white underline-offset-4 hover:underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            .
          </p>
        </div>

        <form className="grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="contact-email">
              Twój mail
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={senderEmail}
              onChange={(event) => setSenderEmail(event.target.value)}
              required
              placeholder="twoj.mail@example.com"
              className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="contact-subject">
              Temat
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
              placeholder="Temat wiadomości"
              className="w-full border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="contact-message">
              Treść wiadomości
            </label>
            <textarea
              id="contact-message"
              name="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={7}
              placeholder="Napisz wiadomość..."
              className="min-h-44 w-full resize-y border border-white/15 bg-black px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-white"
            />
          </div>

          <button
            type="submit"
            className={`justify-self-start bg-white px-7 py-3 text-2xl uppercase tracking-wider text-black transition hover:bg-gray-300 ${bebas.className}`}
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  );
}
