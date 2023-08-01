import { Code, ImageIcon, MessageSquare, Music, VideoIcon } from "lucide-react";

export const MAX_FREE_COUNTS = 30;

export const tools = [
    {
        label: 'Chat',
        icon: MessageSquare,
        href: '/chat',
        color: "text-violet-500",
        bgColor: "bg-violet-500/10",

    },
    {
        label: 'Image Generator',
        icon: ImageIcon,
        color: "text-orange-700",
        bgColor: "bg-orange-700/10",
        href: '/image',
    },
    {
        label: 'Video Generator',
        icon: VideoIcon,
        color: "text-prink-700",
        bgColor: "bg-pink-700/10",
        href: '/video',
    },
    {
        label: 'Music Generator',
        icon: Music,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        href: '/music',
    },
    {
        label: 'Code Generator',
        icon: Code,
        color: "text-blue-700",
        bgColor: "bg-blue-700/10",
        href: '/code',
    },
];