import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Mail,
  Phone,
  MapPin,
  CircleAlert,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
  ClipboardList,
  Linkedin,
  Github,
} from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { FaReact } from "react-icons/fa6";
import {
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { DiScrum } from "react-icons/di";
import { Helmet } from "react-helmet";

const ContactLink = ({ href, icon: IconComponent, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <div className="flex items-center">
      {IconComponent}
      <span className="text-sm hover:underline">{text}</span>
    </div>
  </a>
);

const ResumeHeader = () => {
  const personalInfo = [
    {
      href: "mailto:jonathandeoliveirarocha2002@gmail.com",
      icon: <Mail className="w-5 h-5 mr-2" />,
      text: "jonathandeoliveirarocha2002@gmail.com",
    },
    {
      href: "https://api.whatsapp.com/send?phone=5531999414881&text=Ol%C3%A1!",
      icon: <Phone className="w-5 h-5 mr-2" />,
      text: "+55 (31) 99941-4881",
    },
    {
      href: "https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6824124,-46.5952992,10z/data=!3m1!4b1!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D",
      icon: <MapPin className="w-5 h-5 mr-2" />,
      text: "São Paulo, SP - Brasil",
    },
    {
      href: "https://www.linkedin.com/in/jonathandeoliveirarocha",
      icon: <Linkedin className="w-5 h-5 mr-2 mt-[-2px]" />,
      text: "jonathandeoliveirarocha",
    },
    {
      href: "https://github.com/jonathanoliveirarocha",
      icon: <Github className="w-5 h-5 mr-2" />,
      text: "jonathanoliveirarocha",
    },
  ];

  return (
    <header className="mb-8 flex flex-col md:flex-row items-center md:items-start">
      <img
        src="https://avatars.githubusercontent.com/u/102632109?v=4"
        alt="Jonathan de Oliveira Rocha"
        width={120}
        height={120}
        className="rounded-full mb-4 md:mb-0 md:mr-6"
      />
      <div className="text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Jonathan de Oliveira Rocha
        </h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-300 mb-4">
          {personalInfo.map((info, index) => (
            <ContactLink key={index} {...info} />
          ))}
        </div>
      </div>
    </header>
  );
};

const AboutMeSection = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <CircleAlert className="w-6 h-6 mr-2" />
        Sobre Mim
      </h2>
      <p className="text-gray-400 text-justify">
        Olá, explorador! Sou Jonathan, mineiro de 22 anos, desenvolvedor e
        curioso por natureza. Criei esse blog para aprender e compartilhar
        minhas maiores paixões: Astronomia, tecnologia e música. À primeira
        vista, pode parecer que essas áreas não têm muito em comum, mas todas se
        conectam pelo mesmo fio: a curiosidade de entender o mundo e o universo.
        Vamos nessa, com leveza, diversão e muita inspiração!
      </p>
    </section>
  );
};

const ExperienceSection = () => {
  const personalExperience = [
    {
      company: "Paciente 360",
      companyWebsite: "https://www.paciente360.com.br/",
      position: "Desenvolvedor Full Stack",
      date: "ago 2025 - Presente",
    },
    {
      company: "Relate",
      companyWebsite: "/",
      position: "Fundador & Desenvolvedor Full Stack",
      date: "nov 2023 - Presente",
    },
    {
      company: "Localiza&Co",
      companyWebsite: "https://www.localiza.com/",
      position: "Atendente de Suporte N1",
      date: "nov 2024 - mai 2025",
    },
    {
      company: "Projeto Base",
      companyWebsite: "https://projetobaseosasco.ong.br/",
      position: "Desenvolvedor web (Voluntário)",
      date: "nov 2023 - fev 2024",
    },
    {
      company: "Autônomo",
      companyWebsite: "#",
      position: "Desenvolvedor Python",
      date: "jan 2020 - jul 2020",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <Briefcase className="w-6 h-6 mr-2" />
        Experiência
      </h2>
      {personalExperience.map((job, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{job.position}</h3>
          <p className="text-gray-400">
            <a
              href={job.companyWebsite}
              className="hover:underline"
              target={job.company != "Relate" ? "_blank" : ""}
            >
              {job.company}
            </a>{" "}
            | {job.date}
          </p>
        </div>
      ))}
    </section>
  );
};

const EducationSection = () => {
  const personalEducation = [
    {
      institution: "SENAI",
      institutionWebsite: "https://www.fiemg.com.br/senai/",
      area: "Técnico em Informática para Internet",
      date: "out de 2022 - mai de 2024",
    },
    {
      institution: "Universidade Cruzeiro do Sul",
      institutionWebsite: "https://www.cruzeirodosulvirtual.com.br/",
      area: "Análise e Desenvolvimento de Sistemas",
      date: "out 2021 - dez 2023",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <GraduationCap className="w-6 h-6 mr-2" />
        Educação
      </h2>
      {personalEducation.map((edu, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-xl font-semibold">{edu.area}</h3>
          <p className="text-gray-400">
            <a
              href={edu.institutionWebsite}
              className="hover:underline"
              target="_blank"
            >
              {edu.institution}
            </a>{" "}
            | {edu.date}
          </p>
        </div>
      ))}
    </section>
  );
};

const CertificateSection = () => {
  const personalCertifications = [
    {
      name: "Projetos ágeis com SCRUM",
      certificateLink: "https://www.dio.me/certificate/BB353FFC/share",
      issuer: "DIO",
      issuerWebsite: "https://www.dio.me/en",
      date: "nov 2022",
    },
    {
      name: "IBM Full Stack Software Developer",
      certificateLink:
        "https://coursera.org/share/bbaa2b47da02d1dbdc8271d15ef22872",
      issuer: "Coursera",
      issuerWebsite: "https://www.coursera.org",
      date: "abr 2022",
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <Award className="w-6 h-6 mr-2" />
        Certificações
      </h2>
      {personalCertifications.map((cert, index) => (
        <div key={index} className="mb-2">
          <a href={cert.certificateLink} target="_blank">
            <h3 className="text-lg font-semibold hover:underline">
              {cert.name}
            </h3>
          </a>

          <p className="text-gray-400">
            <a
              href={cert.issuerWebsite}
              className="hover:underline"
              target="_blank"
            >
              {cert.issuer}
            </a>{" "}
            | {cert.date}
          </p>
        </div>
      ))}
    </section>
  );
};

const LanguagesSection = () => {
  const personalLanguages = {
    Português: "BR",
    Inglês: "US",
    Espanhol: "AR",
  };

  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <Globe className="w-6 h-6 mr-2" />
        Idiomas
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Object.entries(personalLanguages).map(([lang, countryCode]) => (
          <div
            key={lang}
            className="bg-zinc-900 gap-3 rounded-lg p-3 flex items-center justify-center"
          >
            <ReactCountryFlag
              countryCode={countryCode}
              svg
              style={{
                width: "1.5em",
                height: "1.5em",
                borderRadius: "6px",
                color: "white",
              }}
              title={lang}
            />
            <span>{lang}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const personalSkills = {
    "Node.js": <FaNodeJs className="w-5 h-5" />,
    React: <FaReact className="w-5 h-5" />,
    HTML: <FaHtml5 className="w-5 h-5" />,
    "Express.js": <SiExpress className="w-5 h-5" />,
    "Tailwind CSS": <RiTailwindCssFill className="w-5 h-5" />,
    CSS: <FaCss3Alt className="w-5 h-5" />,
    MongoDB: <SiMongodb className="w-5 h-5" />,
    Git: <FaGitAlt className="w-5 h-5" />,
    JavaScript: <IoLogoJavascript className="w-5 h-5" />,
    MySQL: <GrMysql className="w-5 h-5" />,
    SCRUM: <DiScrum className="w-5 h-5" />,
    Bootstrap: <FaBootstrap className="w-5 h-5" />,
  };

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
        <ClipboardList className="w-6 h-6 mr-2" />
        Habilidades
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Object.entries(personalSkills).map(([skill, icon]) => (
          <div
            key={skill}
            className="bg-zinc-900 gap-2 rounded-lg p-3 flex items-center justify-center"
          >
            {icon}
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function AboutMe() {
  return (
    <>
      <Helmet>
        <title>Relate - Sobre Mim</title>
        <meta
          name="description"
          content="Olá, sou Jonathan, um desenvolvedor full stack de 21 anos, apaixonado por astronomia, tecnologia e música. Explore meu blog e descubra mais sobre minhas paixões e experiências."
        />
        <meta
          name="keywords"
          content="Relate, Jonathan, node.js, javascript, react, mongodb, back-end, front-end, full stack, currículo, programador, desenvolvedor, blog, astronomia, tecnologia, música, curiosidade, Minas Gerais"
        />
        <link rel="canonical" href="https://somerelate.vercel.app/aboutme" />
      </Helmet>
      <Header />
      <div className="min-h-screen bg-black text-gray-100 mt-6 px-4">
        <div className="max-w-4xl mx-auto">
          <ResumeHeader />
          <AboutMeSection />
          <ExperienceSection />
          <EducationSection />
          <CertificateSection />
          <LanguagesSection />
          <SkillsSection />
          <Footer />
        </div>
      </div>
    </>
  );
}
