import Link from "next/link";
import AuthModal from "./AuthModal";

export default function NavBar() {
  return (
    <nav className="bg-white p-2 flex justify-between">
      <Link href="/" className="font-bold text-gray-700 text-2xl">
        OpenTable
      </Link>
      <div>
        <div className="flex">
            <AuthModal isSignIn={true}/>
            <AuthModal isSignIn={false}/>
        </div>
      </div>
    </nav>
  );
}
