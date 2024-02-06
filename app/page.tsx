import  Link from "next/link";
import { buttonVariants } from "./_components/ui/button";
import { User } from "lucide-react";
import { getServerSession } from "next-auth";
import { authOptions } from "./_lib/auth";


export default async function Home() {

    const session = await getServerSession(authOptions);
    
    return (
        <div>
            <h1 className='text-4xl'>
                Home
            </h1>
            <Link className={buttonVariants()} href="/admin">
                Open My Admin
            </Link>

            <h2>Client Session</h2>
            <User />
            <h2>Server Session</h2>
            { JSON.stringify(session, null, 2) }
        </div>
    );
}
