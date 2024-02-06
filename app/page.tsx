import  Link from "next/link";
import { buttonVariants } from "./_components/ui/button";


export default function Home() {
    return (
        <div>
            <h1 className='text-4xl'>
                Home
            </h1>
            <Link className={buttonVariants()} href="/admin">
                Open My Admin
            </Link>
        </div>
    );
}
