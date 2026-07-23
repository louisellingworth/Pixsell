'use client'

import { motion } from 'framer-motion'
import Footer from '../components/Footer'

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
              Terms and Conditions
            </h1>
            <p className="text-xl text-white/80 mb-12">
              Last Updated: March 2024
            </p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction & Agreement to Terms</h2>
                <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
                <p className="text-white/80 mb-4">
                  This Terms & Conditions ("Terms") section governs your use of the EightSix Games website and any services provided through it. "EightSix Games" (referred to as "we," "us," or "our") is the trading name of EightSix Games Ltd, a private limited company registered in England and Wales (Company No. 12718621). Our registered office is at 139 Leander Road, London, United Kingdom, SW2 2LP. EightSix Games operates in the video game industry as a facilitator of co-publishing deals between Western game developers and Chinese co-publishers. By accessing or using our website or services, you (the user or client) agree to be bound by these Terms. If you do not agree, you must not use the website or our services.
                </p>

                <h3 className="text-xl font-semibold mb-3">Acceptance of Terms</h3>
                <p className="text-white/80 mb-4">
                  By continuing to use our site or engaging our services, you acknowledge that you have read and understood these Terms and agree to abide by them. We may update or revise these Terms from time to time. Updated terms will be posted on this page with a new "Last Updated" date, and they take effect immediately upon posting. Continued use of the website after any changes constitutes acceptance of the new Terms. It is your responsibility to review this page periodically for updates. If you do not agree with any updated Terms, you should stop using the website and services.
                </p>

                <h3 className="text-xl font-semibold mb-3">Legal Capacity</h3>
                <p className="text-white/80 mb-4">
                  You affirm that you are at least 18 years old (or the age of majority in your jurisdiction) and legally capable of entering into binding agreements. If you are using the website or services on behalf of a company or other legal entity, you represent that you have the authority to bind that entity to these Terms. In such case, "you" will refer to that entity as well.
                </p>

                <h3 className="text-xl font-semibold mb-3">Privacy & Data Protection</h3>
                <p className="text-white/80 mb-4">
                  EightSix Games respects your privacy and is committed to protecting your personal data. We currently do not collect personal information through mere use of our website; however, any future collection or processing of personal data will comply with the UK General Data Protection Regulation (UK GDPR) and the UK Data Protection Act 2018. Any personal data you choose to provide (for example, by contacting us or signing up for services) will be used lawfully and transparently, consistent with our Privacy Policy (available on our website). By using our site or services, you consent to such processing of your personal information in line with these laws. If you have questions about how we handle data, please refer to the Privacy Policy or contact us using the information in Section 8.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">2. Services & Scope</h2>
                <p className="text-white/80 mb-4">
                  EightSix Games provides consulting and facilitation services to help Western game developers enter the Chinese market through partnerships with local co-publishers.
                </p>

                <h3 className="text-xl font-semibold mb-3">Our Role</h3>
                <p className="text-white/80 mb-4">
                  We act as an intermediary and advisor – essentially a facilitator of co-publishing deals. This means we introduce and connect developers with suitable Chinese co-publishers, help negotiate deal terms, and guide the process of launching the game in China. We offer expertise in navigating the market entry process, but we are not a publisher ourselves. We do not publish games directly, and we do not assume the role of a game publisher at any point.
                </p>

                <h3 className="text-xl font-semibold mb-3">Services We Provide</h3>
                <p className="text-white/80 mb-4">EightSix Games' services generally include:</p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li className="mb-4">
                    <strong>Market Entry Strategy & Guidance:</strong> We advise on strategies for entering the Chinese gaming market. This can involve guidance on game localization and culturalization, regulatory compliance (such as content guidelines to meet Chinese regulations), and choosing distribution platforms. We provide insights on how to optimize the game for Chinese audiences (for example, advising on features like QR login, local pricing, or cultural themes) as part of a comprehensive market entry plan.
                  </li>
                  <li className="mb-4">
                    <strong>Regulatory Guidance:</strong> We inform and guide developers on the regulatory requirements for distributing games in China. This includes advice on the process of obtaining necessary government approvals (such as the Chinese ISBN game license) and how to legally publish on platforms like Steam or others. However, we do not issue or guarantee government licenses – final approval decisions rest with Chinese authorities. (For instance, we might help prepare an application or adjust content to improve compliance chances, but we cannot assure that an ISBN or any license will be granted.)
                  </li>
                  <li className="mb-4">
                    <strong>Co-Publisher Matchmaking & Deal Negotiation:</strong> We leverage our network of Chinese co-publishers to find a suitable publishing partner for the developer's game. We facilitate introductions and assist in negotiating the co-publishing agreement, aiming to secure fair terms for the developer (such as a favorable revenue split, marketing commitments, etc.). We use our experience to advocate for the developer's interests during negotiations, but the publishing contract itself will be between the developer and the co-publisher. EightSix Games typically is not a signatory to the publishing contract (unless otherwise agreed as a specific case), and we do not become a party to that contract's obligations.
                  </li>
                  <li className="mb-4">
                    <strong>Marketing and Community Support:</strong> We provide support and advice on marketing the game in China. This can include formulating marketing campaigns (e.g. social media teasers on Weibo/Bilibili, influencer partnerships, launch events) and community management strategies tailored to Chinese players. We might coordinate with the co-publisher's marketing team to ensure the campaign aligns with the game's brand and the expectations of the local audience. Additionally, we advise on budgeting for these campaigns and can help monitor their execution.
                  </li>
                  <li className="mb-4">
                    <strong>Ongoing Consulting:</strong> Throughout the co-publishing partnership, EightSix Games remains available as an advisor. We help troubleshoot issues that arise, facilitate communication between the developer and co-publisher (overcoming language or cultural barriers), and provide strategic advice to maximize the game's success in the market. Our involvement can span from the early planning stages, through launch, and into post-launch operations (like advising on updates or monetization adjustments based on player feedback).
                  </li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Limitations of Our Role – What We Do NOT Do</h3>
                <p className="text-white/80 mb-4">To clarify the scope and limit our liability, it is important to understand what EightSix Games does not do:</p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li className="mb-4">
                    <strong>No Direct Publishing or Distribution:</strong> EightSix Games is not a publishing company. We do not publish games under our own name, nor do we directly list or sell your game on any platforms. All publishing and distribution in China will be handled by the chosen co-publisher or the developer themselves. We act strictly as consultants and facilitators, not as a publisher or distributor.
                  </li>
                  <li className="mb-4">
                    <strong>No Ownership of Developer IP:</strong> We do not take any ownership stake in your game or intellectual property. The developer retains 100% ownership of their IP (game code, art, characters, trademarks, etc.) at all times. Nothing in our services or these Terms transfers or grants us any rights in your IP, except the limited right to use your game's information as needed to perform our services (for example, to pitch it to co-publishers). Your creative work remains yours; our role is to support you, not to acquire your property.
                  </li>
                  <li className="mb-4">
                    <strong>No Guaranteed Outcomes:</strong> While we aim to provide the best possible advice and support, EightSix Games does not guarantee any particular results. We cannot promise that you will secure a co-publishing deal, that you will obtain a Chinese ISBN license or other regulatory approval, or that your game will be financially successful in the Chinese market. The gaming market can be unpredictable and is influenced by many factors beyond our control (from government policy changes to consumer trends). Our guidance greatly improves your chances by leveraging best practices and experience, but it is advisory in nature, and final outcomes depend on execution and external factors.
                  </li>
                  <li className="mb-4">
                    <strong>No Financial Guarantees or Investments:</strong> We are not investing in your project nor providing financing. Any marketing budgets or expenditures we advise on are typically funded by the co-publisher (as part of their investment) or by the developer per the co-publishing agreement. We do not promise that a certain amount of revenue will be achieved, nor do we cover shortfalls if targets aren't met. Business decisions (like how much to spend on marketing or whether to proceed with a deal) remain with you and the co-publisher – we provide input but not guarantees.
                  </li>
                  <li className="mb-4">
                    <strong>No Ongoing Publishing Operations:</strong> After facilitating the deal and providing initial support, the day-to-day operations of publishing (such as running the game's live operations, customer support, handling servers, etc.) are the responsibility of the co-publisher and/or developer as defined in their agreement. While we may check in and offer advice, we are not responsible for operating the game service or handling operational problems.
                  </li>
                </ul>
                <p className="text-white/80 mb-4">
                  By clearly delineating our services and limitations above, we aim to set correct expectations. In summary, EightSix Games is an advisor and intermediary; we bring together developers and Chinese publishers and help navigate the process, but we do not step into the shoes of a publisher or assume the risks of the developer. All our services are provided pursuant to these Terms and any separate contract we sign with you, and they are subject to the disclaimers and liability limits in Section 5.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property Rights</h2>
                <h3 className="text-xl font-semibold mb-3">Our Website Content</h3>
                <p className="text-white/80 mb-4">
                  All content and materials on the EightSix Games website – including text, images, graphics, logos, design, and layout – are owned by us or licensed to us, and are protected by copyright, trademark, and other intellectual property laws. Unless otherwise stated, all content on this website is the property of EightSix Games (EightSix Games Ltd), all rights reserved. You may access and use the website content for your own personal reference and informational purposes. However, you must not reproduce, distribute, modify, create derivative works from, publicly display, or commercially exploit any portion of our website content without our prior written consent. This includes scraping or downloading substantial portions of the site. We reserve all rights not expressly granted in these Terms.
                </p>

                <h3 className="text-xl font-semibold mb-3">Trademarks</h3>
                <p className="text-white/80 mb-4">
                  "EightSix Games", our logo, and any slogans or trade names we use are our trademarks or service marks. You are not permitted to use our name or logos in any way (e.g., to imply endorsement or partnership) without explicit written permission. All other third-party trademarks that may appear on our site (such as names of platforms or companies we mention) are property of their respective owners and are used for identification purposes only.
                </p>

                <h3 className="text-xl font-semibold mb-3">Your IP and Input</h3>
                <p className="text-white/80 mb-4">
                  We do not claim ownership of any intellectual property that you (the developer or user) own and may provide to us in the course of using our services. If you are a game developer working with us, you retain all rights to your game's IP. Providing us information or materials about your game (such as descriptions, images, builds, etc.) is solely for the purpose of evaluation and facilitating deals; it does not transfer ownership to us. We may only use your IP materials as needed to perform our services (for example, to showcase your game to potential co-publishing partners) and will not use them beyond that scope without permission. Likewise, if you send us feedback, suggestions, or other input about our services or website, we can use that feedback to improve our offerings without owing you any compensation – but you retain ownership of your original ideas.
                </p>

                <h3 className="text-xl font-semibold mb-3">Proprietary Methodologies</h3>
                <p className="text-white/80 mb-4">
                  In delivering our services, we may use certain proprietary methodologies, templates, checklists, or processes that we have developed (for instance, a market entry strategy framework or negotiation tactics). These are part of our intellectual property. Any reports or documents we deliver to you are for your use with respect to your project. You agree not to share, publish, or exploit our proprietary materials provided to you (if any) outside of your organization or for purposes beyond your collaboration with us, without our consent. Essentially, we give you the benefit of our know-how for your project, but we do not grant you a license to redistribute or reuse that know-how for others.
                </p>

                <h3 className="text-xl font-semibold mb-3">Unauthorised Use</h3>
                <p className="text-white/80 mb-4">
                  If you breach the above terms regarding our intellectual property (for example, by copying content from our site without permission or misusing our trademarks), we reserve the right to take appropriate action. This may include terminating your use of our site (see Section 4) and/or pursuing legal remedies. You agree to indemnify us for any losses or damages resulting from your unauthorised use of our intellectual property.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">4. User Obligations & Restrictions</h2>
                <p className="text-white/80 mb-4">
                  By using the EightSix Games website or services, you agree to abide by the following obligations and restrictions, which are designed to protect both of us and ensure lawful, respectful use of our platform:
                </p>

                <h3 className="text-xl font-semibold mb-3">Lawful Use Only</h3>
                <p className="text-white/80 mb-4">
                  You must use our website and services only for lawful purposes. You agree not to use the site in any way that violates any applicable law or regulation, or that is prohibited by these Terms. This includes all local, national, and international laws relevant to your use (for example, intellectual property laws, export control laws, etc.).
                </p>

                <h3 className="text-xl font-semibold mb-3">No Malicious Activity</h3>
                <p className="text-white/80 mb-4">
                  You must not misuse the website by introducing viruses, Trojan horses, worms, logic bombs, or any other material that is malicious or technologically harmful. You also agree not to attack our site via a denial-of-service (DoS) attack or any other attempt to disrupt its availability. Similarly, attempting to penetrate or hack the security of the site is strictly prohibited. You must not try to gain unauthorised access to our website, the server on which it is hosted, or any related system or database. Any such attempts may be illegal and we will report and cooperate with authorities to prosecute attacks.
                </p>

                <h3 className="text-xl font-semibold mb-3">No Improper Exploitation of Content</h3>
                <p className="text-white/80 mb-4">
                  You may not scrape, data-mine, or otherwise extract data from our website for any commercial purpose. You are also forbidden from framing our site within another site, or reproducing significant portions of our site elsewhere, without permission. Furthermore, you agree not to use our website or services to impersonate any person or entity, or to falsely state or misrepresent yourself (e.g., not falsely claiming to be an agent or representative of EightSix Games).
                </p>

                <h3 className="text-xl font-semibold mb-3">Respect Intellectual Property</h3>
                <p className="text-white/80 mb-4">
                  You must not use our website in any manner that infringes our rights or the rights of others. This means you shouldn't upload or transmit any content through the site that you don't have rights to, or that violates someone else's copyright, trademark, or other IP rights. Also, aside from any permitted use under Section 3, you agree not to reproduce or redistribute our website content. If you share information from our site, ensure it's within "fair use" or equivalent permissions and that you provide proper attribution.
                </p>

                <h3 className="text-xl font-semibold mb-3">No Misrepresentation or Unauthorised Associations</h3>
                <p className="text-white/80 mb-4">
                  You shall not use EightSix Games' name, logos, or content to suggest any partnership, endorsement, or affiliation that does not exist. For example, you shouldn't use our logo on your site or marketing materials without permission, and you shouldn't present yourself as if you are part of EightSix Games. Likewise, do not misrepresent the services you have received from us – e.g., you shouldn't claim we are your publisher or that we guarantee your results. All public references to our collaboration should be truthful and pre-approved if they involve our branding.
                </p>

                <h3 className="text-xl font-semibold mb-3">No Spam or Unauthorised Marketing</h3>
                <p className="text-white/80 mb-4">
                  You agree not to use our website to transmit or facilitate the sending of any unsolicited or unauthorised advertising or promotional material. This includes spam emails, bulk messaging, or any similar conduct. Our site may have contact forms or email links – these are for genuine inquiries or communications about our services only. You must not harvest email addresses from our site for marketing purposes.
                </p>

                <h3 className="text-xl font-semibold mb-3">No Harmful Behavior</h3>
                <p className="text-white/80 mb-4">
                  You must not engage in any behavior that could damage, disable, or impair our website or interfere with any other party's use of the website. This includes any actions that impose an unreasonable or disproportionately large load on our infrastructure, the use of any device, software, or routine that interferes with the proper working of the site, or any attempt to reverse-engineer our website's software. Additionally, you agree not to use the site to harass, defame, abuse, or harm others or to post any offensive, obscene, or otherwise objectionable content (if any interactive features exist on the site). Currently, our site may not allow user postings, but this applies to any communications you send to us as well.
                </p>

                <h3 className="text-xl font-semibold mb-3">Accuracy of Information</h3>
                <p className="text-white/80 mb-4">
                  If you provide information to us (for example, filling out a contact form or entering into an agreement), you must ensure that all such information is true, accurate, and up-to-date. You should not provide false details or impersonate another person or company. If circumstances change (e.g., your contact email changes after you reach out), please inform us so we have correct information to reach you.
                </p>

                <h3 className="text-xl font-semibold mb-3">Compliance with Co-Publishing Agreements</h3>
                <p className="text-white/80 mb-4">
                  If you end up entering a co-publishing deal facilitated by EightSix Games, you will of course be subject to the terms of that separate agreement with the co-publisher. These Terms here do not replace or modify your obligations in that publishing contract. For instance, if you sign a contract to deliver certain game milestones or adhere to certain guidelines, you must fulfill those as agreed with the co-publisher. EightSix Games is not responsible for your obligations to the co-publisher or vice versa, and any disputes between you and the co-publisher will be governed by that contract (though we hope to help avoid any disputes in the first place).
                </p>

                <h3 className="text-xl font-semibold mb-3">Breach of These Terms</h3>
                <p className="text-white/80 mb-4">
                  If you violate any of the above obligations or otherwise misuse our website/services, we reserve the right to take appropriate action. This may include terminating or suspending your access to the website, removing any offending material (if user-posting were possible), and taking legal action if necessary. You may also be held responsible for losses or damages incurred by EightSix Games due to your breach (see Section 5 on liability and the indemnity clause in Section 5 if applicable). We also reserve the right to cooperate with law enforcement and disclose your identity or other information to them if we believe it's required by law or necessary to address unlawful or harmful activities.
                </p>

                <p className="text-white/80 mb-4">
                  By using the site, you agree to these rules of conduct. These guidelines ensure a safe and fair environment for everyone and protect the integrity of our services.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">5. Disclaimers & Limitations of Liability</h2>
                
                <h3 className="text-xl font-semibold mb-3">Service Disclaimers</h3>
                <p className="text-white/80 mb-4">
                  Our website and services are provided on an "as is" and "as available" basis. EightSix Games makes no representations or warranties of any kind, express or implied, regarding the operation of our website or the information, content, materials, or services included. To the fullest extent permissible by applicable law, we disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
                </p>

                <h3 className="text-xl font-semibold mb-3">No Guarantees of Success</h3>
                <p className="text-white/80 mb-4">
                  While we strive to provide valuable services and accurate information, we cannot and do not guarantee any specific results from using our services. Success in the Chinese gaming market depends on numerous factors beyond our control. The performance of your game in China, the success of co-publishing arrangements, and any financial outcomes are not guaranteed. Past successes of other clients should not be interpreted as a guarantee of similar results for your project.
                </p>

                <h3 className="text-xl font-semibold mb-3">Technical Disclaimers</h3>
                <p className="text-white/80 mb-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>The website will be constantly available or available at all</li>
                  <li>The information on our website is complete, true, accurate, or non-misleading</li>
                  <li>The website will be secure or free from bugs or viruses</li>
                  <li>The website will be compatible with all devices and operating systems</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Third-Party Content and Links</h3>
                <p className="text-white/80 mb-4">
                  Our website may contain links to third-party websites or content from third parties. These links and content are provided for your convenience only. We have no control over the contents of third-party websites and accept no responsibility for them or for any loss or damage that may arise from your use of them. The inclusion of any links does not necessarily imply a recommendation or endorsement of the views expressed within them.
                </p>

                <h3 className="text-xl font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-white/80 mb-4">
                  To the fullest extent permitted by applicable law, EightSix Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Your access to or use of (or inability to access or use) our website or services</li>
                  <li>Any conduct or content of any third party on our website</li>
                  <li>Any content obtained from our website</li>
                  <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                  <li>The outcome of any co-publishing arrangements or market entry strategies</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Cap on Liability</h3>
                <p className="text-white/80 mb-4">
                  In no event shall our total liability to you for all damages, losses, or causes of action exceed the amount you have paid us in the last six months, or if no payment has been made, one hundred dollars ($100). This limitation of liability section applies whether the alleged liability is based on contract, tort, negligence, strict liability, or any other basis, even if we have been advised of the possibility of such damage.
                </p>

                <h3 className="text-xl font-semibold mb-3">Indemnification</h3>
                <p className="text-white/80 mb-4">
                  You agree to defend, indemnify, and hold harmless EightSix Games, its officers, directors, employees, and agents, from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising out of or relating to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Your violation of these Terms</li>
                  <li>Your use of our website or services</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your violation of any applicable laws, rules, or regulations</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Survival</h3>
                <p className="text-white/80 mb-4">
                  The limitations of liability, disclaimers, and indemnification obligations contained in this section will survive any termination or expiration of these Terms and your use of our website and services.
                </p>

                <p className="text-white/80 mb-4">
                  Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for incidental or consequential damages. Accordingly, some of the above limitations may not apply to you.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">6. Payment Terms & Refunds</h2>

                <h3 className="text-xl font-semibold mb-3">Fee Structure</h3>
                <p className="text-white/80 mb-4">
                  Our fee structure typically consists of:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Initial consultation fees (if applicable)</li>
                  <li>Project-based fees for specific services</li>
                  <li>Success fees or commissions on successful co-publishing deals (as agreed)</li>
                  <li>Additional fees for supplementary services (as agreed)</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Payment Terms</h3>
                <p className="text-white/80 mb-4">
                  All fees are payable in accordance with the payment schedule specified in your service agreement. Unless otherwise agreed in writing:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Initial consultation fees are due before the consultation</li>
                  <li>Project-based fees may be split into installments as outlined in your agreement</li>
                  <li>Success fees are typically due upon successful completion of a co-publishing deal</li>
                  <li>All invoices are payable within 30 days of the invoice date</li>
                  <li>Late payments may incur additional charges</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Currency and Payment Methods</h3>
                <p className="text-white/80 mb-4">
                  Unless otherwise specified, all fees are quoted and payable in US Dollars (USD). We accept payment via bank transfer, major credit cards, and other payment methods as specified in your service agreement. Any currency conversion charges or bank fees are the responsibility of the client.
                </p>

                <h3 className="text-xl font-semibold mb-3">Taxes and Duties</h3>
                <p className="text-white/80 mb-4">
                  All fees are exclusive of any applicable taxes, duties, or government charges. You are responsible for paying all such additional charges associated with your payments to us. If we are required to collect or pay any such charges on your behalf, you agree to reimburse us promptly.
                </p>

                <h3 className="text-xl font-semibold mb-3">Refund Policy</h3>
                <p className="text-white/80 mb-4">
                  Our refund policy is as follows:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Initial consultation fees are generally non-refundable once the consultation has taken place</li>
                  <li>Project-based fees may be partially refundable as specified in your service agreement</li>
                  <li>Success fees, once earned and paid, are non-refundable</li>
                  <li>Refund requests must be submitted in writing with a clear explanation of the reason for the request</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Disputes and Chargebacks</h3>
                <p className="text-white/80 mb-4">
                  If you dispute any charges, you agree to:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Contact us first to attempt to resolve the issue before initiating a chargeback</li>
                  <li>Provide all necessary documentation to support your dispute</li>
                  <li>Allow us reasonable time to investigate and respond to your dispute</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Changes to Fees</h3>
                <p className="text-white/80 mb-4">
                  We reserve the right to modify our fee structure at any time. Any changes will be communicated to you in advance and will not affect already signed agreements or ongoing projects unless mutually agreed upon in writing.
                </p>

                <h3 className="text-xl font-semibold mb-3">Account Termination</h3>
                <p className="text-white/80 mb-4">
                  If your account or services are terminated for any reason:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>You remain liable for all outstanding fees</li>
                  <li>Any earned fees remain payable</li>
                  <li>Refunds will be handled according to the refund policy above</li>
                  <li>Any recurring charges will be cancelled</li>
                </ul>

                <p className="text-white/80 mb-4">
                  For specific details about payment terms, fees, and refunds applicable to your engagement with us, please refer to your service agreement. The terms in your service agreement take precedence over these general payment terms.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>

                <h3 className="text-xl font-semibold mb-3">Informal Resolution</h3>
                <p className="text-white/80 mb-4">
                  Before initiating any formal legal proceeding, we strongly encourage you to contact us directly to seek an informal resolution to any disputes. Many issues can be resolved through open communication and good-faith negotiations. Please send your concerns to our support team at support@eightsixgames.com, and we will work with you to address them promptly.
                </p>

                <h3 className="text-xl font-semibold mb-3">Applicable Law</h3>
                <p className="text-white/80 mb-4">
                  These Terms and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of England and Wales. This choice of law applies regardless of your location, but does not override any mandatory consumer protection laws in your jurisdiction.
                </p>

                <h3 className="text-xl font-semibold mb-3">Jurisdiction</h3>
                <p className="text-white/80 mb-4">
                  You agree that any legal action or proceeding between you and EightSix Games shall be brought exclusively in the courts located in England and Wales, except where prohibited by applicable law. You hereby agree to submit to the personal jurisdiction of such courts for the purpose of litigating any claims or disputes between us.
                </p>

                <h3 className="text-xl font-semibold mb-3">Arbitration</h3>
                <p className="text-white/80 mb-4">
                  At our sole discretion, we may require you to submit any disputes arising from these Terms or use of our website, including disputes arising from or concerning their interpretation, violation, invalidity, non-performance, or termination, to final and binding arbitration under the Rules of Arbitration of the International Chamber of Commerce, by one or more arbitrators appointed in accordance with said Rules.
                </p>

                <h3 className="text-xl font-semibold mb-3">Class Action Waiver</h3>
                <p className="text-white/80 mb-4">
                  Any proceedings to resolve or litigate any dispute in any forum will be conducted solely on an individual basis. Neither you nor we will seek to have any dispute heard as a class action or in any other proceeding in which either party acts or proposes to act in a representative capacity. No arbitration or proceeding will be combined with another without the prior written consent of all parties to all affected arbitrations or proceedings.
                </p>

                <h3 className="text-xl font-semibold mb-3">Time Limitation</h3>
                <p className="text-white/80 mb-4">
                  You agree that regardless of any statute or law to the contrary, any claim or cause of action arising out of or related to use of our website or these Terms must be filed within one (1) year after such claim or cause of action arose or be forever barred. This time limitation may not apply to claims that are not subject to limitation under applicable law.
                </p>

                <h3 className="text-xl font-semibold mb-3">Injunctive Relief</h3>
                <p className="text-white/80 mb-4">
                  Notwithstanding the foregoing, either party may seek injunctive or other equitable relief to protect its intellectual property rights in any court of competent jurisdiction.
                </p>

                <h3 className="text-xl font-semibold mb-3">Severability</h3>
                <p className="text-white/80 mb-4">
                  If any provision of these dispute resolution procedures is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the remaining provisions shall otherwise remain in full force and effect and enforceable.
                </p>

                <p className="text-white/80 mb-4">
                  Nothing in this section will prevent either party from seeking injunctive relief (or any other provisional remedy) from any court having jurisdiction over the parties and the subject matter of their dispute relating to these Terms and the agreements incorporated herein by reference.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms & Contact Information</h2>

                <h3 className="text-xl font-semibold mb-3">Modifications to Terms</h3>
                <p className="text-white/80 mb-4">
                  We reserve the right to modify these Terms at any time. We will notify you of any material changes by:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>Posting a notice on our website</li>
                  <li>Sending an email to the address associated with your account</li>
                  <li>Providing notification through our platform</li>
                </ul>

                <p className="text-white/80 mb-4">
                  Changes will become effective immediately upon posting or as otherwise stated in the notification. Your continued use of our website or services after such changes constitutes your acceptance of the modified Terms. If you do not agree to the modified terms, you should discontinue your use of our website and services.
                </p>

                <h3 className="text-xl font-semibold mb-3">Material Changes</h3>
                <p className="text-white/80 mb-4">
                  For material changes to these Terms that significantly affect your rights or obligations:
                </p>
                <ul className="list-disc pl-6 text-white/80 mb-4">
                  <li>We will provide at least 30 days' notice before the changes take effect</li>
                  <li>We will clearly highlight what has changed</li>
                  <li>We will explain how the changes might affect you</li>
                  <li>We will provide you with the option to review and accept the new terms</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <p className="text-white/80 mb-4">
                  For any questions about these Terms or our services, please contact us through any of the following channels:
                </p>

                <div className="mb-6">
                  <p className="text-white/80">Email: support@eightsixgames.com</p>
                  <p className="text-white/80">Phone: +44 (0) 20 XXXX XXXX</p>
                  <p className="text-white/80">Address: 123 Business Street</p>
                  <p className="text-white/80">London, EC1A 1BB</p>
                  <p className="text-white/80">United Kingdom</p>
                </div>

                <h3 className="text-xl font-semibold mb-3">Response Time</h3>
                <p className="text-white/80 mb-4">
                  We strive to respond to all inquiries within 2 business days. For urgent matters related to active services or ongoing projects, please indicate the urgency in your communication, and we will prioritize accordingly.
                </p>

                <h3 className="text-xl font-semibold mb-3">Business Hours</h3>
                <p className="text-white/80 mb-4">
                  Our support team is available Monday through Friday, 9:00 AM to 5:00 PM GMT, excluding UK public holidays. While we monitor communications outside these hours for urgent matters, routine inquiries will be handled during regular business hours.
                </p>

                <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                  <p className="text-white/80 italic">
                    Last Updated: March 2024
                  </p>
                  <p className="text-white/80 italic">
                    These Terms of Service constitute the entire agreement between you and EightSix Games regarding your use of our website and services.
                  </p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 
