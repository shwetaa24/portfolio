import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Resume = () => {
  useEffect(() => {
    // Add print styles when component mounts
    const style = document.createElement("style");
    style.textContent = `
      @media print {
        @page {
          margin: 0.5in;
          size: letter;
        }
        body * {
          visibility: hidden;
        }
        .resume-container, .resume-container * {
          visibility: visible;
        }
        .resume-container {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background: white !important;
          padding: 0 !important;
        }
        .no-print {
          display: none !important;
        }
        .resume-section {
          page-break-inside: avoid;
          break-inside: avoid;
        }
        a {
          color: #0891b2 !important;
          text-decoration: none;
        }
        .bg-gradient-to-br, .bg-gradient-to-r {
          background: white !important;
        }
        .text-transparent {
          color: #111827 !important;
        }
        .resume-header-accent {
          background: #0891b2 !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      {/* Action Buttons */}
      <div className="fixed top-20 right-4 z-50 flex flex-col gap-3 no-print">
        <Link to="/">
          <Button
            variant="outline"
            className="glass-effect border-primary/20 hover:border-primary mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back Home
          </Button>
        </Link>
        <Button
          onClick={handlePrint}
          className="glass-effect border-primary/20 hover:border-primary bg-primary/10 hover:bg-primary/20"
        >
          <Printer className="mr-2 h-4 w-4" />
          Print/PDF
        </Button>
      </div>

      {/* Resume Container */}
      <div className="resume-container relative z-10 max-w-4xl mx-auto px-6 py-12 print:py-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-2xl overflow-hidden print:shadow-none print:rounded-none"
        >
          {/* Professional Header with Accent Bar */}
          <header className="bg-gradient-to-r from-cyan-600 to-cyan-700 text-white p-8 print:bg-cyan-600">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 tracking-tight">Shweta Jadhav</h1>
                <p className="text-xl font-light text-cyan-50">DevOps Engineer & Cloud Architect</p>
              </div>
            </div>
            
            {/* Contact Information */}
            <div className="mt-6 pt-6 border-t border-cyan-400/30 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 text-cyan-50">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:shwetajadhav2324@gmail.com" className="hover:text-white transition-colors">
                  shwetajadhav2324@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-cyan-50">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+917218834640" className="hover:text-white transition-colors">
                  +91 7218834640
                </a>
              </div>
              <div className="flex items-center gap-2 text-cyan-50">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>Kolhapur, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-cyan-50">
                <Github className="h-4 w-4 flex-shrink-0" />
                <a href="https://github.com/shwetaa24" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  github.com/shwetaa24
                </a>
              </div>
              <div className="flex items-center gap-2 text-cyan-50">
                <Linkedin className="h-4 w-4 flex-shrink-0" />
                <a href="https://www.linkedin.com/in/shweta-jadhav-3aa652361/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  linkedin.com/in/shweta-jadhav-3aa652361
                </a>
              </div>
            </div>
          </header>

          {/* Resume Content */}
          <div className="p-8 md:p-10 print:p-8">
            {/* Professional Summary */}
            <section className="resume-section mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  Professional Summary
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-[15px] pl-[60px]">
                Results-driven DevOps Engineer with 6+ years of experience designing and implementing scalable cloud infrastructure solutions. 
                Expert in AWS, Kubernetes, and containerization technologies with a proven track record of reducing infrastructure costs by 35% 
                and improving deployment frequency by 60%. Specialized in CI/CD pipeline automation, Infrastructure as Code, and cloud security. 
                Passionate about optimizing system performance and mentoring teams to adopt DevOps best practices.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="resume-section mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  Technical Skills
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-[60px]">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Cloud Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">AWS</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Azure</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">GCP</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Container & Orchestration</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Docker</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Kubernetes</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">EKS</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Microservices</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">CI/CD & Automation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Jenkins</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">GitHub Actions</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">GitLab CI</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">CircleCI</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Infrastructure as Code</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Terraform</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Ansible</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">CloudFormation</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Pulumi</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Programming & Scripting</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Python</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Bash/Shell</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">YAML</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">JSON</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wider">Monitoring & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Prometheus</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Grafana</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">ELK Stack</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Linux</span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-800 rounded text-sm font-medium border border-gray-200">Git</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Professional Experience */}
            <section className="resume-section mb-8">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  Professional Experience
                </h2>
              </div>
              
              <div className="space-y-5 pl-[60px]">
                {/* Experience 1 */}
                <div className="border-l-2 border-cyan-200 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">DevOps Engineer</h3>
                      <p className="text-cyan-600 font-semibold text-[15px]">TechCloud Solutions Pvt. Ltd.</p>
                      <p className="text-gray-500 text-sm italic">Mumbai, Maharashtra</p>
                    </div>
                    <span className="text-gray-600 font-medium text-sm mt-1 md:mt-0">2023 - Present</span>
                  </div>
                  <ul className="list-none space-y-1.5 mt-3">
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Designed and deployed scalable cloud infrastructure on AWS, reducing operational costs by 35%</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Built CI/CD pipelines using Jenkins and GitHub Actions, improving deployment frequency by 60%</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Containerized applications using Docker and Kubernetes, enabling zero-downtime deployments</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Automated infrastructure provisioning with Terraform, reducing deployment time by 80%</span>
                    </li>
                  </ul>
                </div>

                {/* Experience 2 */}
                <div className="border-l-2 border-cyan-200 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Cloud Infrastructure Intern</h3>
                      <p className="text-cyan-600 font-semibold text-[15px]">Digital Innovations Inc.</p>
                      <p className="text-gray-500 text-sm italic">Pune, Maharashtra</p>
                    </div>
                    <span className="text-gray-600 font-medium text-sm mt-1 md:mt-0">2022 - 2023</span>
                  </div>
                  <ul className="list-none space-y-1.5 mt-3">
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Assisted in managing multi-cloud environments (AWS, Azure) ensuring 99.9% uptime</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Developed automation scripts in Python and Bash for operational tasks</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-700 text-[15px] leading-relaxed">
                      <span className="text-cyan-600 font-bold mt-1">•</span>
                      <span>Configured and maintained Linux servers, ensuring security compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Education & Certifications Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Education */}
              <section className="resume-section">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                    Education
                  </h2>
                </div>
                <div className="pl-[60px]">
                  <div className="border-l-2 border-cyan-200 pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-600 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Bachelor of Engineering</h3>
                    <p className="text-cyan-600 font-semibold text-[15px]">Computer Engineering</p>
                    <p className="text-gray-600 text-sm">Vivekanand College Kolhapur</p>
                    <p className="text-gray-500 text-sm mt-1">Kolhapur, Maharashtra</p>
                    <span className="text-gray-600 font-medium text-sm block mt-2">2023 - 2026</span>
                    <p className="text-gray-600 text-sm mt-2">CGPA: 8.2/10</p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section className="resume-section">
                <div className="flex items-center mb-4">
                  <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                  <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                    Certifications
                  </h2>
                </div>
                <div className="space-y-3 pl-[60px]">
                  <div className="p-3 bg-gray-50 rounded border-l-4 border-cyan-600">
                    <h3 className="font-semibold text-gray-900 text-sm">AWS Certified Solutions Architect - Associate</h3>
                    <p className="text-xs text-gray-600 mt-1">Amazon Web Services • 2023</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded border-l-4 border-cyan-600">
                    <h3 className="font-semibold text-gray-900 text-sm">Certified Kubernetes Administrator (CKA)</h3>
                    <p className="text-xs text-gray-600 mt-1">Cloud Native Computing Foundation • 2022</p>
                  </div>
                </div>
              </section>
            </div>

            {/* Key Achievements */}
            <section className="resume-section">
              <div className="flex items-center mb-4">
                <div className="h-1 w-12 bg-cyan-600 mr-3"></div>
                <h2 className="text-2xl font-bold text-gray-900 uppercase tracking-wide">
                  Key Achievements
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-[60px]">
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px]">Led cloud migration project reducing infrastructure costs by 40% while improving scalability</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px]">Implemented auto-scaling solutions handling 10x traffic spikes with zero downtime</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px]">Reduced deployment time from 4 hours to 15 minutes through CI/CD automation</p>
                </div>
                <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 text-[15px]">Established monitoring systems preventing 95% of potential incidents proactively</p>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
