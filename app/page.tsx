import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
     
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          
         <div style={{padding:20}}>

        <h1>Welcome</h1>

<Link href={"/register"}>Register</Link>
<Link href={"/login"}>Login</Link>
<Link href={"/admin/login"}>Admin Login</Link>


       </div>




        </div>
        
      </main>
    </div>
  );
}
