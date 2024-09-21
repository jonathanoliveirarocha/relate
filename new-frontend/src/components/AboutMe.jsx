import React from "react";
import PageLogo from "../../public/relate-logo.png";

export default function AboutMe() {
  return (
    <>
      <header className="relative z-50 w-full py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-32">
        <a href="/">
          <img
            src={PageLogo}
            alt="Page logo"
            width={200}
            height={50}
            className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] xl:w-[200px]"
          />
        </a>
      </header>
      <div className="min-h-screen bg-black text-gray-100 pb-8 px-8">
        <div className="max-w-4xl mx-auto">
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
                <a href="mailto:jonathandeoliveirarocha2002@gmail.com">
                  <div className="flex items-center">
                    <div dangerouslySetInnerHTML={{ __html: svgIcons.email }} />
                    <span className="text-sm hover:underline">
                      jonathandeoliveirarocha2002@gmail.com
                    </span>
                  </div>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=5531999414881&text=Ol%C3%A1!"
                  target="_blank"
                >
                  <div className="flex items-center">
                    <div dangerouslySetInnerHTML={{ __html: svgIcons.phone }} />
                    <span className="text-sm hover:underline">
                      +55 (31) 99941-4881
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.google.com/maps/place/S%C3%A3o+Paulo,+SP/@-23.6820636,-46.9249557,10z/data=!4m6!3m5!1s0x94ce448183a461d1:0x9ba94b08ff335bae!8m2!3d-23.5557714!4d-46.6395571!16zL20vMDIycGZt?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <div className="flex items-center">
                    <div dangerouslySetInnerHTML={{ __html: svgIcons.city }} />
                    <span className="text-sm hover:underline">
                      São Paulo, SP - Brasil
                    </span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/jonathandeoliveirarocha"
                  target="_blank"
                >
                  <div className="flex items-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: svgIcons.linkedin }}
                    />
                    <span className="text-sm hover:underline">
                      jonathandeoliveirarocha
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com/jonathanoliveirarocha"
                  target="_blank"
                >
                  <div className="flex items-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: svgIcons.github }}
                    />
                    <span className="text-sm hover:underline">
                      jonathanoliveirarocha
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
              <div dangerouslySetInnerHTML={{ __html: svgIcons.experience }} />
              Experiência
            </h2>
            {[
              {
                company: "Relate",
                companyWebsite: "/",
                position: "Desenvolvedor Full Stack",
                date: "nov 2023 - Presente",
              },
              {
                company: "Projeto Base",
                companyWebsite: "https://projetobaseosasco.ong.br/",
                position: "Desenvolvedor Web",
                date: "nov 2023 - fev 2024",
              },
              {
                company: "IBGE",
                companyWebsite: "https://www.ibge.gov.br/",
                position: "Entrevistador Censitário e de Pesquisas Amostrais",
                date: "jul 2022 - ago 2022",
              },
            ].map((job, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{job.position}</h3>
                <p className="text-gray-400">
                  <a
                    href={job.companyWebsite}
                    className="hover:underline"
                    target="_blank"
                  >
                    {job.company}
                  </a>{" "}
                  | {job.date}
                </p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
              <div dangerouslySetInnerHTML={{ __html: svgIcons.education }} />
              Educação
            </h2>
            {[
              {
                institution: "SENAI",
                institutionWebsite: "https://www.fiemg.com.br/senai/",
                area: "Técnico em Informática para internet",
                date: "out de 2022 - mai de 2024",
              },
              {
                institution: "Universidade Cruzeiro do Sul",
                institutionWebsite: "https://www.cruzeirodosulvirtual.com.br/",
                area: "Análise e Desenvolvimento de Sistemas",
                date: "out 2021 - dez 2023",
              },
            ].map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold">{edu.area}</h3>
                <p className="text-gray-400">
                  <a
                    href={edu.institutionWebsite}
                    className="hover:underline"
                    target="_blank"
                  >
                    {edu.institution}{" "}
                  </a>
                  | {edu.date}
                </p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
              <div dangerouslySetInnerHTML={{ __html: svgIcons.certificate }} />
              Certificações
            </h2>
            {[
              {
                name: "Projetos ágeis com SCRUM",
                certificateLink:
                  "https://www.dio.me/certificate/BB353FFC/share",
                issuer: "DIO",
                issuerWebsite: "https://www.dio.me/en",
                date: "nov 2022",
              },
              {
                name: "IBM Full Stack Software Developer",
                certificateLink:
                  "https://www.coursera.org/account/accomplishments/specialization/certificate/297YK7ZHWHLC",
                issuer: "Coursera",
                issuerWebsite: "https://www.coursera.org",
                date: "abr 2022",
              },
            ].map((cert, index) => (
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
                    {cert.issuer} {""}
                  </a>
                  | {cert.date}
                </p>
              </div>
            ))}
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
              <div dangerouslySetInnerHTML={{ __html: svgIcons.languages }} />
              Idiomas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Português", "Inglês", "Espanhol"].map((lang, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 gap-3 rounded-lg p-3 flex items-center justify-center"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        index == 0
                          ? svgIcons.brazil
                          : index == 1
                          ? svgIcons.usa
                          : svgIcons.argentina,
                    }}
                  />
                  <span>{lang}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center border-b border-gray-700 pb-2">
              <div dangerouslySetInnerHTML={{ __html: svgIcons.certificate }} />
              Habilidades
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Object.entries(skillIcons).map(([skill, icon]) => (
                <div
                  key={skill}
                  className="bg-zinc-900 gap-3 rounded-lg p-3 flex items-center justify-center"
                >
                  <div dangerouslySetInnerHTML={{ __html: icon }} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

const svgIcons = {
  email:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-5 h-5 mr-2" data-id="21"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
  phone:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 mr-2" data-id="24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  city: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-5 h-5 mr-2" data-id="27"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  linkedin:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 mr-2"  data-id="33"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
  github:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-5 h-5 mr-2" > <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.8 8.205 11.387.6.111.82-.261.82-.577 0-.287-.011-1.243-.017-2.246-3.338.724-4.042-1.607-4.042-1.607-.546-1.384-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.067 1.827 2.8 1.298 3.479.993.108-.772.418-1.298.76-1.598-2.665-.303-5.467-1.332-5.467-5.93 0-1.311.47-2.382 1.24-3.22-.124-.303-.537-1.529.116-3.176 0 0 1.007-.322 3.295 1.229.955-.266 1.983-.398 3.003-.403 1.02.005 2.048.137 3.003.403 2.287-1.55 3.295-1.229 3.295-1.229.653 1.647.241 2.873.118 3.176.77.838 1.24 1.91 1.24 3.22 0 4.607-2.806 5.625-5.475 5.923.43.372.814 1.104.814 2.224 0 1.607-.014 2.901-.014 3.293 0 .318.218.693.825.577C20.563 22.1 24 17.605 24 12.297c0-6.627-5.373-12-12-12z"/> </svg>',
  experience:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase w-6 h-6 mr-2" data-id="36"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>',
  education:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap w-6 h-6 mr-2" data-id="42"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>',
  languages:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-6 h-6 mr-2" data-id="54"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
  certificate:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-award w-6 h-6 mr-2" data-id="48"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>',
  argentina:
    '<svg viewBox="0 0 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#75AADB" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#EEE" d="M0 13h36v10H0z"></path><path fill="#FCBF49" d="M18 13l.488 2.548l1.426-2.167l-.525 2.54l2.146-1.457l-1.457 2.147l2.541-.524l-2.167 1.425L23 18l-2.548.488l2.167 1.426l-2.541-.525l1.457 2.146l-2.146-1.457l.525 2.541l-1.426-2.167L18 23l-.488-2.548l-1.425 2.167l.524-2.541l-2.147 1.457l1.457-2.146l-2.54.525l2.167-1.426L13 18l2.548-.488l-2.167-1.425l2.54.524l-1.457-2.147l2.147 1.457l-.524-2.54l1.425 2.167z"></path><path fill="#843511" d="M18 14.33l.242 1.265l.116.605l.339-.514l.708-1.076l-.261 1.261l-.125.604l.51-.346l1.066-.723l-.723 1.066l-.346.51l.603-.125l1.262-.26l-1.076.708l-.515.337l.605.116L21.67 18l-1.265.242l-.605.116l.514.339l1.076.708l-1.262-.261l-.604-.125l.346.51l.723 1.065l-1.065-.723l-.51-.346l.125.604l.261 1.262l-.708-1.076l-.338-.515l-.116.605L18 21.67l-.242-1.265l-.116-.605l-.339.515l-.708 1.076l.26-1.262l.125-.603l-.51.346l-1.066.723l.723-1.066l.346-.51l-.604.125l-1.261.261l1.076-.708l.514-.339l-.605-.116L14.33 18l1.265-.242l.605-.116l-.515-.339l-1.076-.708l1.261.26l.603.125l-.346-.51l-.724-1.066l1.066.724l.51.346l-.125-.603l-.26-1.261l.708 1.076l.339.515l.116-.605L18 14.33M18 13l-.488 2.548l-1.425-2.167l.524 2.541l-2.147-1.457l1.457 2.147l-2.54-.524l2.167 1.425L13 18l2.548.488l-2.167 1.426l2.54-.525l-1.457 2.146l2.147-1.457l-.524 2.541l1.425-2.167L18 23l.488-2.548l1.426 2.167l-.525-2.541l2.146 1.457l-1.457-2.146l2.541.525l-2.167-1.426L23 18l-2.548-.488l2.167-1.425l-2.541.524l1.457-2.147l-2.146 1.457l.525-2.541l-1.426 2.167L18 13zm1.914.381h.005h-.005zm1.621 1.083h.005h-.005zm1.084 1.623h.005h-.005z"></path><circle fill="#FCBF49" cx="18" cy="18" r="2"></circle><path fill="#843511" d="M18 20.125c-1.172 0-2.125-.953-2.125-2.125s.953-2.125 2.125-2.125s2.125.953 2.125 2.125s-.953 2.125-2.125 2.125zm0-4c-1.034 0-1.875.841-1.875 1.875s.841 1.875 1.875 1.875s1.875-.841 1.875-1.875s-.841-1.875-1.875-1.875z"></path><path fill="#C16540" d="M17.801 17.774c0 .155-.261.28-.583.28c-.323 0-.584-.125-.584-.28c0-.155.261-.28.584-.28c.322 0 .583.125.583.28zm1.553-.024c0-.161-.266-.292-.594-.292c-.328 0-.594.13-.594.292s.266.292.594.292c.329 0 .594-.131.594-.292z"></path><path fill="#ED8662" d="M17.463 18.874c0-.126.246-.229.548-.229c.303 0 .548.102.548.229c0 .126-.246.229-.548.229c-.303 0-.548-.103-.548-.229z"></path></g></svg>',
  brazil:
    '<svg viewBox="0 0 36 36" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#009B3A" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FEDF01" d="M32.728 18L18 29.124L3.272 18L18 6.875z"></path><circle fill="#002776" cx="17.976" cy="17.924" r="6.458"></circle><path fill="#CBE9D4" d="M12.277 14.887a6.406 6.406 0 0 0-.672 2.023c3.995-.29 9.417 1.891 11.744 4.595c.402-.604.7-1.28.883-2.004c-2.872-2.808-7.917-4.63-11.955-4.614z"></path><path fill="#88C9F9" d="M12 18.233h1v1h-1zm1 2h1v1h-1z"></path><path fill="#55ACEE" d="M15 18.233h1v1h-1zm2 1h1v1h-1zm4 2h1v1h-1zm-3 1h1v1h-1zm3-6h1v1h-1z"></path><path fill="#3B88C3" d="M19 20.233h1v1h-1z"></path></g></svg>',
  usa: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 -4 28 28" fill="none"> <g clip-path="url(#clip0_503_3486)"> <rect width="28" height="20" rx="2" fill="white"/> <mask id="mask0_503_3486" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="28" height="20"> <rect width="28" height="20" rx="2" fill="white"/> </mask> <g mask="url(#mask0_503_3486)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 0H0V1.33333H28V0ZM28 2.66667H0V4H28V2.66667ZM0 5.33333H28V6.66667H0V5.33333ZM28 8H0V9.33333H28V8ZM0 10.6667H28V12H0V10.6667ZM28 13.3333H0V14.6667H28V13.3333ZM0 16H28V17.3333H0V16ZM28 18.6667H0V20H28V18.6667Z" fill="#D02F44"/> <rect width="12" height="9.33333" fill="#46467F"/> <g filter="url(#filter0_d_503_3486)"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66665 1.99999C2.66665 2.36818 2.36817 2.66666 1.99998 2.66666C1.63179 2.66666 1.33331 2.36818 1.33331 1.99999C1.33331 1.63181 1.63179 1.33333 1.99998 1.33333C2.36817 1.33333 2.66665 1.63181 2.66665 1.99999ZM5.33331 1.99999C5.33331 2.36818 5.03484 2.66666 4.66665 2.66666C4.29846 2.66666 3.99998 2.36818 3.99998 1.99999C3.99998 1.63181 4.29846 1.33333 4.66665 1.33333C5.03484 1.33333 5.33331 1.63181 5.33331 1.99999ZM7.33331 2.66666C7.7015 2.66666 7.99998 2.36818 7.99998 1.99999C7.99998 1.63181 7.7015 1.33333 7.33331 1.33333C6.96512 1.33333 6.66665 1.63181 6.66665 1.99999C6.66665 2.36818 6.96512 2.66666 7.33331 2.66666ZM10.6666 1.99999C10.6666 2.36818 10.3682 2.66666 9.99998 2.66666C9.63179 2.66666 9.33331 2.36818 9.33331 1.99999C9.33331 1.63181 9.63179 1.33333 9.99998 1.33333C10.3682 1.33333 10.6666 1.63181 10.6666 1.99999ZM3.33331 3.99999C3.7015 3.99999 3.99998 3.70152 3.99998 3.33333C3.99998 2.96514 3.7015 2.66666 3.33331 2.66666C2.96512 2.66666 2.66665 2.96514 2.66665 3.33333C2.66665 3.70152 2.96512 3.99999 3.33331 3.99999ZM6.66665 3.33333C6.66665 3.70152 6.36817 3.99999 5.99998 3.99999C5.63179 3.99999 5.33331 3.70152 5.33331 3.33333C5.33331 2.96514 5.63179 2.66666 5.99998 2.66666C6.36817 2.66666 6.66665 2.96514 6.66665 3.33333ZM8.66665 3.99999C9.03484 3.99999 9.33331 3.70152 9.33331 3.33333C9.33331 2.96514 9.03484 2.66666 8.66665 2.66666C8.29846 2.66666 7.99998 2.96514 7.99998 3.33333C7.99998 3.70152 8.29846 3.99999 8.66665 3.99999ZM10.6666 4.66666C10.6666 5.03485 10.3682 5.33333 9.99998 5.33333C9.63179 5.33333 9.33331 5.03485 9.33331 4.66666C9.33331 4.29847 9.63179 3.99999 9.99998 3.99999C10.3682 3.99999 10.6666 4.29847 10.6666 4.66666ZM7.33331 5.33333C7.7015 5.33333 7.99998 5.03485 7.99998 4.66666C7.99998 4.29847 7.7015 3.99999 7.33331 3.99999C6.96512 3.99999 6.66665 4.29847 6.66665 4.66666C6.66665 5.03485 6.96512 5.33333 7.33331 5.33333ZM5.33331 4.66666C5.33331 5.03485 5.03484 5.33333 4.66665 5.33333C4.29846 5.33333 3.99998 5.03485 3.99998 4.66666C3.99998 4.29847 4.29846 3.99999 4.66665 3.99999C5.03484 3.99999 5.33331 4.29847 5.33331 4.66666ZM1.99998 5.33333C2.36817 5.33333 2.66665 5.03485 2.66665 4.66666C2.66665 4.29847 2.36817 3.99999 1.99998 3.99999C1.63179 3.99999 1.33331 4.29847 1.33331 4.66666C1.33331 5.03485 1.63179 5.33333 1.99998 5.33333ZM3.99998 5.99999C3.99998 6.36819 3.7015 6.66666 3.33331 6.66666C2.96512 6.66666 2.66665 6.36819 2.66665 5.99999C2.66665 5.6318 2.96512 5.33333 3.33331 5.33333C3.7015 5.33333 3.99998 5.6318 3.99998 5.99999ZM5.99998 6.66666C6.36817 6.66666 6.66665 6.36819 6.66665 5.99999C6.66665 5.6318 6.36817 5.33333 5.99998 5.33333C5.63179 5.33333 5.33331 5.6318 5.33331 5.99999C5.33331 6.36819 5.63179 6.66666 5.99998 6.66666ZM9.33331 5.99999C9.33331 6.36819 9.03484 6.66666 8.66665 6.66666C8.29846 6.66666 7.99998 6.36819 7.99998 5.99999C7.99998 5.6318 8.29846 5.33333 8.66665 5.33333C9.03484 5.33333 9.33331 5.6318 9.33331 5.99999ZM9.99998 8C10.3682 8 10.6666 7.70152 10.6666 7.33333C10.6666 6.96514 10.3682 6.66666 9.99998 6.66666C9.63179 6.66666 9.33331 6.96514 9.33331 7.33333C9.33331 7.70152 9.63179 8 9.99998 8ZM7.99998 7.33333C7.99998 7.70152 7.7015 8 7.33331 8C6.96512 8 6.66665 7.70152 6.66665 7.33333C6.66665 6.96514 6.96512 6.66666 7.33331 6.66666C7.7015 6.66666 7.99998 6.96514 7.99998 7.33333ZM4.66665 8C5.03484 8 5.33331 7.70152 5.33331 7.33333C5.33331 6.96514 5.03484 6.66666 4.66665 6.66666C4.29846 6.66666 3.99998 6.96514 3.99998 7.33333C3.99998 7.70152 4.29846 8 4.66665 8ZM2.66665 7.33333C2.66665 7.70152 2.36817 8 1.99998 8C1.63179 8 1.33331 7.70152 1.33331 7.33333C1.33331 6.96514 1.63179 6.66666 1.99998 6.66666C2.36817 6.66666 2.66665 6.96514 2.66665 7.33333Z" fill="url(#paint0_linear_503_3486)"/> </g> </g> </g> <defs> <filter id="filter0_d_503_3486" x="1.33331" y="1.33333" width="9.33331" height="7.66667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"/> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/> <feOffset dy="1"/> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_503_3486"/> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_503_3486" result="shape"/> </filter> <linearGradient id="paint0_linear_503_3486" x1="1.33331" y1="1.33333" x2="1.33331" y2="7.99999" gradientUnits="userSpaceOnUse"> <stop stop-color="white"/> <stop offset="1" stop-color="#F0F0F0"/> </linearGradient> <clipPath id="clip0_503_3486"> <rect width="28" height="20" rx="2" fill="white"/> </clipPath> </defs> </svg>',
};

const skillIcons = {
  "Node.js":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-13 0 282 282" preserveAspectRatio="xMinYMin meet"> <g fill="#8CC84B"> <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z"/> <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z"/> </g> </svg>',
  React:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path d="M18.6789 15.9759C18.6789 14.5415 17.4796 13.3785 16 13.3785C14.5206 13.3785 13.3211 14.5415 13.3211 15.9759C13.3211 17.4105 14.5206 18.5734 16 18.5734C17.4796 18.5734 18.6789 17.4105 18.6789 15.9759Z" fill="#53C1DE"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M24.7004 11.1537C25.2661 8.92478 25.9772 4.79148 23.4704 3.39016C20.9753 1.99495 17.7284 4.66843 16.0139 6.27318C14.3044 4.68442 10.9663 2.02237 8.46163 3.42814C5.96751 4.82803 6.73664 8.8928 7.3149 11.1357C4.98831 11.7764 1 13.1564 1 15.9759C1 18.7874 4.98416 20.2888 7.29698 20.9289C6.71658 23.1842 5.98596 27.1909 8.48327 28.5877C10.9973 29.9932 14.325 27.3945 16.0554 25.7722C17.7809 27.3864 20.9966 30.0021 23.4922 28.6014C25.9956 27.1963 25.3436 23.1184 24.7653 20.8625C27.0073 20.221 31 18.7523 31 15.9759C31 13.1835 26.9903 11.7923 24.7004 11.1537ZM24.4162 19.667C24.0365 18.5016 23.524 17.2623 22.8971 15.9821C23.4955 14.7321 23.9881 13.5088 24.3572 12.3509C26.0359 12.8228 29.7185 13.9013 29.7185 15.9759C29.7185 18.07 26.1846 19.1587 24.4162 19.667ZM22.85 27.526C20.988 28.571 18.2221 26.0696 16.9478 24.8809C17.7932 23.9844 18.638 22.9422 19.4625 21.7849C20.9129 21.6602 22.283 21.4562 23.5256 21.1777C23.9326 22.7734 24.7202 26.4763 22.85 27.526ZM9.12362 27.5111C7.26143 26.47 8.11258 22.8946 8.53957 21.2333C9.76834 21.4969 11.1286 21.6865 12.5824 21.8008C13.4123 22.9332 14.2816 23.9741 15.1576 24.8857C14.0753 25.9008 10.9945 28.557 9.12362 27.5111ZM2.28149 15.9759C2.28149 13.874 5.94207 12.8033 7.65904 12.3326C8.03451 13.5165 8.52695 14.7544 9.12123 16.0062C8.51925 17.2766 8.01977 18.5341 7.64085 19.732C6.00369 19.2776 2.28149 18.0791 2.28149 15.9759ZM9.1037 4.50354C10.9735 3.45416 13.8747 6.00983 15.1159 7.16013C14.2444 8.06754 13.3831 9.1006 12.5603 10.2265C11.1494 10.3533 9.79875 10.5569 8.55709 10.8297C8.09125 9.02071 7.23592 5.55179 9.1037 4.50354ZM20.3793 11.5771C21.3365 11.6942 22.2536 11.85 23.1147 12.0406C22.8562 12.844 22.534 13.6841 22.1545 14.5453C21.6044 13.5333 21.0139 12.5416 20.3793 11.5771ZM16.0143 8.0481C16.6054 8.66897 17.1974 9.3623 17.7798 10.1145C16.5985 10.0603 15.4153 10.0601 14.234 10.1137C14.8169 9.36848 15.414 8.67618 16.0143 8.0481ZM9.8565 14.5444C9.48329 13.6862 9.16398 12.8424 8.90322 12.0275C9.75918 11.8418 10.672 11.69 11.623 11.5748C10.9866 12.5372 10.3971 13.5285 9.8565 14.5444ZM11.6503 20.4657C10.6679 20.3594 9.74126 20.2153 8.88556 20.0347C9.15044 19.2055 9.47678 18.3435 9.85796 17.4668C10.406 18.4933 11.0045 19.4942 11.6503 20.4657ZM16.0498 23.9915C15.4424 23.356 14.8365 22.6531 14.2448 21.8971C15.4328 21.9423 16.6231 21.9424 17.811 21.891C17.2268 22.6608 16.6369 23.3647 16.0498 23.9915ZM22.1667 17.4222C22.5677 18.3084 22.9057 19.1657 23.1742 19.9809C22.3043 20.1734 21.3652 20.3284 20.3757 20.4435C21.015 19.4607 21.6149 18.4536 22.1667 17.4222ZM18.7473 20.5941C16.9301 20.72 15.1016 20.7186 13.2838 20.6044C12.2509 19.1415 11.3314 17.603 10.5377 16.0058C11.3276 14.4119 12.2404 12.8764 13.2684 11.4158C15.0875 11.2825 16.9178 11.2821 18.7369 11.4166C19.7561 12.8771 20.6675 14.4086 21.4757 15.9881C20.6771 17.5812 19.7595 19.1198 18.7473 20.5941ZM22.8303 4.4666C24.7006 5.51254 23.8681 9.22726 23.4595 10.8426C22.2149 10.5641 20.8633 10.3569 19.4483 10.2281C18.6239 9.09004 17.7698 8.05518 16.9124 7.15949C18.1695 5.98441 20.9781 3.43089 22.8303 4.4666Z" fill="#53C1DE"/> </svg>',
  HTML: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>file_type_html</title><polygon points="5.902 27.201 3.655 2 28.345 2 26.095 27.197 15.985 30 5.902 27.201" style="fill:#e44f26"/><polygon points="16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858" style="fill:#f1662a"/><polygon points="16 13.407 11.91 13.407 11.628 10.242 16 10.242 16 7.151 15.989 7.151 8.25 7.151 8.324 7.981 9.083 16.498 16 16.498 16 13.407" style="fill:#ebebeb"/><polygon points="16 21.434 15.986 21.438 12.544 20.509 12.324 18.044 10.651 18.044 9.221 18.044 9.654 22.896 15.986 24.654 16 24.65 16 21.434" style="fill:#ebebeb"/><polygon points="15.989 13.407 15.989 16.498 19.795 16.498 19.437 20.507 15.989 21.437 15.989 24.653 22.326 22.896 22.372 22.374 23.098 14.237 23.174 13.407 22.341 13.407 15.989 13.407" style="fill:#fff"/><polygon points="15.989 7.151 15.989 9.071 15.989 10.235 15.989 10.242 23.445 10.242 23.445 10.242 23.455 10.242 23.517 9.548 23.658 7.981 23.732 7.151 15.989 7.151" style="fill:#fff"/></svg>',
  "Express.js":
    '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="24" height="24" viewBox="0 0 24 24" role="img"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>',
  "Tailwind CSS":
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>file_type_tailwind</title><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" style="fill:#44a8b3"/></svg>',
  CSS: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path d="M6 28L4 3H28L26 28L16 31L6 28Z" fill="#1172B8"/> <path d="M26 5H16V29.5L24 27L26 5Z" fill="#33AADD"/> <path d="M19.5 17.5H9.5L9 14L17 11.5H9L8.5 8.5H24L23.5 12L17 14.5H23L22 24L16 26L10 24L9.5 19H12.5L13 21.5L16 22.5L19 21.5L19.5 17.5Z" fill="white"/> </svg>',
  MongoDB:
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 32 32"><defs><linearGradient id="a" x1="-645.732" y1="839.188" x2="-654.59" y2="839.25" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0.231" stop-color="#999875"/><stop offset="0.563" stop-color="#9b9977"/><stop offset="0.683" stop-color="#a09f7e"/><stop offset="0.768" stop-color="#a9a889"/><stop offset="0.837" stop-color="#b7b69a"/><stop offset="0.896" stop-color="#c9c7b0"/><stop offset="0.948" stop-color="#deddcb"/><stop offset="0.994" stop-color="#f8f6eb"/><stop offset="1" stop-color="#fbf9ef"/></linearGradient><linearGradient id="b" x1="-644.287" y1="823.405" x2="-657.028" y2="845.476" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#48a547"/><stop offset="1" stop-color="#3f9143"/></linearGradient><linearGradient id="c" x1="-643.386" y1="839.485" x2="-652.418" y2="833.417" gradientTransform="matrix(-0.977, -0.323, -0.29, 0.877, -375.944, -928.287)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41a247"/><stop offset="0.352" stop-color="#4ba74b"/><stop offset="0.956" stop-color="#67b554"/><stop offset="1" stop-color="#69b655"/></linearGradient></defs><title>file_type_mongo</title><path d="M16.62,30l-.751-.249s.1-3.8-1.275-4.067c-.9-1.048.133-44.741,3.423-.149a2.712,2.712,0,0,0-1.333,1.523A14.1,14.1,0,0,0,16.62,30Z" style="fill:url(#a)"/><path d="M17.026,26.329a13.223,13.223,0,0,0,5-13.225C20.556,6.619,17.075,4.487,16.7,3.673a9.792,9.792,0,0,1-.825-1.6l.277,18.069S15.578,25.664,17.026,26.329Z" style="fill:url(#b)"/><path d="M15.487,26.569S9.366,22.4,9.72,15.025A15.54,15.54,0,0,1,15.239,3.377,1.725,1.725,0,0,0,15.846,2c.381.82.319,12.243.359,13.579C16.36,20.776,15.916,25.588,15.487,26.569Z" style="fill:url(#c)"/></svg>',
  Git: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" fill="none"> <path d="M2.58536 17.4132C1.80488 16.6327 1.80488 15.3673 2.58536 14.5868L14.5868 2.58536C15.3673 1.80488 16.6327 1.80488 17.4132 2.58536L29.4146 14.5868C30.1951 15.3673 30.1951 16.6327 29.4146 17.4132L17.4132 29.4146C16.6327 30.1951 15.3673 30.1951 14.5868 29.4146L2.58536 17.4132Z" fill="#EE513B"/> <path d="M12.1489 5.06152L10.9336 6.27686L14.0725 9.41577C13.9455 9.68819 13.8746 9.99201 13.8746 10.3124C13.8746 11.222 14.4461 11.9981 15.2496 12.3012V19.9798C14.4461 20.2829 13.8746 21.059 13.8746 21.9686C13.8746 23.1422 14.826 24.0936 15.9996 24.0936C17.1732 24.0936 18.1246 23.1422 18.1246 21.9686C18.1246 21.144 17.6549 20.429 16.9684 20.0768V12.3117L19.9689 15.3122C19.8481 15.5791 19.7809 15.8754 19.7809 16.1874C19.7809 17.361 20.7323 18.3124 21.9059 18.3124C23.0795 18.3124 24.0309 17.361 24.0309 16.1874C24.0309 15.0138 23.0795 14.0624 21.9059 14.0624C21.6778 14.0624 21.4582 14.0983 21.2522 14.1648L18.0297 10.9423C18.0914 10.7433 18.1246 10.5317 18.1246 10.3124C18.1246 9.13878 17.1732 8.18738 15.9996 8.18738C15.7803 8.18738 15.5688 8.22061 15.3697 8.2823L12.1489 5.06152Z" fill="white"/> </svg>',
  JavaScript:
    '<svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img"  width="24" height="24" viewBox="0 0 512 512"><rect width="512" height="512" rx="15%" fill="#f7df1e"/><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"/></svg>',
  MySQL:
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><title>file_type_mysql</title><path d="M8.785,6.865a3.055,3.055,0,0,0-.785.1V7h.038a6.461,6.461,0,0,0,.612.785c.154.306.288.611.441.917.019-.019.038-.039.038-.039a1.074,1.074,0,0,0,.4-.957,4.314,4.314,0,0,1-.23-.4c-.115-.191-.364-.287-.517-.44" style="fill:#5d87a1;fill-rule:evenodd"/><path d="M27.78,23.553a8.849,8.849,0,0,0-3.712.536c-.287.115-.745.115-.785.478.154.153.172.4.307.613a4.467,4.467,0,0,0,.995,1.167c.4.306.8.611,1.225.879.745.461,1.588.728,2.314,1.187.422.268.842.612,1.264.9.21.153.343.4.611.5v-.058a3.844,3.844,0,0,0-.291-.613c-.191-.19-.383-.363-.575-.554a9.118,9.118,0,0,0-1.99-1.932c-.613-.422-1.953-1-2.2-1.7l-.039-.039a7.69,7.69,0,0,0,1.321-.308c.65-.172,1.243-.133,1.912-.3.307-.077.862-.268.862-.268v-.3c-.342-.34-.587-.795-.947-1.116a25.338,25.338,0,0,0-3.122-2.328c-.587-.379-1.344-.623-1.969-.946-.226-.114-.6-.17-.737-.36a7.594,7.594,0,0,1-.776-1.457c-.548-1.04-1.079-2.193-1.551-3.293a20.236,20.236,0,0,0-.965-2.157A19.078,19.078,0,0,0,11.609,5a9.07,9.07,0,0,0-2.421-.776c-.474-.02-.946-.057-1.419-.075A7.55,7.55,0,0,1,6.9,3.485C5.818,2.8,3.038,1.328,2.242,3.277,1.732,4.508,3,5.718,3.435,6.343A8.866,8.866,0,0,1,4.4,7.762c.133.322.171.663.3,1A22.556,22.556,0,0,0,5.687,11.3a8.946,8.946,0,0,0,.7,1.172c.153.209.417.3.474.645a5.421,5.421,0,0,0-.436,1.419,8.336,8.336,0,0,0,.549,6.358c.3.473,1.022,1.514,1.987,1.116.851-.34.662-1.419.908-2.364.056-.229.019-.379.132-.53V19.3s.483,1.061.723,1.6a10.813,10.813,0,0,0,2.4,2.59A3.514,3.514,0,0,1,14,24.657V25h.427A1.054,1.054,0,0,0,14,24.212a9.4,9.4,0,0,1-.959-1.16,24.992,24.992,0,0,1-2.064-3.519c-.3-.6-.553-1.258-.793-1.857-.11-.231-.11-.58-.295-.7a7.266,7.266,0,0,0-.884,1.313,11.419,11.419,0,0,0-.517,2.921c-.073.02-.037,0-.073.038-.589-.155-.792-.792-1.014-1.332a8.756,8.756,0,0,1-.166-5.164c.128-.405.683-1.681.461-2.068-.111-.369-.48-.58-.682-.871a7.767,7.767,0,0,1-.663-1.237C5.912,9.5,5.69,8.3,5.212,7.216a10.4,10.4,0,0,0-.921-1.489A9.586,9.586,0,0,1,3.276,4.22c-.092-.213-.221-.561-.074-.793a.3.3,0,0,1,.259-.252c.238-.212.921.058,1.16.174a9.2,9.2,0,0,1,1.824.967c.258.194.866.685.866.685h.18c.612.133,1.3.037,1.876.21a12.247,12.247,0,0,1,2.755,1.32,16.981,16.981,0,0,1,5.969,6.545c.23.439.327.842.537,1.3.4.94.9,1.9,1.3,2.814a12.578,12.578,0,0,0,1.36,2.564c.286.4,1.435.612,1.952.822a13.7,13.7,0,0,1,1.32.535c.651.4,1.3.861,1.913,1.3.305.23,1.262.708,1.32,1.091" style="fill:#00758f;fill-rule:evenodd"/></svg>',
  SCRUM:
    '<svg viewBox="0 0 32 32" version="1.1" width="24" height="24" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#00000" stroke="#00000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M20.649 21.349c0.064 0.004 0.133 0.012 0.202 0.012 0.977 0.001 1.955-0.005 2.932 0.005 0.214 0.002 0.278-0.071 0.267-0.276-0.014-0.267-0.003-0.535-0.003-0.865 1.109 0.816 2.181 1.604 3.281 2.414-1.092 0.804-2.164 1.593-3.281 2.416 0-0.311 0-0.568-0-0.825-0-0.332-0-0.333-0.323-0.333-6.247 0-12.495 0-18.742 0-0.302 0-0.302-0-0.302-0.304 0-0.659 0.009-1.318-0.005-1.976-0.005-0.214 0.064-0.262 0.269-0.261 3.359 0.006 6.718 0.011 10.077 0.002 1.722-0.005 3.081-0.718 3.98-2.202 1.622-2.68-0.069-6.19-3.177-6.642-2.4-0.349-4.631 1.262-5.038 3.703-0.043 0.254-0.046 0.515-0.071 0.821 0.393-0.053 0.749-0.102 1.152-0.156-0.631 1.22-1.24 2.398-1.858 3.592-0.947-0.976-1.88-1.937-2.792-2.877 0.229-0.038 0.533-0.082 0.834-0.145 0.057-0.012 0.141-0.104 0.139-0.157-0.017-0.639 0.027-1.271 0.152-1.898 0.004-0.019-0.005-0.041-0.011-0.078-0.61-0.104-1.176-0.324-1.689-0.678-1.254-0.868-1.91-2.483-1.602-3.955 0.335-1.604 1.545-2.803 3.109-3.099 1.014-0.191 1.954-0.009 2.827 0.527 0.154 0.095 0.248 0.109 0.349-0.056 0.059-0.097 0.148-0.175 0.25-0.293 0.127 0.512 0.246 0.991 0.364 1.47 0.040 0.161 0.071 0.325 0.118 0.484 0.051 0.172-0.001 0.249-0.183 0.237-0.526-0.036-1.053-0.068-1.579-0.103-0.13-0.009-0.259-0.023-0.426-0.039 0.13-0.164 0.248-0.311 0.377-0.472-0.284-0.216-0.597-0.324-0.923-0.377-1.576-0.258-2.965 0.953-2.933 2.548 0.024 1.224 1.056 2.318 2.275 2.422 0.158 0.013 0.213-0.067 0.274-0.185 0.864-1.658 2.165-2.83 3.935-3.44 4.095-1.412 8.37 1.118 9.159 5.259 0.389 2.039-0.054 3.901-1.291 5.57-0.034 0.046-0.065 0.095-0.095 0.144-0.006 0.009 0.002 0.027 0.007 0.065z"></path> </g></svg>',
  Bootstrap:
    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 256 256" version="1.1" preserveAspectRatio="xMidYMid"> <g> <path d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z" fill="#563D7C"> </path> <path d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z" fill="#FFFFFF"> </path> </g> </svg>',
};
