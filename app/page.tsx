'use client';

import { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  Users,
  Brain,
  Shield,
  Star,
  CheckCircle,
  Calendar,
  MessageCircle,
  ChevronDown,
} from 'lucide-react';
import Image from 'next/image';
import portrait from '@/assets/portrait-young-businesswoman-holding-eyeglasses-hand-against-gray-backdrop.jpg';

// Define types for form data and errors
interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredTime: string;
  agreeToContact: boolean;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
  preferredTime?: string;
  agreeToContact?: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: '',
    agreeToContact: false
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors: FormErrors = {};
    if (!formData.name || formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters';
    if (!formData.phone || formData.phone.length < 10) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email || !formData.email.includes('@')) newErrors.email = 'Please enter a valid email address';
    if (!formData.message || formData.message.length < 10) newErrors.message = 'Please tell us a bit more about what brings you here';
    if (!formData.preferredTime) newErrors.preferredTime = 'Please let us know your preferred contact time';
    if (!formData.agreeToContact) newErrors.agreeToContact = 'You must agree to be contacted';

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setErrors(newErrors);
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <span className="font-bold text-xl text-gray-900">Dr. Serena Blake</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <button 
              onClick={scrollToContact} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2)), url(https://images.pexels.com/photos/6933058/pexels-photo-6933058.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)'
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Path to
            <span className="text-blue-300 block">Healing & Growth</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-100 mb-8 font-light leading-relaxed">
            Compassionate, evidence-based therapy to help you navigate life's challenges
            and discover your inner strength
          </h2>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold rounded-md transition-colors"
            >
              Book a Free Consultation
            </button>
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-md transition-colors"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Dr. Serena Blake</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With over 12 years of experience in clinical psychology, I specialize in helping individuals 
                navigate anxiety, depression, trauma, and relationship challenges. My approach combines 
                evidence-based therapies with genuine compassion to create a safe space for healing.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I believe that everyone has the capacity for growth and resilience. Through our work together, 
                you'll develop practical tools and insights to not just overcome current challenges, but to 
                thrive in all areas of your life.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Licensed Clinical Psychologist</h4>
                    <p className="text-gray-600">Ph.D. in Clinical Psychology</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">12+ Years Experience</h4>
                    <p className="text-gray-600">Specialized in anxiety & trauma</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Evidence-Based Approach</h4>
                    <p className="text-gray-600">CBT, EMDR, and Mindfulness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compassionate Care</h4>
                    <p className="text-gray-600">Safe, judgment-free environment</p>
                  </div>
                </div>
              </div>

              <button 
                onClick={scrollToContact} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Schedule Your Session
              </button>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src={portrait}
                  alt="Dr. Serena Blake"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                  width={800}
                  height={1000}
                  priority
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Star className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">500+ Lives Changed</p>
                      <p className="text-gray-600">Trusted by the community</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive therapeutic services tailored to your unique needs and goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Therapy */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6932824/pexels-photo-6932824.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Individual Therapy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MessageCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Individual Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  One-on-one sessions focused on your personal growth, mental health challenges, and life goals. 
                  Using proven techniques like CBT and mindfulness to help you develop coping strategies.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 50 minutes</p>
                  <p><strong>Frequency:</strong> Weekly or bi-weekly</p>
                  <p><strong>Fee:</strong> $150 per session</p>
                </div>
              </div>
            </div>

            {/* Couples Therapy */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7176319/pexels-photo-7176319.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Couples Therapy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-rose-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-rose-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Couples Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Strengthen your relationship through improved communication, conflict resolution, and emotional 
                  intimacy. Work together to overcome challenges and build a stronger partnership.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 60 minutes</p>
                  <p><strong>Frequency:</strong> Weekly sessions</p>
                  <p><strong>Fee:</strong> $180 per session</p>
                </div>
              </div>
            </div>

            {/* Trauma Therapy */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6932825/pexels-photo-6932825.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Trauma Therapy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Trauma Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Specialized treatment for trauma and PTSD using EMDR and other evidence-based approaches. 
                  Create a safe space to process difficult experiences and develop healthy coping mechanisms.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 60 minutes</p>
                  <p><strong>Frequency:</strong> As needed basis</p>
                  <p><strong>Fee:</strong> $160 per session</p>
                </div>
              </div>
            </div>

            {/* Anxiety & Depression */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Anxiety & Depression"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Brain className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Anxiety & Depression</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Comprehensive treatment for anxiety disorders and depression using cognitive-behavioral therapy, 
                  mindfulness techniques, and lifestyle interventions to help you regain control.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 50 minutes</p>
                  <p><strong>Frequency:</strong> Weekly sessions</p>
                  <p><strong>Fee:</strong> $150 per session</p>
                </div>
              </div>
            </div>

            {/* Group Therapy */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7176344/pexels-photo-7176344.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Group Therapy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Group Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Connect with others facing similar challenges in a supportive group environment. Learn from 
                  shared experiences while developing social skills and building a network of peers.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 90 minutes</p>
                  <p><strong>Frequency:</strong> Weekly sessions</p>
                  <p><strong>Fee:</strong> $75 per session</p>
                </div>
              </div>
            </div>

            {/* Online Therapy */}
            <div className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white rounded-lg overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/6932821/pexels-photo-6932821.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Online Therapy"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Convenient
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Calendar className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Online Therapy</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Access professional therapy from the comfort of your home through secure video sessions. 
                  Perfect for busy schedules, mobility challenges, or those who prefer remote sessions.
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Duration:</strong> 50 minutes</p>
                  <p><strong>Frequency:</strong> Flexible scheduling</p>
                  <p><strong>Fee:</strong> $140 per session</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              All services include a free 15-minute consultation to ensure we're the right fit
            </p>
            <button 
              onClick={scrollToContact} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              Schedule Your Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Common questions about therapy and our practice</p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: 'item-1',
                question: 'How do I know if therapy is right for me?',
                answer: 'Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or develop better coping strategies. If you\'re experiencing persistent feelings of sadness, anxiety, relationship difficulties, or life transitions, therapy can provide valuable support and tools for growth.'
              },
              {
                id: 'item-2',
                question: 'What should I expect in my first session?',
                answer: 'Your first session is an opportunity for us to get to know each other and for you to feel comfortable in the therapeutic space. We\'ll discuss your reasons for seeking therapy, your goals, and your personal history. I\'ll explain my approach and answer any questions you have about the therapy process.'
              },
              {
                id: 'item-3',
                question: 'Do you accept insurance?',
                answer: 'I accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, and UnitedHealth. I also offer sliding scale fees for those who qualify based on financial need. For those paying out-of-pocket, I can provide receipts that you can submit to your insurance for potential reimbursement.'
              },
              {
                id: 'item-4',
                question: 'How long does therapy typically take?',
                answer: 'The length of therapy varies greatly depending on your individual needs, goals, and the issues you\'re addressing. Some people find relief in just a few sessions for specific concerns, while others benefit from longer-term therapy for more complex issues. We\'ll regularly check in about your progress.'
              },
              {
                id: 'item-5',
                question: 'Is online therapy as effective as in-person sessions?',
                answer: 'Research shows that online therapy can be just as effective as in-person therapy for many mental health conditions. The key factors for successful therapy remain the same regardless of the format. Online therapy offers additional benefits like convenience, accessibility, and comfort of being in your own space.'
              }
            ].map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg border border-gray-200">
                <button
                  className="w-full text-left px-6 py-6 flex justify-between items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
                >
                  {faq.question}
                  <ChevronDown className={`h-5 w-5 transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards positive change. Reach out today to schedule your free consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-700">(555) 123-4567</p>
                      <p className="text-sm text-gray-600">Available Mon-Fri 9AM-6PM</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-700">dr.serena@healingpath.com</p>
                      <p className="text-sm text-gray-600">Response within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-700">123 Wellness Street<br />Suite 200<br />San Francisco, CA 94102</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Hours</h4>
                      <p className="text-gray-700">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Support</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    If you're experiencing a mental health emergency, please contact:
                  </p>
                  <p className="text-sm text-gray-700">
                    • National Suicide Prevention Lifeline: 988<br />
                    • Crisis Text Line: Text HOME to 741741<br />
                    • Emergency Services: 911
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border-0 shadow-xl rounded-lg">
                <div className="p-6 border-b">
                  <h3 className="text-2xl font-semibold">Send Me a Message</h3>
                  <p className="text-gray-600 mt-2">
                    Fill out the form below and I'll get back to you within 24 hours to schedule your free consultation.
                  </p>
                </div>
                <div className="p-6">
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. I'll contact you within 24 hours to schedule your free consultation.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name *</label>
                          <input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Enter your full name"
                          />
                          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number *</label>
                          <input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="(555) 123-4567"
                          />
                          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">What brings you here? *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Please share what's on your mind and what you hope to achieve through therapy..."
                          rows={4}
                        />
                        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700">Preferred time to reach you *</label>
                        <input
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="e.g., Weekday mornings, evenings after 6PM"
                        />
                        {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
                      </div>

                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="agreeToContact"
                          checked={formData.agreeToContact}
                          onChange={(e) => setFormData(prev => ({ ...prev, agreeToContact: e.target.checked }))}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="agreeToContact" className="text-sm leading-relaxed text-gray-700">
                          I agree to be contacted by Dr. Serena Blake regarding my inquiry and understand that 
                          all communications will be kept confidential. *
                        </label>
                      </div>
                      {errors.agreeToContact && <p className="text-red-500 text-sm">{errors.agreeToContact}</p>}

                      <button 
                        type="submit" 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-md transition-colors"
                      >
                        Send Message & Schedule Consultation
                      </button>

                      <p className="text-sm text-gray-600 text-center">
                        By submitting this form, you're taking the first step towards positive change. 
                        I look forward to supporting you on your journey.
                      </p>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-blue-400" />
                <span className="font-bold text-xl">Dr. Serena Blake</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Licensed Clinical Psychologist dedicated to helping you find your path to healing and growth 
                through compassionate, evidence-based therapy.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Professional Info</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Licensed Clinical Psychologist</li>
                <li>California License #PSY12345</li>
                <li>Ph.D. Clinical Psychology</li>
                <li>12+ Years Experience</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dr. Serena Blake, Ph.D. All rights reserved. | Confidential & HIPAA Compliant</p>
          </div>
        </div>
      </footer>
    </div>
  );
}