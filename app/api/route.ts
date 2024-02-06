import { getServerSession } from "next-auth";
import { authOptions } from "../_lib/auth";
import { NextResponse } from "next/server";

export const GET = async (req: Request, res: Response) => {
    const session = await getServerSession(authOptions);

    return NextResponse.json({ authenticated: !!session });
}