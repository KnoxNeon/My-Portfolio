'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  // Update local time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Dhaka',
        hour12: true,
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit'
      }));
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    console.log('Input changed:', name, value); // Debug log
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const loadingToast = toast.loading('Sending your message...');
      
      // Send email using Formspree
      const response = await fetch('https://formspree.io/f/xnjbkpko', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.subject}`
        })
      });

      toast.dismiss(loadingToast);
      
      if (response.ok) {
        toast.success('Message sent successfully! I\'ll get back to you soon.', {
          duration: 5000,
          icon: '✅',
        });
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try emailing me directly at iftey10@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'email',
      label: 'Email Address',
      value: 'iftey10@gmail.com',
      href: 'mailto:iftey10@gmail.com',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: 'phone',
      label: 'Phone Number',
      value: '01318664769',
      href: 'tel:+8801318664769',
      color: 'text-purple-600 dark:text-orange-400'
    },
    {
      icon: 'whatsapp',
      label: 'WhatsApp',
      value: '01318664769',
      href: 'https://wa.me/8801318664769',
      color: 'text-green-500 dark:text-green-400'
    }
  ];

  const renderContactIcon = (iconName: string) => {
    const iconProps = "w-6 h-6";
    
    switch (iconName) {
      case 'email':
        return (
          <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'phone':
        return (
          <svg className={iconProps} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        );
      case 'whatsapp':
        return (
          <svg className={iconProps} fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.106"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--card)',
            color: 'var(--foreground)',
            border: '1px solid var(--border)',
          },
          success: {
            style: {
              background: 'var(--card)',
              color: 'var(--foreground)',
              border: '1px solid #22c55e',
            },
          },
          error: {
            style: {
              background: 'var(--card)',
              color: 'var(--foreground)',
              border: '1px solid #ef4444',
            },
          },
        }}
      />
      
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-background border-t border-border" id="contact">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#FFD028] font-bold tracking-widest uppercase mb-2">Get In Touch</span>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-foreground uppercase mb-4">Contact Information</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className=" p-8 bg-card border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#FFD028] focus:border-[#FFD028] focus:outline-none transition-colors text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#FFD028] focus:border-[#FFD028] focus:outline-none transition-colors text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#FFD028] focus:border-[#FFD028] focus:outline-none transition-colors text-foreground placeholder-muted-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Project inquiry, collaboration, etc."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-[#FFD028] focus:border-[#FFD028] focus:outline-none transition-colors text-foreground placeholder-muted-foreground resize-vertical disabled:opacity-50 disabled:cursor-not-allowed"
                    placeholder="Tell me about your project or how I can help you..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#FFD028] hover:bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-icons animate-spin mr-2 text-sm">refresh</span>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <span className="material-icons mr-2 text-sm">send</span>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Contact Details</h3>
                <p className="text-muted-foreground mb-8">
                  Prefer to reach out directly? You can contact me through any of the following methods. 
                  I'm always happy to discuss new opportunities and projects.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <Card key={index} className="p-6 bg-card border border-border hover:border-[#FFD028]/50 transition-colors group">
                    <a
                      href={contact.href}
                      target={contact.icon === 'whatsapp' ? '_blank' : undefined}
                      rel={contact.icon === 'whatsapp' ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-200"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-[#FFD028]/10 flex items-center justify-center ${contact.color} group-hover:bg-[#FFD028] group-hover:text-black transition-colors`}>
                        {renderContactIcon(contact.icon)}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{contact.label}</h4>
                        <p className={`${contact.color} font-medium`}>{contact.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Response Time with Local Time */}
              <Card className="p-6 bg-card border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-foreground">Response Time</h4>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="material-icons text-[#FFD028] text-lg">schedule</span>
                    <span className="text-muted-foreground">My Time:</span>
                    <span className="font-mono text-[#FFD028] font-semibold">{currentTime}</span>
                    <span className="text-xs text-muted-foreground">(GMT+6)</span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">
                  I typically respond to messages within 24 hours during business days (9 AM - 6 PM, Bangladesh Time). 
                  For urgent inquiries, feel free to call or message me on WhatsApp.
                </p>
              </Card>

              <Card className="p-6 bg-card border border-border">
                <h4 className="font-bold text-foreground mb-3">Available For</h4>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full"></span>
                    Full-stack web development projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full"></span>
                    MERN stack applications
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full"></span>
                    Technical consulting & code reviews
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FFD028] rounded-full"></span>
                    Long-term collaborations
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}