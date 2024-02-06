import { NextResponse } from "next/server";
import { db } from "@/app/_lib/db";
import { hash } from "bcrypt";

export async function GET(req: Request, res: Response) {
    const users = await db.user.findMany();

    return NextResponse.json({ users }, { status: 200 });
}

export async function POST(req: Request, res: Response) {
    try {
        const body = await req.json();

        const { email, username, password } = body;

        // check if email exists
        const existingUserByEmail  = await db.user.findUnique({
            where: {
                email: email
            }
        });

        if (existingUserByEmail) {
            return NextResponse.json({
                user: null,
                nessage: "Email already exists"
            },
            { status: 400});
        }

         // check if username exists
         const existingUserByUsername  = await db.user.findUnique({
            where: {
                username: username
            }
        });

        if (existingUserByUsername) {
            return NextResponse.json({
                user: null,
                nessage: "Username already exists"
            },
            { status: 400});
        }

        const hashedPassword = await hash(password, 10);

        const newUser = await db.user.create({  
            data: { 
                email, 
                username, 
                password: hashedPassword 
            } 
        });

        const { password: newUserPassword, ...rest } = newUser;

        return NextResponse.json({
            user: rest, 
            message: "User created successfully"
        },
        { status: 201 });

    } catch (error) {
        return NextResponse.json({
            user: null,
            message: "An error occured"
        },
        { status: 500 });
    }
}