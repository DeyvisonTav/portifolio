import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import ContactImg from "../public/assets/contact.jpg";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <p className="text-xl tracking-widest uppercase text-[#666672]">
          Contato
        </p>
        <h2 className="py-4">Entrar em contato</h2>
        <div className="w-full">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Deyvison Tavares</h2>
                <p>Desenvolvedor Front-end</p>
                <p className="py-4">
                  Estou disponível para posições freelance ou full-time. Entre
                  em contato comigo e vamos conversar.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">CONECTE-SE COMIGO (deyvisontav@gmail.com)</p>
                <div className="flex items-center justify-center gap-6 md:gap-36 py-4">
                  <a
                    href="https://www.linkedin.com/in/deyvison-tavares/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/DeyvisonTav/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                  <Link href="/resume">
                    <a>
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </Link>
                </div>
                <div className="flex justify-center">
                  <a target="blank" href="https://wa.me/5581997210386">
                    <button className="w-[23rem] md:w-[43rem] py-4 mt-10 flex items-center justify-center gap-4">
                      Entre em contato <FaWhatsapp size={21} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#666672]"
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
