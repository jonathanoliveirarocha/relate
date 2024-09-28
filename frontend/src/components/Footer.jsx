import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="max-w-6xl mx-auto py-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-secondary text-sm italic">
            <p>&copy; 2024 Relate. Todos os direitos reservados.</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/jonathanoliveirarocha/relate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/company/somerelate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
