import { ArrowRight, Users, Trophy, Star, CheckCircle, Play, Book, Calendar, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import TestimonialCard from '@/components/TestimonialCard';
import StatsSection from '@/components/StatsSection';
import FounderStory from '@/components/FounderStory';


const Index = () => {
  const courses = [
    
    {
      title: "DevSecOps Professional",
      description: "Advanced security integration in DevOps workflows and compliance frameworks",
      duration: "16 weeks", 
      level: "Advanced",
      price: "₹25,000",
      features: ["Security Tools", "Kubernetes", "Docker", "Cloud Platforms", "Microservices","Compliance", "Advanced Projects", "Mentorship"],
      image: "photo-1498050108023-c5249f4df085"
    },
    {
      title: "Python",
      description: "Master the fundamentals of Python programming, from syntax to advanced concepts like OOP and file handling.",
      duration: "soon",
      level: "Stay tune for updates",
      price: "soon",
      features: ["Hands-on Labs", "Real Projects", "Job Assistance", "Certificate"],
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "SQL",
      description: "Kubernetes, Docker, and modern cloud-native development practices",
      duration: "--",
      level: "Stay tune for updates", 
      price: "soon",
      features: ["DDL", "DML", "DQL", "TCL","JOINS"],
      image: "photo-1488590528505-98d2b5aba04b"
    }
  ];
    const bannerSlides = [
    {
      id: 1,
      title: "New DevOps Batch Starting Soon!",
      subtitle: "Join Our Next Cohort - Limited Seats Available",
      description: "Transform your career with our comprehensive DevOps training program. Expert instructors, hands-on projects, and job guarantee.",
      image: "photo-1649972904349-6e44c42644a7",
      ctaText: "Enroll Now",
      bgGradient: "from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "Python & SQL Courses Open!",
      subtitle: "Master Programming & Database Skills",
      description: "Build your foundation in programming and data management. Perfect for beginners and career switchers.",
      image: "photo-1518770660439-4636190af475",
      ctaText: "View Courses",
      bgGradient: "from-green-600 to-blue-600"
    }
  ];

  const testimonials = [
    {
      name: "Αniketh",
      role: "DevOps Engineer at Public Sapient",
      content: "Thank you, sir. I am very happy to have a mentor like you sir. You helped me a lot to learn about new technologies and how to implement them. We are very lucky to have had a trainer like you sir at the beginning of our career. Miss you sir",
      rating: 5,
      image: "/Test_img/aniketh.png"
    },
    {
      name: "Vineet", 
      role: "Devops engineer, US",
      content: "Hi Sir, Thank you so much for the training and i had learnt a lot from you, not only as regarding the knowledge in DevOps but also how you teach and manage Urself between multiple activities like teaching, sports, social activities.I can happily say it is very pleasure meeting you and learning from you and still continue it. Finally, Bottom of my heart a sincere thank you.",
      rating: 5,
      image: "/Test_img/Vineet.png"
    },
    {
      name: "Javeed",
      role: "Devops Engineer",
      content: "Thank you, Murali, for generously sharing your knowledge with us.You covered almost all the topics discussed  session thoroughly, and your insights were truly valuable. We appreciate your effort and hope to continue receiving your support and guidance in the future to help us grow in our careers.Thank you once again!",
      rating: 5,
      image:  "/Test_img/javeed.png"
    },
    {
      name: "Pradeep",
      role: "Devops Engineer, US",
      content: "Hi murali, your training was good, you have been very calm in explaining almost every topics... Way of explaining the hands on and making us understand shows your best knowledge... thank you for training and encouragement.",
      rating: 5,
      image: "/Test_img/pradeep.png"
    },
    {
      name: "ABHINAYA SRI",
      role: "Devops Engineer",
      content: "Thank you, Murali Mohan sir, for providing us with hands-on training and encouraging us to think differently. Your guidance has been invaluable in helping us solve our queries and deepen our understanding.These trainings have broadened my perspective and allowed me to design a case study that integrates all the technologies I've been learning. The transition from college to corporate training has been eye-opening, as these sessions are deeply rooted in real-world applications.",
      rating: 5,
      image: "/Test_img/abhinaya.png"
    },
    {
      name: "Vaishnavi",
      role: "Manager",
      content: "It's been quite a good experience working with Clahan technologies the team consisting of Murali, Mobin, Michael and Simon. Their deliverable has been good and they have been quite accommodating about the back and forth involved with our engineering teams.The team has also provided guidance and knowledge transfer to our internal teams.Certainly looking forward to working with them on a long term.",
      rating: 5,
      image: "/Test_img/vaishnavi.jpg"
    },
    {
      name: "Adebayo",
      role: "Devops Engineer",
      content: "Thank you for the training session, it was a wonderful and awesome experience. We really appreciate your worth of experience as per the hands on aspect. I feel much better prepared to deal with different issues. We love you..!",
      rating: 5,
      image: "/Test_img/adebayo.png"
    },
    {
      name: "Kaushik",
      role: "Devops Engineer",
      content: "The training was good with more hands on and explanation of concepts. During the training when we had any issues you made us solve the issue by ourselves which helped us to improve our trouble shooting skills and the feedback provided by you throughout the training helped us to improve presentation and communication skills. You were always approachable whenever we had any issues or problems. Thank you for everything sir.",
      rating: 5,
      image: "/Test_img/kaushik.png"
    },
     {
      name: "Maruthi Rao",
      role: "Devops Engineer",
      content: "Currently I am working as DevOps role in one of leading company. Thanks for your support murali. I can happily say it is very pleasure meeting you and learning from you and still continue it. This is good opportunity to learn new things as DevOps Engineer.",
      rating: 5,
      image: "/Test_img/Maruthi.png"
    },
    {
      name: "Affu",
      role: "Devops Engineer",
      content: "I just wanted to say a big thank you for all your help during my training. Your knowledge, patience, and encouragement meant a lot to me. Learning about Java, Node.js, microservices, Docker, Kubernetes, AWS, DevOps, Ansible, Linux, ITIL, ITSM, Data Dog, and Service Now was really interesting, especially with your guidance. The projects we worked on together helped me understand everything better and got me excited about these technologies.You're really good at explaining complicated stuff in a way that's easy to understand. Each session felt like a cool adventure, and I learned so much about the systems and tools we used.",
      rating: 5,
      image: "/Test_img/affu.png"
    },
     {
      name: "Prasanya",
      role: "Devops Engineer",
      content: "This was surely the best trainer I've attended so far sir. You were really a great trainer and moreover a great friend to all of us. You motivate each one of us to achieve more and to improve ourselves everyday. Apart from being a trainer you were a mentor to each one of us and the best advisor.Thank you for everything sir.",
      rating: 5,
      image: "/Test_img/prasanya.png"
    },
    {
      name: "Akashra",
      role: "Devops Engineer",
      content: "Sir, more than a trainer you have been a great friend to all of us. You have always given us the right feedback. There are days when we didn't do well, but your feedback on areas where to improve has helped us do better in the next presentations. And you have always stressed on the importance of learning continuously, you have exposed us to new technologies.. all these things we will remember for life",
      rating: 5,
      image: "/Test_img/Akashra.png"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              🚀 Transform Your Career in Tech
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent leading-tight">
              Master DevOps & Launch Your Tech Career
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful graduates who transitioned to high-paying DevOps roles. 
              Practical training designed for freshers, graduates, and career switchers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg group">
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg group">
                <Play className="mr-2 h-5 w-5" />
                Watch Success Stories
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Job Guarantee Program
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Industry Expert Instructors
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Hands-on Projects
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
         </section>

      {/* Banner Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {bannerSlides.map((slide) => (
                  <CarouselItem key={slide.id}>
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${slide.bgGradient} text-white`}>
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12">
                        <div className="flex-1 mb-8 lg:mb-0 lg:mr-8">
                          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                            {slide.title}
                          </h2>
                          <h3 className="text-xl lg:text-2xl mb-4 opacity-90">
                            {slide.subtitle}
                          </h3>
                          <p className="text-lg mb-6 opacity-80 max-w-2xl">
                            {slide.description}
                          </p>
                          <Button 
                            size="lg" 
                            variant="secondary" 
                            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3"
                          >
                            {slide.ctaText}
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Button>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="w-80 h-60 lg:w-96 lg:h-72 rounded-xl overflow-hidden shadow-2xl">
                            <img
                              src={`https://images.unsplash.com/${slide.image}?auto=format&fit=crop&w=800&q=80`}
                              alt={slide.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Structured courses designed to take you from beginner to industry-ready professional
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Book className="mr-2 h-5 w-5" />
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Founder Story Section */}
      <FounderStory />

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Clahan Technologies?</h2>
            <p className="text-xl text-gray-600">We understand the challenges of breaking into tech</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Job-Focused Training</h3>
              <p className="text-gray-600">Curriculum designed with hiring managers to match industry requirements</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">1:1 Mentorship</h3>
              <p className="text-gray-600">Personal guidance from industry experts throughout your journey</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real Projects</h3>
              <p className="text-gray-600">Build portfolio with actual DevOps implementations and deployments</p>
            </Card>
            
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flexible Schedule</h3>
              <p className="text-gray-600">Weekend and evening batches for working professionals</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Success Stories</h2>
            <p className="text-xl text-gray-600">See how our graduates transformed their careers</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <TestimonialCard {...testimonial} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our next batch starting soon. Limited seats available with job guarantee.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
              Book Free Career Consultation
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-blue-600">
              Download Course Syllabus
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
