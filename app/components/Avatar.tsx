'use client';

import Image from "next/image";

interface AvatarProps {
    src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
    return <Image className="rounded-full ml-2" height={30} width={30} alt="avatar" src={src || "/images/placeholder.jpg"} />
}

export default Avatar;
