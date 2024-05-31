"use client";
import { Button } from "@/components/ui/button";
import { useUserSession } from "@/hooks/use-user-session";
import { signInWithGoogle, signOutWithGoogle } from "@/lib/firebase/auth";
import { createSession, removeSession } from "@/actions/auth-actions";
import { useRouter } from "next/navigation";
import { HOME_ROUTE, ROOT_ROUTE } from "../../../constant";

const Navbar = ({ session }: { session: string | null }) => {
  const userSessionId = useUserSession(session);
  const router = useRouter();

  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };

  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };
  // if (!userSessionId) {
  //   router.push(ROOT_ROUTE);
  // } else {
  //   router.push(HOME_ROUTE);
  // }

  return (
    <div className="flex justify-between items-center   py-5">
      <div className="flex gap-x-14">
        <h1>Book Library</h1>
        <ul>
          <a href="/for-you">For You</a>
        </ul>
      </div>
      <div className={"gap-x-8 flex"}>
        <Button
          className={
            "bg-primaryPurple border border-primaryBLack font-semibold tracking-wider hover:bg-[#3B2A93]  shadow-lg shadow-[#4f72cd33]"
          }
          onClick={handleSignOut}
        >
          Login
        </Button>
        <Button
          className={
            "border-primaryPurple border-2 hover:bg-[#F2F0FC] shadow shadow-[#4f72cd33]  "
          }
          variant="outline"
          onClick={handleSignIn}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
