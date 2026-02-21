import { bio } from "../data/content";

export default function Header() {
  return (
    <header className="mb-12">
      <p className="text-[26px] leading-relaxed text-gray-900 max-w-[671px]">{bio.text}</p>
    </header>
  );
}
