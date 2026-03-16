'use client'

import React from 'react'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPost() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">
      {/* Fixed Navigation */}
      <div 
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5"
        style={{ 
          transform: 'translateZ(0)',
          willChange: 'transform',
          contain: 'layout paint style'
        }}
      >
        <Navigation />
      </div>
      
      {/* Spacer to prevent content from being hidden behind the fixed navbar */}
      <div className="h-12 md:h-16"></div>
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <Link href="/blog" className="inline-flex items-center text-purple-400 mb-8 hover:text-purple-300 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <div className="flex items-center text-sm text-white/60 mb-8">
              <span>March 5, 2024</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              How to Publish a Game on Steam in China – A Step-by-Step Guide
            </h1>
            <Image
              src="/blog/steam-china-publishing.jpg"
              alt="How to Publish a Game on Steam in China"
              width={800}
              height={450}
              className="w-full aspect-video object-cover rounded-xl mb-16 shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xl leading-relaxed mb-10">
                China is home to one of the world's largest gaming markets, so it's no surprise that many developers are eager to publish their games on Steam in China. The good news is that there are two main routes to reach Chinese PC gamers via Steam. In this guide, we'll explain each approach in detail, compare their pros and cons (including regulatory and monetisation differences), and help you decide which path is right for you.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step 1: Choose Your Route – Steam Global vs Steam China</h2>
              <p className="mb-6 leading-relaxed">
                When it comes to Steam publishing in China, you have two options to get your game in front of Chinese players:
              </p>
              
              <div className="bg-white/5 p-6 rounded-xl mb-8 border border-white/10">
                <p className="mb-4 leading-relaxed">
                  <strong className="text-purple-400">Route 1: Steam Global (International Steam)</strong> – Release your game on Steam's global platform as you normally would. This version of Steam is accessible in mainland China (as of now) and does not require a Chinese gaming license (no ISBN needed). Essentially, if your game is on the international Steam store, Chinese players can already discover and purchase it.
                </p>
                
                <p className="leading-relaxed">
                  <strong className="text-purple-400">Route 2: Steam China (Official Chinese Steam)</strong> – Publish your game on the official Chinese version of Steam (known as "Steam China" or 蒸汽平台). This route requires government approval. In practice, that means you must obtain an ISBN license (游戏版号) from China's National Press and Publication Administration (NPPA) and comply with Chinese regulations before your game can be listed on Steam China.
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <p className="leading-relaxed">
                  <strong className="text-xl font-semibold">What's an ISBN?</strong> In China, an ISBN isn't just for books – it's the permit number for video game publication. If you want an official release in China (e.g. on Steam China), your game must be approved by authorities and granted an ISBN. However, an ISBN is not required for releasing on Steam's global store (which operates in a grey area, but is widely used in China). This fundamental difference will influence your publishing strategy.
                </p>
              </div>

              <h3 className="text-2xl font-semibold mt-10 mb-6">Steam Global vs Steam China at a Glance</h3>
              
              <div className="overflow-x-auto mb-12">
                <table className="min-w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="bg-purple-900/30">
                      <th className="px-6 py-4 text-left text-purple-300 font-bold">Aspect</th>
                      <th className="px-6 py-4 text-left text-purple-300 font-bold">Steam Global (International)</th>
                      <th className="px-6 py-4 text-left text-purple-300 font-bold">Steam China (Official)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="px-6 py-5 font-medium">Chinese License (ISBN)</td>
                      <td className="px-6 py-5">Not required – No Chinese ISBN or local publisher needed. Your game can be bought in China if it's on the global Steam store.</td>
                      <td className="px-6 py-5">Mandatory – Must obtain a government-issued ISBN license via NPPA approval to publish on Steam China. Requires a Chinese publisher partner.</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="px-6 py-5 font-medium">Regulatory Approval</td>
                      <td className="px-6 py-5">None needed (bypasses Chinese game approval process). No content review by authorities before release.</td>
                      <td className="px-6 py-5">Full approval needed (censorship and content review by authorities). Only games meeting all regulations get licensed.</td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="px-6 py-5 font-medium">Time to Market</td>
                      <td className="px-6 py-5">Immediate – you can publish globally and Chinese players can access it right away.</td>
                      <td className="px-6 py-5">Lengthy – approval can take months or even over a year, with no guarantee of success due to quotas on new game licenses.</td>
                    </tr>
                    <tr className="hover:bg-white/10 transition-colors">
                      <td className="px-6 py-5 font-medium">Content Restrictions</td>
                      <td className="px-6 py-5">No forced changes – you don't need to alter game content for Chinese regulations (unless you choose to). Avoid obviously sensitive content, but there's no formal check.</td>
                      <td className="px-6 py-5">Strict rules – game content must comply with Chinese laws (e.g. limited gore, no sensitive political/religious themes, etc.). You may need to modify or censor aspects of your game to meet requirements during the approval process.</td>
                    </tr>
                    <tr className="bg-white/5 hover:bg-white/10 transition-colors">
                      <td className="px-6 py-5 font-medium">Monetisation & Revenue</td>
                      <td className="px-6 py-5">Standard Steam revenue share (Valve takes ~30%, you get ~70%). No extra middlemen. Chinese players can pay in RMB via Alipay/WeChat Pay on Steam, so purchasing is easy.</td>
                      <td className="px-6 py-5">Shared revenue – typically you'll split profits with a Chinese publisher who helps get the ISBN. Deals often give local publishers around 50% of revenue (negotiable), plus Valve's cut. On the upside, official release may reach new audiences, potentially boosting sales.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-8 leading-relaxed">
                As you can see, the Steam Global route is faster and simpler (no need for ISBN or Chinese partners), whereas Steam China is a more complex, long-term endeavour that grants an official foothold in the market. Next, we'll walk through each route step-by-step.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step 2: Publish via Steam Global (No Chinese License Required)</h2>
              <p className="mb-6 leading-relaxed">
                For most indie developers, the easiest way to reach Chinese players is publishing on Steam's global store. Steam is not blocked in China, so any game you publish internationally can potentially find a Chinese audience. In fact, your game might already have Chinese players if it's available on Steam worldwide. Here's how to maximise this route:
              </p>
              
              <ol className="list-decimal pl-5 space-y-8 my-8">
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Publish your game on Steam (as you normally would)</p>
                  <p className="leading-relaxed">If your game is not yet on Steam, you'll need to go through Steamworks to set up your store page, build, pricing, etc. There are no extra steps specifically for China at this point – you do not need a Chinese business entity, publisher, or ISBN license to launch globally on Steam. Once your game is live on the international Steam store, it's effectively "published" in China by default, since Chinese gamers can access Steam's global storefront and buy games there.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Localise your game for Chinese players</p>
                  <p className="leading-relaxed">While not strictly required, adding Simplified Chinese language support is highly recommended to attract China's huge gamer population. Chinese is the second most common language on Steam by user count, and many Chinese players actively seek out games that support their language. By providing a Chinese translation (for the interface, subtitles, etc.), you remove a major barrier – Chinese gamers often complain "没有中文" ("no Chinese [language]") if a game lacks localisation. A quality translation can significantly boost your wishlists and sales in China. Additionally, localise your Steam store page (description, screenshots with Chinese text) to improve visibility on Steam when users filter by language.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Leverage Chinese gaming platforms as "front-ends" to Steam</p>
                  <p className="leading-relaxed">A unique aspect of reaching Chinese players without an official release is the existence of local platforms that act as portals to Steam. Services like Tencent's WeGame and Sonkwo essentially integrate or resell Steam global content to Chinese users. For example, Sonkwo (launched by publisher CE-Asia) has distributed keys for thousands of Steam games in China, offering a local storefront, community, and payment options while delivering Steam keys to customers. In other words, Chinese players can discover and buy your game through Sonkwo or WeGame, and then launch it via Steam – all without you needing a license or separate Chinese version.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Enable convenient payment options</p>
                  <p className="leading-relaxed">Valve has made it easy for Chinese gamers to buy games on Steam global by supporting local payment methods. Ensure that your Steam game is priced appropriately for the region (Steam allows regional pricing in Chinese RMB), and note that Chinese users can pay via Alipay or WeChat Pay in RMB on the global Steam store. This means buying your game is as easy for a user in Beijing as it is for one in London. No separate monetisation setup is needed on your part – just use Steam's existing infrastructure.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Promote your game on Chinese social media and communities</p>
                  <p className="leading-relaxed">While you can't run official ads without a license, you can engage in community-driven marketing. Set up accounts on Chinese platforms such as Weibo (Twitter-like microblog), Bilibili (video streaming, popular for game content), WeChat (for community groups), Douyin (TikTok in China), and gaming forums. Share news, trailers, and updates in Chinese, interact with player comments, and consider working with Chinese gaming influencers (content creators known as "UP主" on Bilibili or streamers on Douyu/Huya).</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Provide support and communicate with Chinese players</p>
                  <p className="leading-relaxed">To build goodwill, be responsive to Chinese fans. This could mean moderating a Steam forum thread in Chinese, responding to feedback (even if via translation), or updating your game with features that Chinese players request (such as font fixes for Chinese text, cultural references, etc.). Happy Chinese users can become evangelists for your game in their circles.</p>
                </li>
              </ol>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <p className="font-semibold text-xl mb-4">Pros of the Steam Global route:</p>
                <p className="mb-6 leading-relaxed">
                  It's quick, accessible, and cost-effective. You avoid the lengthy censorship and approval process, so you can start earning revenue from Chinese players immediately. You have full control – you publish on your own, no need to share profits with a middleman (aside from Steam's standard cut). Moreover, you don't have to modify your game's content to fit government restrictions, as unlicensed games on Steam global aren't subject to China's content censorship regime.
                </p>
                
                <p className="font-semibold text-xl mb-4">Cons of the Steam Global route:</p>
                <p className="leading-relaxed">
                  You forego the benefits of "legal" status in China. This means you cannot tap into certain distribution channels (no placement on official app stores or local PC game stores beyond those that piggyback on Steam). You also can't run broad advertising campaigns in Mainland China – for instance, you can't buy ads on Baidu or tap into pre-load opportunities on platforms like WeGame – because your game isn't officially approved.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step 3: Publish via Steam China (Official Release with ISBN License)</h2>
              <p className="mb-6 leading-relaxed">
                If your goal is to have an official presence in the Chinese market – for example, you want to be on the Steam China client, appear in local gaming media as an approved title, and fully legitimise your game in China – then you'll need to go through the formal publishing process. Here are the steps to publish a game on Steam China:
              </p>
              
              <ol className="list-decimal pl-5 space-y-8 my-8">
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Secure a Chinese publishing partner</p>
                  <p className="leading-relaxed">Foreign developers cannot directly apply for a game license (ISBN) in China; you'll need a local publisher or agent to sponsor your game. This is often a Chinese game publishing company who will essentially handle the bureaucratic process on your behalf. Finding the right partner is crucial – this could be a big company like Tencent or NetEase, or a smaller publisher that specialises in indie games.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Prepare your game for approval (censorship review)</p>
                  <p className="leading-relaxed">Before submitting to authorities, your Chinese publisher will help ensure the game content abides by all regulations. Be ready to make changes if needed. Common requirements include: removing or toning down blood and gore (e.g. turn blood black or green), replacing skeletons or skull icons with more culturally acceptable symbols, eliminating sensitive political references or maps that show disputed borders, disabling chat features that could be problematic, and so on.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Submit the game for an ISBN (government approval)</p>
                  <p className="leading-relaxed">Your partner will compile the application dossier to submit to the National Press and Publication Administration. This includes a ton of paperwork: game build files, scripts or story synopsis, screenshots of all content, IDs and credentials of the publishing company, and more. The game will be reviewed by censors. The approval process can be lengthy – in recent years, the government has limited the number of new game licenses issued, creating a backlog.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Launch on Steam China with your partner and Valve/Perfect World</p>
                  <p className="leading-relaxed">Steam China is operated as a partnership between Valve and the Chinese company Perfect World. Once you have the license, coordination with Steam China's team (likely via Perfect World) will be necessary to list the game on the Steam China client/store.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Monetisation and distribution adjustments</p>
                  <p className="leading-relaxed">With an official launch, you might need to adjust how you monetise in China. For instance, if your game has in-app purchases or DLC, ensure they comply with pricing regulations and are covered by the license. Revenue from Steam China sales will typically be collected in RMB and then shared between Valve/Perfect World, your Chinese publisher, and you according to your agreements.</p>
                </li>
                
                <li className="pl-3">
                  <p className="font-bold text-lg text-purple-300 mb-2">Execute a full marketing campaign in China</p>
                  <p className="leading-relaxed">Now that your game has an ISBN and is officially published in China, you can take advantage of all marketing channels including Chinese media coverage, app stores and promotions, paid advertisements, influencer campaigns, community events, and monetisation events.</p>
                </li>
              </ol>
              
              <div className="bg-gradient-to-r from-purple-900/30 to-transparent p-6 rounded-xl mb-10 border-l-4 border-purple-500">
                <p className="font-semibold text-xl mb-4">Pros of the Steam China route:</p>
                <p className="mb-6 leading-relaxed">
                  You gain a legitimate, official entry into China's gaming market. Your game can enjoy exposure on the curated Steam China platform (with far fewer competing titles on the store). You can leverage the vast resources of a local publisher and the marketing channels that were previously closed. Also, you hedge against the risk of Steam global being blocked – even if that happens, your licensed game can still be sold in China through Steam China or other approved platforms.
                </p>
                
                <p className="font-semibold text-xl mb-4">Cons of the Steam China route:</p>
                <p className="leading-relaxed">
                  The process is slow, complex, and not guaranteed. You might spend many months for approval, during which time interest could wane (time-to-market risk). Not every game will get an ISBN – the government heavily limits approvals, especially for foreign games. There's also a cost in terms of creative freedom: you may have to alter your game's content to satisfy regulators, which could dilute the experience for players or conflict with your artistic vision.
                </p>
              </div>
              
              <div className="my-12 bg-white/5 p-8 border border-white/10 rounded-xl shadow-lg">
                <Image
                  src="/blog/steam-china-storefront.jpg"
                  alt="Steam China storefront"
                  width={800}
                  height={450}
                  className="w-full rounded-lg mb-6 shadow-md"
                />
                <p className="text-sm text-white/70 italic">
                  Steam China storefront (early 2021) – launched with only 53 government-approved games, a stark contrast to the thousands of titles on Steam global. Going the official route means entering a much more curated platform, but one backed by government sanction.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step 4: Steam Global vs Steam China – Pros & Cons Comparison</h2>
              <p className="mb-6 leading-relaxed">
                To summarise the two routes, here's a quick comparison of their advantages and disadvantages:
              </p>
              
              <div className="bg-white/5 rounded-xl p-6 mb-8 border border-white/10">
                <h4 className="font-bold text-xl text-purple-300 mb-4">Steam Global Route (No ISBN, unofficial):</h4>
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-400 mb-3">Pros:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Fast and easy setup (just publish on Steam)</li>
                      <li>No regulatory hurdles or content censorship</li>
                      <li>Immediate access to Chinese gamers</li>
                      <li>Full creative control</li>
                      <li>Larger share of revenue (no local publisher cut)</li>
                      <li>Build a fanbase with minimal investment</li>
                      <li>Normal monetisation via RMB payments</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-400 mb-3">Cons:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>No legal recognition in China</li>
                      <li>Can't do official promotions or marketing</li>
                      <li>Limited to community and word-of-mouth</li>
                      <li>Risk of Steam global being restricted in future</li>
                      <li>Missing conservative customers who prefer approved games</li>
                      <li>Operating under the radar in the market</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-xl p-6 mb-10 border border-white/10">
                <h4 className="font-bold text-xl text-purple-300 mb-4">Steam China Route (ISBN, official):</h4>
                <div className="flex space-x-6">
                  <div className="flex-1">
                    <h5 className="font-semibold text-green-400 mb-3">Pros:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Fully legal distribution in China</li>
                      <li>Access to broad marketing and distribution channels</li>
                      <li>Placement on official Steam China store</li>
                      <li>Government approval secures your position</li>
                      <li>Can run ads and do press openly</li>
                      <li>Less competition on Steam China's curated store</li>
                      <li>Opens doors to collaborations and promotions</li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-red-400 mb-3">Cons:</h5>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Requires significant upfront work</li>
                      <li>Lengthy approval process with possible rejection</li>
                      <li>Must partner with Chinese publisher</li>
                      <li>Share significant portion of revenue</li>
                      <li>Content changes often required</li>
                      <li>May need two versions (global and China)</li>
                      <li>High effort investment</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <p className="mb-10 leading-relaxed">
                In many cases, developers adopt a hybrid strategy: release on Steam global first (to start generating revenue and see if the game gains traction in China), and then pursue the Steam China route if the demand is high or if they want to solidify long-term earnings. This way, you get the best of both worlds – you're not foregoing the grey market revenue, and you can still plan for an official launch down the line.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6">Step 5: How EightSix Can Assist with Your China Publishing Strategy</h2>
              <p className="mb-6 leading-relaxed">
                Deciding between Steam Global and Steam China can be daunting. The right approach depends on your game's content, your resources, and your goals in the Chinese market. This is where EightSix comes in. EightSix has expertise in the Chinese gaming landscape and can guide developers through the entire process of Steam publishing in China – from initial market entry to full official launch.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-xl text-purple-300 mb-4">Choosing the best route:</h4>
                  <p className="leading-relaxed">
                    Not sure which option suits your game? EightSix can help analyse your game's potential in China (genre fit, existing Chinese fan interest, etc.) and weigh the pros and cons specific to your situation. For example, if your game has strong organic uptake on Steam global, EightSix might suggest building on that momentum through community engagement. If your game would greatly benefit from an official release (say, a multiplayer title that needs local servers and official support), EightSix can advise when and how to pursue the ISBN route.
                  </p>
                </div>
                
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-xl text-purple-300 mb-4">Navigating regulations:</h4>
                  <p className="leading-relaxed">
                    If you do aim for an ISBN for Steam China, EightSix can demystify the regulatory requirements. We'll explain the compliance checklist in plain terms and help identify any content in your game that might raise red flags with censors. Early guidance in this area can save you time – you can proactively make culturally appropriate adjustments with our insight, increasing your chances of approval.
                  </p>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 my-8">
                <h3 className="text-xl font-bold mb-4">Need help with your China publishing strategy?</h3>
                <p className="mb-4">
                  At EightSix Games, we specialize in helping Western developers navigate the complexities of the Chinese market. Our team of experts can guide you through the entire process, from choosing the right publishing route to finding a Chinese partner and marketing your game to Chinese players.
                </p>
                <Link href="/contact" className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                  Get in touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              <h2>Conclusion</h2>
              <p>
                Publishing a game on Steam in China comes down to two main paths: the quick global route (no license required) and the official Steam China route (government license required). There is no one-size-fits-all answer – some developers will find a large Chinese audience without ever getting an ISBN, while others will benefit from going through the approval process to solidify their position in the market.
              </p>
              
              <p>
                The Chinese gaming community is enormous and passionate. By localising your game and engaging with players through the channels available, you can achieve significant success even as an "unofficial" title. And if your ambitions and resources allow, securing that coveted ISBN and launching on Steam China can take your success to the next level – establishing your game in the world's biggest gaming market with full support.
              </p>
              
              <p>
                Whichever route you choose, keep the experience of Chinese players in mind. Respect the cultural differences, listen to feedback, and adapt your strategy as needed. Many foreign developers have navigated this journey successfully – and with partners like EightSix by your side, you can confidently chart your course in China.
              </p>
              
              <p>
                Unlocking China's gaming market is a step-by-step process, but with the guidance from this guide (and expert help when needed), you're well on your way to sharing your game with millions of new players.
              </p>
            </motion.div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-white/5">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/steam-global-vs-steam-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/steam-global-vs-china.jpg" 
                    alt="Steam Global vs Steam China"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Steam Global vs Steam China: What's the Difference for Developers?
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/isbn-license-china-game-release">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/isbn-license-china.jpg" 
                    alt="ISBN License in China"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Do I Need an ISBN License to Release My Game in China?
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Link href="/blog/marketing-your-game-in-china">
                <div className="aspect-video overflow-hidden">
                  <Image 
                    src="/blog/marketing-china-games.jpg" 
                    alt="Marketing Games in China"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    Marketing Your Game in China: 5 Strategies for Steam Titles
                  </h3>
                  <span className="text-purple-400 text-sm font-medium inline-flex items-center">
                    Read article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 