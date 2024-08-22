import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-2xl font-bold">Quickshort</p>
          <p className="text-sm">Created by Vishal</p>
        </div>
        <div>
          <a
            href="https://github.com/vishal0316"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Github className="w-5 h-5 mr-1" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
