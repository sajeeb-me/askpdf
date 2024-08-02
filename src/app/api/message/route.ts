import { db } from "@/db";
import { SendMessageValidator } from "@/lib/validators/SendMessageValidator";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
    // endpoint for asking question to a pdf

    const body = await req.json();

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    const userId = user?.id;
    // const { id: userId } = user;

    if (!userId)
        return new Response('Unauthorized', { status: 401 });

    const { fileId, message } = SendMessageValidator.parse(body);

    const file = await db.file.findFirst({
        where: {
            id: fileId,
            userId,
        }
    });

    if (!file)
        return new Response('File not found', { status: 404 });

    await db.message.create({
        data: {
            fileId,
            message,
            userId,
        }
    });
}