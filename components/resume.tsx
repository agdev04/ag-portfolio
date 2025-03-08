"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FaFilePdf } from "react-icons/fa6";
import { BsFiletypeDocx } from "react-icons/bs";

export default function Resume() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const generatePDF = () => {
    if (!isClient) return;

    const content = document.createElement('div');
    const resumeContent = document.querySelector('#resume-content');
    if (!resumeContent) return;

    content.innerHTML = resumeContent.innerHTML;

    // Apply print styles
    content.style.padding = '40px';
    content.style.fontSize = '12px';
    content.style.lineHeight = '1.6';
    content.style.color = '#000';
    content.style.background = '#fff';

    const printWindow = window.open('', '', 'height=600,width=800');
    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>AG NIEVE - Resume</title>
        </head>
        <body>
          ${content.outerHTML}
        </body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  };

  const generateDOCX = async () => {
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            text: "AG NIEVE",
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: "FULL STACK DEVELOPER",
            heading: HeadingLevel.HEADING_2,
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: "Digos City, Philippines | +63 956 8138 851 | dev@agnieve.com | www.agnieve.com",
            alignment: AlignmentType.CENTER
          }),
          new Paragraph({
            text: "SUMMARY",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400 }
          }),
          new Paragraph({
            text: "Dynamic Full Stack Developer with over 7 years of experience delivering innovative web and mobile solutions. Skilled in architecting scalable, high-performance systems with frameworks like Nest.js, Rust, and Go, and proficient in mobile development using React Native, Expo, and Flutter. Adept at Linux Ubuntu server administration, ensuring robust deployments. Passionate about crafting user-centric applications that drive business value, with a proven ability to lead teams and leverage technologies like blockchain and AI."
          }),
          new Paragraph({
            text: "TECHNICAL SKILLS",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400 }
          }),
          new Paragraph({
            children: [new TextRun("Frontend: JavaScript (TypeScript, React.js, Next.js)")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Backend: Node.js (Nest.js), Go (Golang), Rust (Rocket, Actix-web), Python, PHP (Laravel, CodeIgniter)")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Mobile: React Native, Expo, Flutter")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Databases: PostgreSQL, MySQL, MongoDB")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("CMS: WordPress")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("DevOps: Linux Ubuntu Server Administration")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Specializations: Blockchain (Cardano), AI Image Classification")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "PROFESSIONAL EXPERIENCE",
            heading: HeadingLevel.HEADING_2,
            spacing: { before: 400 }
          }),
          new Paragraph({
            text: "FULL STACK DEVELOPER",
            heading: HeadingLevel.HEADING_3
          }),
          new Paragraph({
            text: "ExploreMalaysia.com.my | Digos City, Philippines | 2024 – Present"
          }),
          new Paragraph({
            children: [new TextRun("Architected a travel platform integrating WordPress, MySQL, Nest.js, and Flutter, delivering seamless web and mobile experiences.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Developed cross-platform mobile applications using React Native, Expo, and Flutter, enhancing user engagement for travel services.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Engineered responsive frontend interfaces with Flutter and React Native, improving accessibility and user satisfaction.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Optimized backend performance with Nest.js and MySQL, streamlining data workflows and scalability.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Managed Linux Ubuntu server administration, ensuring secure, high-availability deployments for production systems.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Partnered with stakeholders to deliver features aligned with business objectives, consistently meeting tight deadlines.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "FULL STACK DEVELOPER",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 400 }
          }),
          new Paragraph({
            text: "Castle Digital Australia | Remote | 2022 – 2024"
          }),
          new Paragraph({
            children: [new TextRun("Built \"WhatKey,\" an AI-driven image classification tool, integrating machine learning for real-time analysis.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Led \"Olympus Insights,\" a blockchain-powered LMS using Cardano, enabling secure, decentralized education solutions.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Designed \"Keen2Work,\" a job portal system, streamlining recruitment processes for employers and job seekers.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Developed \"Appsistant,\" a mobile app with React Native and Expo, enhancing user interactivity on iOS and Android.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Contributed to \"HighEnd,\" a high-performance e-commerce platform with robust backend systems.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Mastered Go and Rust (Actix-web, Rocket), delivering scalable solutions for complex projects.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "FULL STACK DEVELOPER",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 400 }
          }),
          new Paragraph({
            text: "XTendly Philippines | Digos City, Philippines | 2020 – 2022"
          }),
          new Paragraph({
            children: [new TextRun("Revamped local government websites with WordPress, improving public access to critical services.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Created \"JOMS\" (Job Order Management System) using CodeIgniter, automating workflows and reducing processing time.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Solely developed a Laravel-based Document Tracking System, enhancing operational transparency.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            text: "JUNIOR FULL STACK DEVELOPER",
            heading: HeadingLevel.HEADING_3,
            spacing: { before: 400 }
          }),
          new Paragraph({
            text: "ICT (Information Communication Technology) | Digos City, Philippines | 2018 – 2020"
          }),
          new Paragraph({
            children: [new TextRun("Built and maintained a local government website with WordPress, ensuring uptime and accessibility.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Designed \"JOMS\" with CodeIgniter, laying the foundation for scalable job order management.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Developed a Laravel Document Tracking System single-handedly, streamlining administrative processes.")],
            bullet: { level: 0 }
          }),
          new Paragraph({
            children: [new TextRun("Spearheaded a 5-person team to launch a Risk Reduction Management System under tight deadlines.")],
            bullet: { level: 0 }
          })
        ]
      }]
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'AG_NIEVE_Resume.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Dialog>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                View Resume
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <div className="flex justify-center">
                <div className="flex justify-end gap-4 mb-4">
                    <Button onClick={generatePDF} variant={'ghost'} className="flex items-center gap-2">
                        <FaFilePdf className="w-20 h-20" />
                        Download PDF
                    </Button>
                    <Button onClick={generateDOCX} variant={'ghost'}  className="flex items-center gap-2">
                        <BsFiletypeDocx className="w-20 h-20" />
                        Download DOCX
                    </Button>
                </div>
              </div>
              <div id="resume-content" className="bg-card p-8 rounded-lg">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold mb-2">AG NIEVE</h1>
                  <h2 className="text-xl mb-4">FULL STACK DEVELOPER</h2>
                  <p className="text-muted-foreground">
                    Digos City, Philippines | +63 956 8138 851 | dev@agnieve.com | www.agnieve.com
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">SUMMARY</h3>
                  <p className="text-muted-foreground">
                    Dynamic Full Stack Developer with over 7 years of experience delivering innovative web and mobile solutions. Skilled in architecting scalable, high-performance systems with frameworks like Nest.js, Rust, and Go, and proficient in mobile development using React Native, Expo, and Flutter. Adept at Linux Ubuntu server administration, ensuring robust deployments. Passionate about crafting user-centric applications that drive business value, with a proven ability to lead teams and leverage technologies like blockchain and AI.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">TECHNICAL SKILLS</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>Frontend: JavaScript (TypeScript, React.js, Next.js)</li>
                    <li>Backend: Node.js (Nest.js), Go (Golang), Rust (Rocket, Actix-web), Python, PHP (Laravel, CodeIgniter)</li>
                    <li>Mobile: React Native, Expo, Flutter</li>
                    <li>Databases: PostgreSQL, MySQL, MongoDB</li>
                    <li>CMS: WordPress</li>
                    <li>DevOps: Linux Ubuntu Server Administration</li>
                    <li>Specializations: Blockchain (Cardano), AI Image Classification</li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">PROFESSIONAL EXPERIENCE</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold">FULL STACK DEVELOPER</h4>
                    <p className="text-muted-foreground mb-2">ExploreMalaysia.com.my | Digos City, Philippines | 2024 – Present</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Architected a travel platform integrating WordPress, MySQL, Nest.js, and Flutter, delivering seamless web and mobile experiences.</li>
                      <li>Developed cross-platform mobile applications using React Native, Expo, and Flutter, enhancing user engagement for travel services.</li>
                      <li>Engineered responsive frontend interfaces with Flutter and React Native, improving accessibility and user satisfaction.</li>
                      <li>Optimized backend performance with Nest.js and MySQL, streamlining data workflows and scalability.</li>
                      <li>Managed Linux Ubuntu server administration, ensuring secure, high-availability deployments for production systems.</li>
                      <li>Partnered with stakeholders to deliver features aligned with business objectives, consistently meeting tight deadlines.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold">FULL STACK DEVELOPER</h4>
                    <p className="text-muted-foreground mb-2">Castle Digital Australia | Remote | 2022 – 2024</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Built "WhatKey," an AI-driven image classification tool, integrating machine learning for real-time analysis.</li>
                      <li>Led "Olympus Insights," a blockchain-powered LMS using Cardano, enabling secure, decentralized education solutions.</li>
                      <li>Designed "Keen2Work," a job portal system, streamlining recruitment processes for employers and job seekers.</li>
                      <li>Developed "Appsistant," a mobile app with React Native and Expo, enhancing user interactivity on iOS and Android.</li>
                      <li>Contributed to "HighEnd," a high-performance e-commerce platform with robust backend systems.</li>
                      <li>Mastered Go and Rust (Actix-web, Rocket), delivering scalable solutions for complex projects.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold">FULL STACK DEVELOPER</h4>
                    <p className="text-muted-foreground mb-2">XTendly Philippines | Digos City, Philippines | 2020 – 2022</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Revamped local government websites with WordPress, improving public access to critical services.</li>
                      <li>Created "JOMS" (Job Order Management System) using CodeIgniter, automating workflows and reducing processing time.</li>
                      <li>Solely developed a Laravel-based Document Tracking System, enhancing operational transparency.</li>
                      <li>Led a 5-person team to deliver a Risk Reduction Management System during an earthquake, supporting disaster response efforts.</li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold">JUNIOR FULL STACK DEVELOPER</h4>
                    <p className="text-muted-foreground mb-2">ICT (Information Communication Technology) | Digos City, Philippines | 2018 – 2020</p>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Built and maintained a local government website with WordPress, ensuring uptime and accessibility.</li>
                      <li>Designed "JOMS" with CodeIgniter, laying the foundation for scalable job order management.</li>
                      <li>Developed a Laravel Document Tracking System single-handedly, streamlining administrative processes.</li>
                      <li>Spearheaded a 5-person team to launch a Risk Reduction Management System under tight deadlines.</li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">EDUCATION</h3>
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold">Bachelor of Information Technology</h4>
                    <p className="text-muted-foreground">University of Mindanao (Digos College) | Digos City, Philippines | 2013 – 2020</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Secondary Education</h4>
                    <p className="text-muted-foreground">Digos City National High School | Digos City, Philippines | 2009 – 2013</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">SELECTED PROJECTS</h3>
                  <ul className="list-disc list-inside text-muted-foreground">
                    <li>WhatKey (Castle Digital): AI image classification tool built with Rust and machine learning integrations.</li>
                    <li>Olympus Insights (Castle Digital): Blockchain-based LMS leveraging Cardano for secure education delivery.</li>
                    <li>Appsistant (Castle Digital): Mobile app developed with React Native and Expo for enhanced user interaction.</li>
                    <li>Document Tracking System (XTendly/ICT): Laravel-powered solution for efficient document management.</li>
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
  );
}