import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";


interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href?: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const media = video ? (
    <video
      src={video}
      autoPlay
      loop
      muted
      playsInline
      className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
    />
  ) : image ? (
    <img
      src={image}
      alt={title}
      width={500}
      height={300}
      className="h-40 w-full overflow-hidden object-cover object-top"
    />
  ) : null;

  return (
    <Card
      className={cn(
        "flex flex-col overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 ease-out h-full",
        className
      )}
    >
      {href ? (
        <a
          href={href}
          className="block cursor-pointer text-decoration-none"
          target="_blank"
          rel="noreferrer"
        >
          {media}
        </a>
      ) : (
        <div className="block text-decoration-none">{media}</div>
      )}
      <CardHeader className="p-3">
        <div className="space-y-1">
          <CardTitle className="text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-2 mt-auto flex flex-col px-3">
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px] rounded-md"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-3 pb-3">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links.map((link, idx) =>
              link.href ? (
                <a href={link.href} key={idx} target="_blank" rel="noreferrer">
                  <Badge className="flex gap-2 px-2 py-1 text-[10px] rounded-md">
                    {link.icon}
                    {link.type}
                  </Badge>
                </a>
              ) : (
                <Badge
                  key={idx}
                  className="flex gap-2 px-2 py-1 text-[10px] rounded-md"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              )
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
