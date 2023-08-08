import Replicate from "replicate";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { incrementApiLimit, checkApiLimit } from "@/lib/api-limit";
import { getSubscription } from "@/lib/subscription";

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN!,
});

export async function POST(
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { prompt } = body;

        if (!userId) return new NextResponse("Unauthorized", { status: 401 });
        if (!prompt) return new NextResponse("Prompt is required", { status: 400 });

        const freeTier = await checkApiLimit();
        const isPro = await getSubscription()

        if (!freeTier && !isPro) return new NextResponse('Free tier limit reached', { status: 403 });

        const response = await replicate.run(
            "anotherjesse/zeroscope-v2-xl:9f747673945c62801b13b84701c783929c0ee784e4748ec062204894dda1a351",
            {
                input: {
                    prompt
                }
            }
        );

        if (!isPro) {
            await incrementApiLimit();
        }

        return NextResponse.json(response);
    } catch (error) {
        console.log('[VIDEO ERROR:]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};