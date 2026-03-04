"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterCard from '@/components/sections/footer/FooterCard';
import { Brain, Code, Github, Lightbulb, Linkedin, Rocket, Shield, Sparkles, TrendingUp, Twitter, Users, Zap } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="smallMedium"
      sizing="largeSmallSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="solid"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          brandName="AIGenius"
          navItems={[
            { name: "About", id: "about" },
            { name: "Features", id: "features" },
            { name: "Impact", id: "metrics" },
            { name: "Testimonials", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          bottomLeftText="San Francisco, CA"
          bottomRightText="hello@aigeniusai.com"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Intelligent AI Solutions for Tomorrow"
          description="Transform your business with cutting-edge artificial intelligence. We build AI systems that learn, adapt, and drive measurable results."
          tag="Next Generation AI"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          buttons={[
            { text: "Get Started", href: "contact" },
            { text: "View Demo", href: "https://example.com/demo" }
          ]}
          buttonAnimation="slide-up"
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/a-sleek-modern-ai-dashboard-interface-fe-1772610240114-b60f2971.png", imageAlt: "AI Dashboard Interface" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/advanced-machine-learning-visualization--1772610239742-cf298f70.png", imageAlt: "Machine Learning Visualization" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/complex-neural-network-architecture-diag-1772610240293-9f56bf84.png", imageAlt: "Neural Network Architecture" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/data-processing-pipeline-visualization-w-1772610239823-8a91751d.png", imageAlt: "Data Processing Pipeline" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/comprehensive-analytics-dashboard-showin-1772610240561-1a74487e.png", imageAlt: "Advanced Analytics Dashboard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/ai-model-performance-metrics-display-wit-1772610240518-28208d9c.png", imageAlt: "AI Model Performance Metrics" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Powering Innovation with AI"
          description="At AIGenius, we believe artificial intelligence should be accessible, ethical, and transformative. Our team combines deep machine learning expertise with a commitment to solving real-world problems."
          tag="Our Story"
          tagIcon={Lightbulb}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          bulletPoints={[
            { title: "Advanced Algorithms", description: "State-of-the-art machine learning models trained on massive datasets.", icon: Brain },
            { title: "Real-time Processing", description: "Lightning-fast inference and decision-making at scale.", icon: Zap },
            { title: "Ethical AI", description: "Built with fairness, transparency, and responsible practices.", icon: Shield },
            { title: "Easy Integration", description: "Seamless API access and comprehensive documentation.", icon: Code }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/a-diverse-team-of-ai-engineers-and-data--1772610241249-1c6430e4.png"
          imageAlt="AI team collaborating on projects"
          mediaAnimation="slide-up"
          imagePosition="right"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardNine
          title="Powerful Features"
          description="Everything you need to harness the power of artificial intelligence."
          tag="Capabilities"
          tagIcon={Zap}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="blur-reveal"
          showStepNumbers={true}
          features={[
            {
              id: 1,
              title: "Natural Language Processing",              description: "Understand and generate human language with unprecedented accuracy. Process text, extract insights, and automate communication at scale.",              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/smartphone-screen-showing-natural-langua-1772610239705-ff106878.png" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/mobile-phone-display-featuring-language--1772610240201-4962f0ff.png" }
            },
            {
              id: 2,
              title: "Computer Vision",              description: "See and analyze visual data like never before. Detect objects, recognize patterns, and extract meaningful information from images and video.",              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/smartphone-screen-showing-computer-visio-1772610242212-921e5247.png" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/mobile-phone-display-featuring-image-rec-1772610240640-b19e156d.png" }
            },
            {
              id: 3,
              title: "Predictive Analytics",              description: "Forecast trends and patterns before they happen. Make data-driven decisions with AI-powered predictions and prescriptive insights.",              phoneOne: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/smartphone-interface-showing-predictive--1772610240389-fde9dbc5.png" },
              phoneTwo: { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/mobile-phone-screen-featuring-predictive-1772610240413-57debd6f.png" }
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardEleven
          title="Our Impact"
          description="Transforming businesses worldwide with intelligent automation and insights."
          tag="Results"
          tagIcon={TrendingUp}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "1",              value: "500+",              title: "Active Clients",              description: "Businesses trusting our AI platform",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/corporate-headquarters-building-or-offic-1772610240731-85fd1aa7.png",              imageAlt: "Corporate headquarters"
            },
            {
              id: "2",              value: "10B+",              title: "Predictions Daily",              description: "Real-time AI decisions processed",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/real-time-data-processing-visualization--1772610240681-d0596023.png",              imageAlt: "Real-time data processing"
            },
            {
              id: "3",              value: "40%",              title: "Avg Cost Savings",              description: "Efficiency gains from automation",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/financial-growth-chart-and-upward-trendi-1772610240532-5592c6d3.png",              imageAlt: "Financial growth chart"
            },
            {
              id: "4",              value: "99.9%",              title: "Uptime SLA",              description: "Enterprise-grade reliability",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/server-monitoring-dashboard-showing-99-9-1772610240583-53647ef1.png",              imageAlt: "Server monitoring dashboard"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Clients Say"
          description="See how leading companies are leveraging our AI platform to drive growth."
          tag="Testimonials"
          tagIcon={Users}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="scale-rotate"
          testimonials={[
            {
              id: "1",              name: "Sarah Mitchell",              role: "VP of Product",              testimonial: "AIGenius transformed our customer service operations. We reduced response times by 60% while improving satisfaction scores. The platform is incredibly intuitive.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-portrait-of-a-conf-1772610239447-33f58e6d.png",              imageAlt: "Sarah Mitchell"
            },
            {
              id: "2",              name: "Michael Chen",              role: "Data Science Director",              testimonial: "The accuracy of their predictive models exceeded our expectations. We've integrated their API across all our analytics pipelines with zero issues.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-of-an-asian-male-p-1772610239068-4358bd0a.png",              imageAlt: "Michael Chen"
            },
            {
              id: "3",              name: "Emily Rodriguez",              role: "CEO",              testimonial: "Outstanding support and documentation. Their team helped us deploy custom models in weeks, not months. Highly recommend for enterprise teams.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-portrait-of-a-lati-1772610239948-f5800149.png",              imageAlt: "Emily Rodriguez"
            },
            {
              id: "4",              name: "David Kim",              role: "Engineering Lead",              testimonial: "The scalability is impressive. We're processing millions of inference requests daily with consistent performance. Best investment we've made.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-of-a-male-professi-1772610239508-18802e8f.png",              imageAlt: "David Kim"
            },
            {
              id: "5",              name: "Jessica Lopez",              role: "Product Manager",              testimonial: "Their ethical AI framework aligns perfectly with our values. Transparency and fairness are built into every aspect of the platform.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-portrait-of-a-woma-1772610239857-d429c620.png",              imageAlt: "Jessica Lopez"
            },
            {
              id: "6",              name: "James Wilson",              role: "CTO",              testimonial: "Seamless integration with our existing infrastructure. The ROI was evident within the first month of deployment.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3ATISutjHAMVhOTVtxcxfL3uyXl/professional-headshot-of-a-male-professi-1772610240147-1339b37d.png",              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Transform?"
          tagIcon={Rocket}
          tagAnimation="slide-up"
          title="Start Your AI Journey Today"
          description="Join hundreds of companies already leveraging AIGenius to drive innovation, reduce costs, and gain competitive advantage. Our team is ready to help you implement AI solutions tailored to your needs."
          buttons={[
            { text: "Contact Sales", href: "mailto:sales@aigeniusai.com" },
            { text: "Schedule Demo", href: "https://example.com/demo" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="AIGenius"
          copyrightText="© 2025 AIGenius Inc. All rights reserved."
          socialLinks={[
            { icon: Twitter, href: "https://twitter.com/aigeniusai", ariaLabel: "Twitter" },
            { icon: Linkedin, href: "https://linkedin.com/company/aigeniusai", ariaLabel: "LinkedIn" },
            { icon: Github, href: "https://github.com/aigeniusai", ariaLabel: "GitHub" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
