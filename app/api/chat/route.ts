import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
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

        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages
        })

        return NextResponse.json(response.data.choices[0].message);


    } catch (err) {
        console.log(`Conversation error: ${err}`);
        return new NextResponse(`Internal error: ${err}`, { status: 500 });
    }
}