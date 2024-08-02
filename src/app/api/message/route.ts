import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    // endpoint for asking question to a pdf

    const body = await req.json();

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    // const userId = user?.id;
    const { id: userId } = user;

    if (!userId)
        return new Response('Unauthorized', { status: 401 });

    const{}
}