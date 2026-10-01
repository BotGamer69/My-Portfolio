import { useState, useRef } from 'react';
import { toast } from '@/hooks/use-toast';
import emailjs from "emailjs-com";
import SectionHeading from '@/components/SectionHeading';
import { contactInfo, contactIntro, socialLinks } from '@/data/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    subject: '',
    message: ''
  });

  // Reference for EmailJS form
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      "service_whcxv7e",   // ✅ your EmailJS Service ID
      "template_859lwch",  // ✅ your EmailJS Template ID
      formRef.current,
      "OP52cKKMzoMh5Vdnf"  // ✅ your EmailJS Public Key
    )
    .then(() => {
      toast({
        title: "Message Sent! ✅",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ from_name: '', reply_to: '', subject: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error ❌",
        description: "Failed to send message. Please try again later.",
      });
      console.error("EmailJS error:", error);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };


  return (
    <section id="contact" className="border-t border-border bg-card py-16 md:py-20">
      <div className="container mx-auto px-6">
        <SectionHeading title={contactIntro.heading} intro={contactIntro.lead} />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <dl className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="border-b border-border pb-4">
                  <dt className="text-sm text-muted-foreground">{info.label}</dt>
                  <dd className="font-medium">
                    <a href={info.href} className="text-link break-words">
                      {info.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>

            <div>
              <h4 className="mb-3 text-lg font-semibold">Follow Me</h4>
              <ul className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tech-button-secondary px-4 py-2 text-sm"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="tech-card space-y-5 bg-background">
            <h3 className="text-2xl font-semibold">Send Message</h3>

            <div>
              <label htmlFor="from_name" className="mb-2 block text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="reply_to" className="mb-2 block text-sm font-medium">
                Email Address
              </label>
              <input
                type="email"
                id="reply_to"
                name="reply_to"
                value={formData.reply_to}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-primary"
                placeholder="Enter subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full rounded-lg border border-input bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground focus-visible:border-primary resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button type="submit" className="tech-button w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
