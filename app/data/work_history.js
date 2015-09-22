$(document).ready(function(){
  this.wh = {
    header: 'Work History',
    displayHeading: false,
    companies: [{
        startDate: 'August 2014',
        endDate: '',
        isCurrent: true,
        company: "BroadVision, Inc.",
        city: "Redwood City",
        state: "CA",
        jobTitle: "Front-end Engineer",
        descriptions: [{
          callout: "",
          text: "Responsible for delivering a rock-solid user-experience across all web platforms. The Vmoso product-line brings a unified communication and collaboration platform to the enterprise. The role requires coordination among the various client teams to sync deliverables, along with collaborating with the server team to ensure the proper APIs are created to fulfill the vision of delivering a uniform experience across all devices."
        }],
        tags: ["front-end","ui-ux","javascript","product"],
        displaySkill: true,
        requiredSkills: ["Backbone","Handlebars","jQuery","Javascript","HTML","CSS","RESTful Web Services","SVN"],
        sites: [],
        pageBreak: false
      }, {
        startDate: 'November 2013',
        endDate: 'August 2014',
        isCurrent: false,
        company: "Randstad Technologies US",
        city: "Redwood City",
        state: "CA",
        jobTitle: "Contractor - CSS Engineer",
        descriptions: [{callout: "", text: "On contract with BroadVision, Inc."}],
        tags: ["front-end","ui-ux","javascript","product"],
        displaySkill: false,
        requiredSkills: ["Backbone","Handlebars","jQuery","Javascript","HTML","CSS","RESTful Web Services","SVN"],
        sites: [],
        pageBreak: false
      }, {
        startDate: 'October 2011',
        endDate: 'September 2013',
        isCurrent: false,
        company: "Young's Market Company",
        city: "Union City",
        state: "CA",
        jobTitle: "Webmaster",
        descriptions: [{
            callout: "",
            text: "Responsible for public-facing web sites, extranets, and internal-facing sites for the corporate and subsidiaries. Designed, developed, and maintained business applications while working closely with stakeholders to define requirements. Saw the projects through to completion, end-to-end. Projects had a wide range, and included non-profit work."
          }, {
            callout: "NatWeb - National Accounts",
            text: "The national accounts application, delivered through the Intranet, provided leadership the ability to track supplier mandates through customer endpoints. Account Managers were able to enter campaigns and track overall dollars, volume, and sales. This enabled better brand-performance, and gave in-sight into how best to increase market penetration for existing brands, and where to best break-in new product lines."
          }, {
            callout: "Sales Quota",
            text: "A web application for goal creation and tracking. Reports rolled-up from the sales level to the CEO, and was used to track sales performance, brand performance, and helped leadership make decisions on how to deliver for our suppliers. Reports were delivered in a variety of intervals and time-frames to provide real-time targets, and performance time-comparisons."
          }
        ],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: true,
        requiredSkills: ["ActionScript","Adobe Flex","MXML","ColdFusion","ColdFusion Components","Remote Object Calls","MS SQL Server","Stored Procedures","SQL Agents","SQL Server Reporting Services (SSRS)",".Net C#","HTML","CSS","JavaScript","jQuery","SharePoint Branding","Adobe PhotoShop"],
        sites: [
          {name: "Young's Market Company", link: "http://www.youngsmarket.com"},
          {name: "Young's Market Company Extranet", link: "http://intranet.youngsmarket.com/youngsmarket"},
          {name: "Wilson Daniels", link: "https://www.wilsondaniels.com"},
          {name: "Wilson Daniels Extranet", link: "http://intranet.youngsmarket.com/wilsondaniels"},
          {name: "Infinium Spirits", link: "http://www.infiniumspirits.com"},
        ],
        pageBreak: true
      }, {
        startDate: 'February 2011',
        endDate: 'October 2011',
        isCurrent: false,
        company: "Group A",
        city: "Union City",
        state: "CA",
        jobTitle: "Contractor - Flex Developer",
        descriptions: [{callout: "", text: "On contract with Young's Market Company"}],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: false,
        requiredSkills: ["ActionScript","Adobe Flex","MXML","ColdFusion","ColdFusion Components","Remote Object Calls","MS SQL Server","Stored Procedures","SQL Agents","SQL Server Reporting Services (SSRS)",".Net C#","HTML","CSS","JavaScript","jQuery","SharePoint Branding","Adobe PhotoShop"],
        sites: [],
        pageBreak: false
      }, {
        startDate: 'September 2010',
        endDate: 'February 2011',
        isCurrent: false,
        company: "Northrop Grumman",
        city: "San Mateo",
        state: "CA",
        jobTitle: "Contractor",
        descriptions: [{callout: "PostalOne!", text: "Develop and maintain PostalOne! application (flagship revenue product)  for the United States Postal Service in ColdFusion 8, 9 with some Java development, and Oracle backend."}],
        tags: ["front-end","ui-ux","javascript","server","database"],
        displaySkill: true,
        requiredSkills: ["ColdFusion","ColdFusion Components","Oracle","HTML","CSS","JavaScript"],
        sites: [],
        pageBreak: false
      }, {
        startDate: 'July 2009',
        endDate: 'September 2010',
        isCurrent: false,
        company: "Alliance Analytical, Inc.",
        city: "Menlo Park",
        state: "CA",
        jobTitle: "Software Architect, Custom ERP",
        descriptions: [{callout: "Evolve", text: "Tasked to learn Flex and take ownership of a custom ERP, I carried on a departing founder's work of realizing the CEO's vision. From CRM to CMS to dashboarding, the ERP is essential to the day-to-day and long-term health of the organization. In addition, the software provides content and inventory to our public-facing e-Commerce web site, and provides lead generation."}],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: true,
        requiredSkills: ["ActionScript","Adobe Flex","MXML","ColdFusion","ColdFusion Components","Remote Object Calls","MS SQL Server","Stored Procedures","SQL Agents","SQL Server Reporting Services","HTML","CSS","JavaScript","jQuery"],
        sites: [],
        pageBreak: true
      }, {
        startDate: 'June 2007',
        endDate: 'April 2009',
        isCurrent: false,
        company: "Arizona Hospital and Healthcare Association",
        city: "Arizona",
        state: "AZ",
        jobTitle: "Senior Web Developer",
        descriptions: [{
          callout: "",
          text: "Supporting internal and external clients through IT services, primarily as a web application developer. I managed and maintained our web presence functioning as the web master and developer. For " +
          "new branding initiatives, I was able to provide my input in a design role. Acted as the technical liaison for outsourced development, and was involved in all steps of the SDLC, ensuring an efficient and manageable handoff. In addition to developing new functionality for our two flagship revenue-generating software products, I completed a redesign focusing on usability and efficiency, incorporating our branding to deliver an appealing, attractive web-based application."
        }, {
          callout: "The Registry",
          text: "The Registry and Health Jobs code-based was used to spin-up various instances, allowing us to re-license the software through an easy, intuitive configuration process."
        }],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: true,
        requiredSkills: ["ActionScript","Adobe Flex","MXML","ColdFusion","ColdFusion Components","Remote Object Calls","MS SQL Server","Stored Procedures","SQL Agents","SQL Server Reporting Services",".Net C#","HTML","CSS","JavaScript","jQuery","Adobe Photoshop"],
        sites: [
          {name: "AzHHA", link: "http://www.azhha.org"},
          {name: "AzHHA Registry", link: "http://www.azhharegistry.com"},
          {name: "AZ Health Jobs", link: "https://www.azhealthjobs.com"},
          {name: "The Med Form", link: "http://www.themedform.com"},
          {name: "www.azhcwf.org", link: "http://www.azhcwf.org"},
          {name: "AZ Caring Careers", link: "http://www.azcaringcareers.com"},
          {name: "Content Management System", link: "http://acc.azhha.org/admin"},
          {name: "AzHHA Intranet", link: "http://intranet.azhha.org"}
        ],
        pageBreak: false
      }, {
        startDate: 'May 2007',
        endDate: 'June 2007',
        isCurrent: false,
        company: "Technisource",
        city: "Phoenix",
        state: "AZ",
        jobTitle: "Contractor - ColdFusion Developer",
        descriptions: [{callout: "", text: "On contract with the Arizona Hospital and Healthcare Association"}],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: false,
        requiredSkills: ["ActionScript","Adobe Flex","MXML","ColdFusion","ColdFusion Components","Remote Object Calls","MS SQL Server","Stored Procedures","SQL Agents","SQL Server Reporting Services",".Net C#","HTML","CSS","JavaScript","jQuery","Adobe Photoshop"],
        sites: [],
        pageBreak: true
      }, {
        startDate: 'August 2006',
        endDate: 'May 2007',
        isCurrent: false,
        company: "Kolbe Corporation",
        city: "Phoenix",
        state: "AZ",
        jobTitle: "Web Developer",
        descriptions: [
          {callout: "", text: "Fascinating product utilized by educators and team-builders alike, I worked on the public-facing consumer web site along with the B2B applications, often used in coaching and team-building to help build better organizations. My work included delivering the reports and finished products in an easily consumable and intuitive manner."},
          {callout: "", text: "Through the product, I was able to learn about how I operate, and how I can best approach and solve problems; an invaluable asset in my line of work."}
        ],
        tags: ["front-end","ui-ux","javascript","product","server","database"],
        displaySkill: true,
        requiredSkills: ["ColdFusion","ColdFusion Components","BlueDragon","Fusebox","Remote Object Calls","MS SQL Server","HTML","CSS","JavaScript","Windows","Linux"],
        sites: [
          {name: "Kolbe Corporation", link: "http://www.kolbe.com"},
          {name: "WareWithal", link: "http://www.warewithal.com"},
          {name: "Center for Conative Abilities", link: "http://www.centerforconativeabilities.org"},
          {name: "AZ Panda", link: "http://www.azpanda.org"}
        ],
        pageBreak: false
      }, {
        startDate: 'July 2005',
        endDate: 'July 2006',
        isCurrent: false,
        company: "First Bank",
        city: "Ketchikan",
        state: "AK",
        jobTitle: "Programmer",
        descriptions: [{callout: "", text: "From providing customer service, tech support, and help desk duties, my first programming role was to develop and maintain the corporate Intranet, in ColdFusion. Although it was a language I had only just heard of, I dove in, and rebuilt the Intranet from scratch, with a dynamic content-management system that allowed for quick scaling for new departments, and for admin to build out schedules, share documents, and provide announcements. A fan favorite was a photo-sharing module created that helped engage our various remote locations, and fostered a sense of community and camaraderie among the employees."}],
        tags: ["front-end","ui-ux","javascript","server","database"],
        displaySkill: true,
        requiredSkills: ["ColdFusion","MS Access","HTML","CSS","JavaScript","Visual Basic 6.0","Help Desk","Tech Support","Customer Service"],
        sites: [],
        pageBreak: false
      }
    ]//end companies
  };//end work history object
});
