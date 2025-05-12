
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime?: string;
  commentCount?: number;
  isHot?: boolean;
}

interface NewsCardProps {
  article: NewsArticle;
  className?: string;
  variant?: 'default' | 'featured';
}

const NewsCard: React.FC<NewsCardProps> = ({ 
  article, 
  className,
  variant = 'default'
}) => {
  const { id, title, excerpt, image, category, date, readTime, commentCount, isHot } = article;
  
  const isFeatured = variant === 'featured';
  
  return (
    <Card className={cn(
      "football-card overflow-hidden group h-full",
      isFeatured && "md:flex",
      className
    )}>
      {/* Изображение */}
      <div className={cn(
        "relative h-48 overflow-hidden",
        isFeatured && "md:h-auto md:w-2/5"
      )}>
        <Link to={`/news/${id}`}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>
        
        {/* Метка категории */}
        <div className="absolute top-3 left-3 bg-accent/90 text-white px-2 py-1 text-xs font-medium rounded">
          {category}
        </div>
        
        {/* Индикатор горячей новости */}
        {isHot && (
          <div className="absolute top-3 right-3 bg-jersey/90 text-white px-2 py-1 text-xs font-medium rounded flex items-center gap-1">
            <Icon name="Flame" size={14} />
            <span>Горячее</span>
          </div>
        )}
      </div>
      
      {/* Контент */}
      <div className={cn(
        "flex flex-col",
        isFeatured && "md:w-3/5"
      )}>
        <CardContent className={cn(
          "flex-grow",
          isFeatured ? "p-5" : "p-4" 
        )}>
          <div className="space-y-2">
            <Link to={`/news/${id}`} className="inline-block">
              <h3 className={cn(
                "font-oswald leading-tight hover:text-accent transition-colors",
                isFeatured ? "text-xl md:text-2xl" : "text-lg"
              )}>
                {title}
              </h3>
            </Link>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {excerpt}
            </p>
          </div>
        </CardContent>
        
        <CardFooter className={cn(
          "flex justify-between items-center border-t p-4 text-xs text-muted-foreground",
          isFeatured && "px-5"
        )}>
          <div className="flex items-center">
            <Icon name="Calendar" size={14} className="mr-1" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-3">
            {readTime && (
              <div className="flex items-center">
                <Icon name="Clock" size={14} className="mr-1" />
                <span>{readTime}</span>
              </div>
            )}
            
            {(commentCount !== undefined) && (
              <div className="flex items-center">
                <Icon name="MessageSquare" size={14} className="mr-1" />
                <span>{commentCount}</span>
              </div>
            )}
          </div>
        </CardFooter>
      </div>
    </Card>
  );
};

export default NewsCard;
