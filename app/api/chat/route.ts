import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai'

import { checkApiLimit, incrementApiLimit } from '@/lib/api-limit';
import { getSubscription } from '@/lib/subscription';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)


export const POST = async (req: Request) => {
    console.log(req.body);

    try {
        const { userId } = auth()
        const body = await req.json()
        const { messages } = body

        if (!userId) return new NextResponse('Unauthorized', { status: 401 });
        if (!configuration.apiKey) return new NextResponse('Open AI API Keys not configured', { status: 500 });
        if (!messages) return new NextResponse('No messages found', { status: 400 });

        const freeTier = await checkApiLimit();
        const isPro = await getSubscription()

        if (!freeTier && !isPro) return new NextResponse('Free tier limit reached', { status: 403 });

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages
        })

        if (!isPro) {
            await incrementApiLimit();
        }

        return NextResponse.json(response.data.choices[0].message);


    } catch (err) {
        console.log(`Conversation error: ${err}`);
        return new NextResponse(`Internal error: ${err}`, { status: 500 });
    }
}