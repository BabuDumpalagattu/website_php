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
    <Card className="relative group hover:shadow-lg transition-all duration-300 h-full flex flex-col justify-between rounded-xl border border-gray-200">
      <CardContent className="p-6 flex flex-col h-full justify-between">
        {/* Quote Icon */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="h-10 w-10 text-blue-500" />
        </div>

        {/* Top content */}
        <div className="mb-4">
          <div className="flex items-center mb-3">
            <img
              src={
                image.startsWith('/')
                  ? image
                  : `https://images.unsplash.com/${image}?auto=format&fit=crop&w=150&q=80`
              }
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div>
              <h4 className="font-semibold text-gray-900 text-base">{name}</h4>
              <p className="text-sm text-gray-600">{role}</p>
            </div>
          </div>

          <div className="flex items-center mb-3">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
            ))}
          </div>

          <p className="text-gray-700 text-sm leading-relaxed italic whitespace-pre-line">
            "{content}"
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
