"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Youtube, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProfileCardProps {
  name?: string;
  title?: string;
  imageUrl?: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ProfileCard({
  name = "Ms. Gurleen Kaur",
  title = "Founder & Creative Director",
  imageUrl = "/images/gurleen.png",
  githubUrl = "#",
  twitterUrl = "#",
  youtubeUrl = "#",
  linkedinUrl = "#",
  className,
  children,
}: ProfileCardProps) {
  const socials = [
    { icon: Github, url: githubUrl },
    { icon: Twitter, url: twitterUrl },
    { icon: Youtube, url: youtubeUrl },
    { icon: Linkedin, url: linkedinUrl },
  ];

  return (
    <div className={cn("w-full max-w-7xl mx-auto", className)}>
      <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-0">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="font-cursive text-primary">{name}</span>
            </h2>
            <p className="text-xl font-medium text-muted-foreground mt-2">
              {title}
            </p>
          </div>

          {/* 👇 injected content */}
          {children}

          <div className="flex gap-4 pt-4">
            {socials.map(({ icon: Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:scale-105 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
