import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between">
      <CardContent className="p-6 flex flex-col justify-between h-full">
        <div>
          {/* Quote Icon */}
          <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Quote className="h-12 w-12 text-blue-600" />
          </div>

          {/* User Info */}
          <div className="flex items-center mb-4">
            <img 
              src={
                image.startsWith('/')
                  ? image // Local image
                  : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=150&q=80`
              }
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
            ))}
          </div>

          {/* Testimonial Text */}
          <p className="text-gray-700 leading-relaxed italic">
            "{content}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
