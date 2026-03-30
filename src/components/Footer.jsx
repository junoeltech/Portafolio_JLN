import * as LucideIcons from "lucide-react";

const Footer = () => {
  // Buscamos el icono dinámicamente para evitar el error de export
  const GitHubIcon = LucideIcons.GitHub || LucideIcons.Github;
  const LinkedinIcon = LucideIcons.Linkedin;
  const TwitterIcon = LucideIcons.Twitter;

  return (
    <footer className="bg-zinc-950 py-8 border-t border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xl font-bold text-white tracking-tighter">
          JLN <span className="text-[#EEB56F]">Software</span>
        </div>
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} JLN Software Solutions.
        </p>
        <div className="flex gap-4">
          {LinkedinIcon && (
            <a href="#">
              <LinkedinIcon size={20} />
            </a>
          )}
          {GitHubIcon && (
            <a href="#">
              <GitHubIcon size={20} />
            </a>
          )}
          {TwitterIcon && (
            <a href="#">
              <TwitterIcon size={20} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
