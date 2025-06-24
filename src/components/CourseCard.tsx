import { Clock, Users, Award, Star, StarHalf, StarOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  features: string[];
  image: string;
  syllabus: string;
  rating: number; // Added rating prop
}

// Helper function to render stars
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.3 && rating % 1 <= 0.7; // Approx. half-star logic
  const totalStars = hasHalf ? fullStars + 1 : fullStars;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-4 w-4 text-yellow-500" fill="currentColor" />);
  }

  if (hasHalf) {
    stars.push(<StarHalf key="half" className="h-4 w-4 text-yellow-500" fill="currentColor" />);
  }

  for (let i = totalStars; i < 5; i++) {
    stars.push(<StarOff key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
  }

  return stars;
};

const CourseCard = ({
  title,
  description,
  duration,
  level,
  price,
  features,
  image,
  syllabus,
  rating,
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
      {/* Top Image & Badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={`https://images.unsplash.com/${image}?auto=format&fit=crop&w=600&q=80`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/90 text-gray-900 hover:bg-white">{level}</Badge>
        </div>
        <div className="absolute top-4 right-4">
          <div className="flex items-center bg-white/90 rounded-full px-3 py-1">
            {renderStars(rating)}
            <span className="text-sm font-medium ml-2 text-gray-800">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col justify-between flex-1 p-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <span className="text-2xl font-bold text-blue-600">{price}</span>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {duration}
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              --- students
            </div>
          </div>

          <div className="space-y-2 mb-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center text-sm">
                <Award className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="space-y-2 mt-auto">
          <Link to="/enroll">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 group-hover:scale-105 transition-transform">
              Enroll Now
            </Button>
          </Link>
          <a href={`/${syllabus}`} download>
            <Button
              variant="outline"
              className="w-full border-gray-300 hover:border-blue-600 hover:text-blue-600"
            >
              View Syllabus
            </Button>
          </a>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;
