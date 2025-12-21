import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card } from './ui/card'
import { motion } from 'framer-motion'

interface ResumeCardProps {
  logoUrl: string
  altText: string
  title: string
  subtitle?: string
  badges?: readonly string[]
  period?: string
  description?: string
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  badges,
  period,
  description
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault()
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <a className="block cursor-pointer" onClick={handleClick}>
      <Card className="flex shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex-none mt-6 ml-6 md:mt-7 md:ml-7">
          <Avatar className="m-auto bg-muted-background dark:bg-foreground">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain"
            />
            <AvatarFallback>{altText[0]}</AvatarFallback>
          </Avatar>
        </div>

        <div className="flex-grow items-center flex-col group">
          <div className="text-xs sm:text-sm p-6 md:p-7">
            <div className="flex items-center justify-between gap-2 text-base">
              <h3 className="flex items-center justify-center gap-1 min-h-[22px] font-semibold leading-none text-sm md:text-md">
                {title}

                {badges?.length ? (
                  <span className="flex items-center gap-1">
                    {badges.map((badge, index) => (
                      <Badge
                        variant="secondary"
                        className="align-middle text-xs"
                        key={index}
                      >
                        {badge}
                      </Badge>
                    ))}
                  </span>
                ) : null}

                {description && (
                  <span className="flex items-center h-4 w-4 ml-[-4px] transition-transform duration-300 group-hover:translate-x-2 opacity-0 group-hover:opacity-100 text-muted-foreground">
                    →
                  </span>
                )}
              </h3>

              <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
                {period}
              </div>
            </div>

            {subtitle && <div className="font-sans text-xs">{subtitle}</div>}

            {description && (
              <motion.div
                className="text-xs sm:text-sm text-muted-foreground overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? 'auto' : 0
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                <p className="pt-4">{description}</p>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </a>
  )
}

import React from 'react'
