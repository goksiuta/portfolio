import { bio } from "../data/content";

export default function Header() {
  return (
    <header className="mb-12">
      <img
        src={bio.avatarUrl}
        alt="Avatar"
        className="w-14 h-14 rounded-2xl mb-5"
      />
      <p className="text-[26px] leading-relaxed text-gray-900 max-w-[671px]">{bio.text}</p>
    </header>
  );
}
