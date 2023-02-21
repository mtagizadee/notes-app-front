import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

interface IProfileImageProps {
  image: string;
  nickname: string;
  className?: string;
}

const ProfileImage: FC<IProfileImageProps> = ({ image, nickname, className }) => {
  return (
    <img
      className={twMerge("w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0", className)}
      src={image}
      alt={nickname}
    />
  );
};

export default ProfileImage;
