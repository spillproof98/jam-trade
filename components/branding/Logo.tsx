import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/discover" className="flex items-center gap-2">
      <Image
        src="/logo/jam-logo.png"
        alt="Jam Trade"
        width={28}
        height={28}
        priority
      />
      <span className="text-sm font-semibold tracking-wide">
      </span>
    </Link>
  );
}
