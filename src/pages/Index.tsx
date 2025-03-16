import { Presentation } from "@/components/Presentation";
import { Slide } from "@/components/Slide";
import { BulletPoint } from "@/components/BulletPoint";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ModuleCard } from "@/components/ModuleCard";
import { CheckCircle, BarChart3, Briefcase, Notebook, Code, Building, Users, HeartHandshake, Zap, Wheat, Users2, Landmark, TreePine } from "lucide-react";

const Index = () => {
  const comparisonData = [
    {
      application: "Daraz, Food Panda Shops",
      weakness: "No support for physical retailers. No place for Cash and Carries, Marts and other Product Sellers",
      solution: "Hybrid model: Supports both in-store with POS system and online sales"
    },
    {
      application: "Jazz Cash, Easypaisa, Wallet",
      weakness: "A Mobile wallet with no credit-based purchasing for daily needs",
      solution: "Credit facility for salaried individuals & low-income users to purchase essentials"
    },
    {
      application: "Keenu POS",
      weakness: "Limited to cash/card payments",
      solution: "Supports multiple payment methods, including biometric transactions"
    },
    {
      application: "BaadMay, Alif Shop",
      weakness: "Integrates with other brands already present on internet through their platform",
      solution: "Combines online product listing with in-store Management system including POS capabilities and analytics"
    }
  ];

  const modules = [
    {
      title: "Authentication & Authorization",
      icon: <Users className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Login and Signup of Users, Businesses, and Organizations",
        "Separation of functionality based on roles"
      ],
      team: "Team Member 1"
    },
    {
      title: "Business & User Management",
      icon: <Building className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Management of business profiles and assessment",
        "User management and performance tracking",
        "Spending pattern analysis"
      ],
      team: "Team Member 2"
    },
    {
      title: "Inventory & Sales Management",
      icon: <BarChart3 className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Product inventory and listings",
        "Reports generation and analytics",
        "Sales transactions and order processing"
      ],
      team: "Team Member 1"
    },
    {
      title: "Financial Management Suite",
      icon: <Briefcase className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Expense tracking and budget management",
        "Credit and installment systems",
        "Wallet functionality and transaction tracking"
      ],
      team: "Team Member 3"
    },
    {
      title: "POS & Online Integration",
      icon: <Notebook className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Integrated POS system for physical stores",
        "Online storefront with existing inventory",
        "Biometric payment processing"
      ],
      team: "Team Member 2"
    },
    {
      title: "Customer Experience",
      icon: <CheckCircle className="w-5 h-5 text-flexipay-primary mb-2" />,
      features: [
        "Personalized recommendations engine",
        "Loyalty rewards system",
        "Customer support and helpdesk"
      ],
      team: "Team Member 3"
    }
  ];

  const sustainableGoals = [
    {
      goal: "No Poverty",
      icon: <HeartHandshake className="h-8 w-8 text-red-500" />,
      description: "Financial inclusion through credit facilities helps low-income individuals meet their needs without falling into debt traps."
    },
    {
      goal: "Zero Hunger",
      icon: <Wheat className="h-8 w-8 text-amber-500" />,
      description: "Ensuring access to essential food items during financial shortfalls through the buy-now-pay-later feature."
    },
    {
      goal: "Decent Work and Economic Growth",
      icon: <Landmark className="h-8 w-8 text-blue-500" />,
      description: "Empowering small businesses with digital tools promotes economic growth and formal employment opportunities."
    },
    {
      goal: "Industry, Innovation and Infrastructure",
      icon: <Zap className="h-8 w-8 text-purple-500" />,
      description: "Building resilient digital infrastructure and promoting inclusive industrial development through technology."
    },
    {
      goal: "Sustainable Cities and Communities",
      icon: <Users2 className="h-8 w-8 text-green-500" />,
      description: "Promoting sustainable consumption patterns through better budget management and financial planning."
    },
    {
      goal: "Climate Action",
      icon: <TreePine className="h-8 w-8 text-emerald-500" />,
      description: "Reducing carbon footprint through optimized inventory management and digital transactions that minimize physical travel."
    }
  ];

  const slides = [
    <Slide 
      key="title" 
      title="FlexiPay Bridge"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 justify-center items-center text-center"
      titleClassName="text-4xl md:text-6xl mb-8 border-none text-flexipay-primary font-bold"
    >
      <div className="space-y-6">
        <p className="text-2xl md:text-3xl text-flexipay-dark font-medium mb-8">
          Bridging The Gap Between Traditional Retail & Modern E-Commerce
        </p>
        <p className="text-lg text-flexipay-dark/80 italic">
          Buy Now, Pay Later Solution for Business Growth
        </p>
        <p className="text-md text-flexipay-dark/60 mt-12">
          Final Year Project Proposal
        </p>
      </div>
    </Slide>,

    <Slide key="intro" title="1. Introduction" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <p className="text-lg leading-relaxed">
          FlexiPay Bridge is a comprehensive digital transformation solution addressing multiple challenges in today's retail ecosystem:
        </p>
        
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm mt-4">
          <p className="text-gray-800 leading-relaxed mb-4">
            In today's rapidly evolving digital landscape, businesses face a critical growth divide. A survey found that 85% of consumers research products online before making purchases, yet many Pakistani businesses struggle to establish an effective online presence due to resource constraints and technical barriers.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            FlexiPay Bridge introduces a revolutionary approach that addresses multiple pain points in the current retail ecosystem. We tackle the operational inefficiencies of traditional point-of-sale systems, the challenges of inventory management across physical and digital channels, and the complexities of establishing an online marketplace.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Beyond business operations, our solution recognizes that a significant portion of Pakistan's population faces economic hardships with rising inflation rates. FlexiPay provides innovative financial inclusion features that enable consumers to manage budgets effectively and access essential goods through flexible payment options.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border-t-4 border-flexipay-primary shadow-sm">
            <h3 className="font-semibold text-flexipay-primary mb-3 text-lg">Business Integration Solutions</h3>
            <p className="text-gray-700 leading-relaxed">
              Our system integrates physical retail operations with digital marketplaces through a unified POS system, inventory management, and expense tracking. This integration eliminates the need for multiple systems and reduces operational complexity while expanding market reach.
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border-t-4 border-flexipay-accent shadow-sm">
            <h3 className="font-semibold text-flexipay-accent mb-3 text-lg">Financial Inclusion Features</h3>
            <p className="text-gray-700 leading-relaxed">
              FlexiPay introduces innovative financial solutions, including credit-based purchasing for salaried individuals, budget management tools, and personalized shopping experiences that connect consumers with affordable essential goods at the right time.
            </p>
          </div>
        </div>
        
        <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500 shadow-sm">
          <p className="font-medium text-flexipay-primary leading-relaxed">
            By leveraging cutting-edge technologies including React JS, Node JS, and Flutter, FlexiPay Bridge creates a comprehensive ecosystem that empowers businesses with digital tools and provides consumers with financial flexibility, contributing to sustainable economic development.
          </p>
        </div>
      </div>
    </Slide>,

    <Slide key="problem-1" title="2. Problem Statement (Business Challenges)" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 shadow-sm">
          <p className="text-gray-800 leading-relaxed mb-3">
            Traditional retailers face limited growth potential through single-platform sales channels, unable to effectively reach broader markets.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Establishing an online marketplace remains prohibitively complex and expensive for small to medium businesses.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Current POS systems are isolated from online channels, creating disconnected inventory and sales data that leads to management inefficiencies.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Many businesses struggle with inefficient inventory tracking and inadequate financial oversight, leading to missed opportunities.
          </p>
        </div>
      </div>
    </Slide>,
    
    <Slide key="problem-2" title="2. Problem Statement (Consumer Challenges)" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 shadow-sm">
          <p className="text-gray-800 leading-relaxed mb-3">
            Middle-class salaried consumers often struggle with essential purchases due to income constraints before their next paycheck.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Financial limitations lead many to rely on high-interest loans for basic needs, creating damaging debt cycles.
          </p>
          <p className="text-gray-800 leading-relaxed mb-3">
            Traditional POS systems offer limited payment options, forcing consumers to carry cash or cards with no flexibility for credit-based purchasing.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Consumers face challenges in price comparison, budget management, and access to essential goods in underserved areas.
          </p>
        </div>
      </div>
    </Slide>,

    <Slide key="literature" title="3. Literature Review" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-4">
        <p className="text-lg mb-4">Comparative analysis of existing solutions in the market:</p>
        <ComparisonTable data={comparisonData} className="shadow-sm" />
        
        <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
          <h3 className="font-semibold text-flexipay-primary mb-3 text-xl">Key Market Research Findings</h3>
          <BulletPoint className="mb-3">
            <span className="font-medium">Digital transformation</span> is crucial for business survival in the post-pandemic economy
          </BulletPoint>
          <BulletPoint className="mb-3">
            <span className="font-medium">Buy now, pay later</span> solutions have seen 85% growth in adoption rates globally
          </BulletPoint>
          <BulletPoint>
            <span className="font-medium">Hybrid retail models</span> combining physical and digital presence show 40% higher retention rates
          </BulletPoint>
        </div>
      </div>
    </Slide>,

    <Slide key="solution" title="4. Problem Solution" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
          <h3 className="font-semibold text-flexipay-primary mb-3 text-xl">FlexiPay Solution Framework</h3>
          <BulletPoint className="mb-3">
            Comprehensive digital storefront enabling direct customer connections
          </BulletPoint>
          <BulletPoint className="mb-3">
            POS-integrated online store with complete inventory management system
          </BulletPoint>
          <BulletPoint className="mb-3">
            Buy now, pay later feature with credit functionality for salaried consumers
          </BulletPoint>
          <BulletPoint className="mb-3">
            Advanced biometric payment system for seamless and secure transactions
          </BulletPoint>
          <BulletPoint>
            AI-powered personalized recommendations based on customer spending patterns
          </BulletPoint>
        </div>
        
        <h3 className="font-semibold text-lg text-flexipay-dark mt-6">Strategic Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-lg border-t-4 border-flexipay-primary shadow-sm">
            <h4 className="font-semibold text-flexipay-primary mb-2 text-lg">Digital Transformation</h4>
            <p className="text-gray-700">Comprehensive management system with integrated POS service and online storefront</p>
          </div>
          <div className="bg-white p-5 rounded-lg border-t-4 border-flexipay-secondary shadow-sm">
            <h4 className="font-semibold text-flexipay-secondary mb-2 text-lg">Financial Inclusion</h4>
            <p className="text-gray-700">Budget management with buy now pay later feature for broader consumer access</p>
          </div>
          <div className="bg-white p-5 rounded-lg border-t-4 border-flexipay-accent shadow-sm">
            <h4 className="font-semibold text-flexipay-accent mb-2 text-lg">Sustainable Growth</h4>
            <p className="text-gray-700">Contributing to economic development and UN Sustainable Development Goals</p>
          </div>
        </div>

        <div className="mt-6 bg-indigo-50 p-5 rounded-lg border border-indigo-200 shadow-sm">
          <h3 className="font-semibold text-flexipay-primary mb-3 text-xl">Scope & Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-flexipay-dark">For Businesses:</h4>
              <BulletPoint className="mb-1 text-sm">Integrated POS and online storefront</BulletPoint>
              <BulletPoint className="mb-1 text-sm">Comprehensive inventory management</BulletPoint>
              <BulletPoint className="text-sm">Multiple payment processing options</BulletPoint>
            </div>
            <div>
              <h4 className="font-medium text-flexipay-dark">For Consumers:</h4>
              <BulletPoint className="mb-1 text-sm">Mobile wallet with credit functionality</BulletPoint>
              <BulletPoint className="mb-1 text-sm">Personalized shopping recommendations</BulletPoint>
              <BulletPoint className="text-sm">Flexible payment options and loyalty rewards</BulletPoint>
            </div>
          </div>
          <p className="mt-3 text-sm text-gray-600">
            <span className="font-medium">Project Timeline:</span> 12-18 months (Final Year Project timeframe)
          </p>
        </div>
      </div>
    </Slide>,

    <Slide key="sdg" title="4.1 Contribution to UN Sustainable Development Goals" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <p className="text-lg">
          FlexiPay Bridge contributes directly to several United Nations Sustainable Development Goals, aligning our business objectives with global sustainability initiatives:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainableGoals.map((goal, index) => (
            <div key={index} className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center mb-4">
                {goal.icon}
                <h3 className="font-semibold text-flexipay-primary text-center mt-2">{goal.goal}</h3>
              </div>
              <p className="text-sm text-gray-700">{goal.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm mt-4">
          <h3 className="font-semibold text-flexipay-primary mb-2">Long-term Impact</h3>
          <p className="text-gray-700">
            By aligning with these SDGs, FlexiPay Bridge aims to create a sustainable economic ecosystem that not only addresses immediate business and consumer challenges but also contributes to long-term socioeconomic development and environmental sustainability.
          </p>
        </div>
      </div>
    </Slide>,

    <Slide key="modules" title="5. Modules and Work Division" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-4">
        <p className="text-lg mb-4">The system is organized into the following core modules with team assignments:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((module, index) => (
            <ModuleCard
              key={index}
              title={module.title}
              features={module.features}
              icon={module.icon}
              team={module.team}
            />
          ))}
        </div>
      </div>
    </Slide>,

    <Slide key="technologies" title="6. Tools and Technologies" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 shadow-sm">
            <div className="flex justify-center mb-4">
              <Code className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="font-semibold text-blue-700 mb-3 text-xl text-center">Frontend Technologies</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-blue-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">React.js</p>
                  <p className="text-xs text-gray-500">Web Application Interface</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-400 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Tailwind CSS</p>
                  <p className="text-xs text-gray-500">Styling Framework</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-blue-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-300 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Flutter</p>
                  <p className="text-xs text-gray-500">Mobile Application</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 shadow-sm">
            <div className="flex justify-center mb-4">
              <Briefcase className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="font-semibold text-green-700 mb-3 text-xl text-center">Backend Technologies</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Node.js</p>
                  <p className="text-xs text-gray-500">Server Runtime Environment</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-400 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Express.js</p>
                  <p className="text-xs text-gray-500">Web Application Framework</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-green-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-300 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">REST APIs</p>
                  <p className="text-xs text-gray-500">For System Integration</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 shadow-sm">
            <div className="flex justify-center mb-4">
              <BarChart3 className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="font-semibold text-purple-700 mb-3 text-xl text-center">Database & Tools</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-purple-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">MongoDB</p>
                  <p className="text-xs text-gray-500">NoSQL Database</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-purple-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-400 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Git & GitHub</p>
                  <p className="text-xs text-gray-500">Version Control</p>
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-purple-200 flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-300 mr-3"></div>
                <div>
                  <p className="font-medium text-gray-800">Figma</p>
                  <p className="text-xs text-gray-500">UI/UX Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 shadow-sm mt-6">
          <h3 className="font-semibold text-flexipay-dark mb-3 text-xl">Data Gathering Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-flexipay-primary mb-2">Interviews</h4>
              <p className="text-sm text-gray-700">With small-scale businesses like wholesale retailers and shopping marts</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-flexipay-primary mb-2">Questionnaires</h4>
              <p className="text-sm text-gray-700">For established brands and potential business users</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-medium text-flexipay-primary mb-2">Surveys</h4>
              <p className="text-sm text-gray-700">Targeting employed users including salaried and non-salaried consumers</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide key="mockups" title="7. Mockups" titleClassName="text-2xl md:text-3xl font-bold text-flexipay-primary">
      <div className="space-y-6">
        <p className="text-lg mb-6">Preliminary interface designs for key system components:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200">
              <h3 className="font-medium text-flexipay-primary">Business Dashboard</h3>
            </div>
            <div className="p-4 h-64 flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
              <p className="text-gray-400 text-center">
                [Mockup image to be added]<br/>
                <span className="text-sm">Sales analytics and inventory management interface</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200">
              <h3 className="font-medium text-flexipay-primary">Mobile Wallet</h3>
            </div>
            <div className="p-4 h-64 flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
              <p className="text-gray-400 text-center">
                [Mockup image to be added]<br/>
                <span className="text-sm">User wallet with credit features and transaction history</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200">
              <h3 className="font-medium text-flexipay-primary">POS System</h3>
            </div>
            <div className="p-4 h-64 flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
              <p className="text-gray-400 text-center">
                [Mockup image to be added]<br/>
                <span className="text-sm">Integrated point-of-sale system with biometric payment options</span>
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
            <div className="bg-slate-100 p-3 border-b border-slate-200">
              <h3 className="font-medium text-flexipay-primary">Online Storefront</h3>
            </div>
            <div className="p-4 h-64 flex items-center justify-center bg-gradient-to-r from-gray-50 to-gray-100">
              <p className="text-gray-400 text-center">
                [Mockup image to be added]<br/>
                <span className="text-sm">Customer-facing marketplace with personalized recommendations</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm mt-4">
          <h3 className="font-semibold text-flexipay-primary mb-3">System Limitations & Constraints</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BulletPoint className="mb-2">
              <div>
                <span className="font-medium">Internet Connectivity:</span>
                <p className="text-sm text-gray-600">System requires stable internet connection to function</p>
              </div>
            </BulletPoint>
            <BulletPoint className="mb-2">
              <div>
                <span className="font-medium">Hardware Requirements:</span>
                <p className="text-sm text-gray-600">Compatible devices needed for biometric authentication</p>
              </div>
            </BulletPoint>
            <BulletPoint>
              <div>
                <span className="font-medium">Third-party Dependencies:</span>
                <p className="text-sm text-gray-600">Reliance on external payment processors and APIs</p>
              </div>
            </BulletPoint>
          </div>
        </div>
      </div>
    </Slide>,

    <Slide 
      key="thankyou" 
      title="Thank You"
      className="bg-gradient-to-br from-blue-50 to-indigo-100 justify-center items-center text-center"
      titleClassName="text-3xl md:text-4xl mb-6 border-none font-bold text-flexipay-primary"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-flexipay-dark">
          FlexiPay Bridge
        </h3>
        <p className="text-lg text-flexipay-dark/80">
          Empowering businesses and consumers with integrated digital solutions
        </p>
        <div className="mt-8 text-sm text-gray-600">
          <p>Team Members: [Names]</p>
          <p>Supervisor: [Name]</p>
          <p>Department of Computer Science</p>
        </div>
      </div>
    </Slide>
  ];

  return <Presentation slides={slides} title="FlexiPay Bridge Presentation" />;
};

export default Index;
