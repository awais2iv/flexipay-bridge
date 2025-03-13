
import { Presentation } from "@/components/Presentation";
import { Slide } from "@/components/Slide";
import { BulletPoint } from "@/components/BulletPoint";
import { ComparisonTable } from "@/components/ComparisonTable";
import { ModuleCard } from "@/components/ModuleCard";

const Index = () => {
  const comparisonData = [
    {
      application: "Daraz, Food Panda Shops",
      weakness: "No support for physical retailers. No place for Cash and Carries, Marts and other Product Sellers",
      solution: "Hybrid model: Supports both in-store with POS system and online sales"
    },
    {
      application: "Jazz Cash, Easypaisa, Wallet",
      weakness: "A Mobile wallet No credit based purchasing for daily needs.",
      solution: "Credit facility for salaried individuals & low-income users to purchase essentials."
    },
    {
      application: "Keenu POS",
      weakness: "Limited to cash/card payments.",
      solution: "Supports multiple payment methods, including biometric transactions."
    },
    {
      application: "BaadMay, Alif Shop",
      weakness: "Integrates with other brands already present on internet through their platform",
      solution: "Combines online product listing with in-store Management system including POS capabilities and advanced analytics to boost reach."
    }
  ];

  const modules = [
    {
      title: "Authentication & Authorization",
      features: [
        "Login and Signup of Users, Businesses, and Organizations",
        "Separation of functionality based on roles."
      ]
    },
    {
      title: "Businesses Management",
      features: [
        "Management of Users that register as businesses",
        "Assessment based on the user reviews"
      ]
    },
    {
      title: "User Management",
      features: [
        "Management of Users",
        "Performance assessment based on spending patterns"
      ]
    },
    {
      title: "Inventory Management",
      features: [
        "Manages and tracks product inventory and listings.",
        "Generation of Reports"
      ]
    },
    {
      title: "Sales Management",
      features: [
        "Oversees sales transactions and order processing."
      ]
    },
    {
      title: "Expense Management",
      features: [
        "Monitors operational expenses and budget tracking."
      ]
    },
    {
      title: "Supplier Management",
      features: [
        "Management of Suppliers",
        "Creation of orders to suppliers"
      ]
    },
    {
      title: "Credit Management",
      features: [
        "Management of daybook for businesses",
        "Credit Management for the users"
      ]
    },
    {
      title: "Instalment Management",
      features: [
        "Creation of Instalment Plans",
        "Return and management of instalments"
      ]
    },
    {
      title: "Wallet Management",
      features: [
        "Management of mobile wallet",
        "Tracking of transactions",
        "Generation of account statements"
      ]
    },
    {
      title: "Profile Management",
      features: [
        "Management of Profile",
        "Update of Personal, financial information"
      ]
    },
    {
      title: "Budget Management",
      features: [
        "Management of Budgets",
        "Spending control based on budget allocation"
      ]
    },
    {
      title: "Loyalty Rewards",
      features: [
        "Incentivizes repeat purchases through rewards and loyalty points."
      ]
    },
    {
      title: "POS System",
      features: [
        "Development of POS system",
        "Integration with reports generation for inventory"
      ]
    },
    {
      title: "Personalized Recommendations",
      features: [
        "Tailored recommendations based on user spending patterns."
      ]
    },
    {
      title: "Customer Support",
      features: [
        "Development of Help Desk for user queries",
        "Dispute Resolution for Admin"
      ]
    }
  ];

  const slides = [
    // Title Slide
    <Slide 
      key="title" 
      title="FlexiPay Bridge"
      className="bg-gradient-to-br from-flexipay-light to-blue-100 justify-center items-center text-center"
      titleClassName="text-4xl md:text-5xl mb-6 border-none"
    >
      <div className="space-y-4">
        <p className="text-2xl md:text-3xl text-flexipay-dark font-medium mb-8">
          Bridging The Gap Between Traditional Retail & Modern E-Commerce
        </p>
        <p className="text-lg text-flexipay-dark/80 italic">
          Buy Now, Pay Later Solution for Business Growth
        </p>
      </div>
    </Slide>,

    // Introduction Slide
    <Slide key="intro" title="Introduction">
      <div className="space-y-4">
        <p className="text-lg">
          In today's digital landscape, businesses face a growing divide:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-700 mb-2">Digital Adopters</h3>
            <p>Experiencing substantial financial gains through expanded reach and digital efficiency.</p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-700 mb-2">Digital Laggards</h3>
            <p>Facing challenges including reduced market share and lower customer engagement.</p>
          </div>
        </div>
        <BulletPoint>
          <span className="font-medium">85% of consumers</span> research products online before purchasing
        </BulletPoint>
        <BulletPoint>
          Many Pakistani businesses struggle to establish online presence due to limited resources
        </BulletPoint>
        <BulletPoint>
          A significant portion of Pakistan's population faces economic hardships
        </BulletPoint>
        <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <p className="font-medium text-flexipay-primary">
            FlexiPay bridges this gap by empowering traditional retail businesses with integrated online presence and providing a "buy now, pay later" solution for salaried consumers.
          </p>
        </div>
      </div>
    </Slide>,

    // Problem Statement
    <Slide key="problem" title="Problem Statement">
      <div className="space-y-4">
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200 mb-6">
          <h3 className="font-semibold text-amber-700 mb-2">Business Challenges</h3>
          <BulletPoint>
            Businesses struggle to increase sales from a single platform
          </BulletPoint>
          <BulletPoint>
            Online presence is currently too hectic and expensive to maintain
          </BulletPoint>
          <BulletPoint>
            Limited scalability and customer growth without digital integration
          </BulletPoint>
        </div>
        
        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
          <h3 className="font-semibold text-purple-700 mb-2">Consumer Challenges</h3>
          <BulletPoint>
            Middle-class salaried consumers struggle to buy essentials at month-end
          </BulletPoint>
          <BulletPoint>
            Financial limitations lead to high-interest loans to fulfill basic needs
          </BulletPoint>
        </div>
        
        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
          <h3 className="font-semibold text-emerald-700 mb-2">Payment System Challenges</h3>
          <BulletPoint>
            Lack of centralized payment solutions leads to processing delays
          </BulletPoint>
          <BulletPoint>
            Restrictive terms and conditions hinder efficient cash flow management
          </BulletPoint>
        </div>
      </div>
    </Slide>,

    // Solution
    <Slide key="solution" title="Solution & Objectives">
      <div className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-flexipay-primary mb-2">FlexiPay Solution</h3>
          <BulletPoint>
            Digital storefront for direct customer connection
          </BulletPoint>
          <BulletPoint>
            POS-integrated online store and management system
          </BulletPoint>
          <BulletPoint>
            Buy now, pay later feature with credit functionality
          </BulletPoint>
          <BulletPoint>
            Biometric payment system for seamless transactions
          </BulletPoint>
          <BulletPoint>
            Personalized recommendations based on spending patterns
          </BulletPoint>
        </div>
        
        <h3 className="font-semibold text-lg text-flexipay-dark mt-4">Key Objectives</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-flexipay-primary mb-2">Digital Transformation</h4>
            <p className="text-sm">Enhanced expense management system providing POS service</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-flexipay-secondary mb-2">Personalized Experience</h4>
            <p className="text-sm">Budget management with buy now pay later feature and recommendations</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-semibold text-flexipay-accent mb-2">Sustainable Development</h4>
            <p className="text-sm">Contributing to UN Sustainable Development Goals</p>
          </div>
        </div>
      </div>
    </Slide>,

    // Competitive Analysis
    <Slide key="comparison" title="Competitive Analysis">
      <ComparisonTable data={comparisonData} />
    </Slide>,

    // Scope
    <Slide key="scope" title="Project Scope">
      <div className="space-y-4">
        <p>The scope encompasses solutions for both business owners and users:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-flexipay-primary mb-2">For Businesses</h3>
            <BulletPoint>Web-based POS system for effective management</BulletPoint>
            <BulletPoint>Online storefront from existing inventory</BulletPoint>
            <BulletPoint>Management of daybook for loyal customers</BulletPoint>
            <BulletPoint>Transaction histories and performance reports</BulletPoint>
            <BulletPoint>Multiple payment methods including biometric</BulletPoint>
            <BulletPoint>B2B model for direct supplier connections</BulletPoint>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-700 mb-2">For Users</h3>
            <BulletPoint>Mobile wallet with built-in online store</BulletPoint>
            <BulletPoint>Access to daily household and healthcare products</BulletPoint>
            <BulletPoint>Personalized recommendations based on spending</BulletPoint>
            <BulletPoint>Buy now, pay later with credit feature</BulletPoint>
            <BulletPoint>Flexible payment options including biometric</BulletPoint>
          </div>
        </div>
        
        <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-slate-700">
            <span className="font-medium">Timeline:</span> 1-1.5 years (FYP timeframe)
          </p>
          <p className="text-slate-700 mt-2">
            <span className="font-medium">Technologies:</span> React, Node.js (Web Application) and Flutter (Mobile App)
          </p>
        </div>
      </div>
    </Slide>,

    // Modules
    <Slide key="modules" title="System Modules">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {modules.map((module, index) => (
          <ModuleCard
            key={index}
            title={module.title}
            features={module.features}
          />
        ))}
      </div>
    </Slide>,

    // Limitations
    <Slide key="limitations" title="System Limitations & Constraints">
      <div className="space-y-4">
        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
          <BulletPoint>
            <span className="font-medium">Internet Availability:</span> System requires internet connectivity to function
          </BulletPoint>
          <BulletPoint>
            <span className="font-medium">Hardware Compatibility:</span> Compatible hardware needed for biometric payments
          </BulletPoint>
          <BulletPoint>
            <span className="font-medium">Third-party Dependencies:</span> Potential downtime and restrictions from service providers
          </BulletPoint>
        </div>
      </div>
    </Slide>,

    // Data Gathering & Technologies
    <Slide key="technologies" title="Data Gathering & Technologies">
      <div className="space-y-6">
        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
          <h3 className="font-semibold text-flexipay-dark mb-3">Data Gathering Approach</h3>
          <p>To acquire information for FlexiPay, we will employ:</p>
          <BulletPoint>Interviews with small-scale businesses like wholesale retailers and shopping marts</BulletPoint>
          <BulletPoint>Questionnaires for already established brands</BulletPoint>
          <BulletPoint>Surveys targeting employed users including salaried and non-salaried users</BulletPoint>
        </div>
        
        <h3 className="font-semibold text-lg text-flexipay-dark mt-4">Technologies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
            <h4 className="font-semibold text-flexipay-primary mb-2">Frontend</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <p>React JS (Web)</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <p>Flutter (Mobile)</p>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-200 shadow-sm">
            <h4 className="font-semibold text-green-700 mb-2">Backend</h4>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p>Node.js</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p>Express.js</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg border border-purple-200 shadow-sm">
          <h4 className="font-semibold text-purple-700 mb-2">Database</h4>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <p>MongoDB (NoSQL)</p>
          </div>
        </div>
      </div>
    </Slide>,

    // Thank You
    <Slide 
      key="thankyou" 
      title="Thank You"
      className="bg-gradient-to-br from-flexipay-light to-blue-100 justify-center items-center text-center"
      titleClassName="text-3xl md:text-4xl mb-6 border-none"
    >
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-flexipay-dark">
          FlexiPay Bridge
        </h3>
        <p className="text-lg text-flexipay-dark/80">
          Empowering businesses and consumers with integrated digital solutions
        </p>
      </div>
    </Slide>
  ];

  return <Presentation slides={slides} title="FlexiPay Bridge Presentation" />;
};

export default Index;
