module.exports=[93695,(a,b,c)=>{b.exports=a.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},62250,a=>{a.n(a.i(59982))},74152,a=>{a.n(a.i(74926))},80502,a=>{a.n(a.i(50682))},61802,a=>{a.n(a.i(82042))},45800,a=>{a.n(a.i(55108))},82693,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(10819);a.n(d("[project]/Developer/freelance/exim/exim/node_modules/next/dist/client/app-dir/link.js <module evaluation>"))},86679,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(10819);a.n(d("[project]/Developer/freelance/exim/exim/node_modules/next/dist/client/app-dir/link.js"))},77643,a=>{"use strict";a.i(82693);var b=a.i(86679);a.n(b)},37672,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return i},useLinkStatus:function(){return h.useLinkStatus}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(64011),g=a.r(50252),h=f._(a.r(77643));function i(a){let b=a.legacyBehavior,c="string"==typeof a.children||"number"==typeof a.children||"string"==typeof a.children?.type,d=a.children?.type?.$$typeof===Symbol.for("react.client.reference");return!b||c||d||(a.children?.type?.$$typeof===Symbol.for("react.lazy")?console.error("Using a Lazy Component as a direct child of `<Link legacyBehavior>` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's `<a>` tag."):console.error("Using a Server Component as a direct child of `<Link legacyBehavior>` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's `<a>` tag.")),(0,g.jsx)(h.default,{...a})}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},46786,(a,b,c)=>{b.exports=a.x("os",()=>require("os"))},27699,(a,b,c)=>{b.exports=a.x("events",()=>require("events"))},88947,(a,b,c)=>{b.exports=a.x("stream",()=>require("stream"))},54799,(a,b,c)=>{b.exports=a.x("crypto",()=>require("crypto"))},55004,(a,b,c)=>{b.exports=a.x("tls",()=>require("tls"))},4446,(a,b,c)=>{b.exports=a.x("net",()=>require("net"))},79594,(a,b,c)=>{b.exports=a.x("dns",()=>require("dns"))},92509,(a,b,c)=>{b.exports=a.x("url",()=>require("url"))},22734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},21517,(a,b,c)=>{b.exports=a.x("http",()=>require("http"))},24836,(a,b,c)=>{b.exports=a.x("https",()=>require("https"))},33405,(a,b,c)=>{b.exports=a.x("child_process",()=>require("child_process"))},1129,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(10819).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/Developer/freelance/exim/exim/app/Components/FAQ.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/Developer/freelance/exim/exim/app/Components/FAQ.js <module evaluation>","default")},30772,a=>{"use strict";a.s(["default",()=>b]);let b=(0,a.i(10819).registerClientReference)(function(){throw Error("Attempted to call the default export of [project]/Developer/freelance/exim/exim/app/Components/FAQ.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"[project]/Developer/freelance/exim/exim/app/Components/FAQ.js","default")},23203,a=>{"use strict";a.i(1129);var b=a.i(30772);a.n(b)},60526,(a,b,c)=>{b.exports=a.x("node:os",()=>require("node:os"))},12057,(a,b,c)=>{b.exports=a.x("node:util",()=>require("node:util"))},59639,(a,b,c)=>{b.exports=a.x("node:process",()=>require("node:process"))},12714,(a,b,c)=>{b.exports=a.x("node:fs/promises",()=>require("node:fs/promises"))},74533,(a,b,c)=>{b.exports=a.x("node:child_process",()=>require("node:child_process"))},57764,(a,b,c)=>{b.exports=a.x("node:url",()=>require("node:url"))},70961,a=>{"use strict";var b=a.i(50252);a.i(43013);var c=a.i(22900);a.i(37672);var d=a.i(23203),e=a.i(45404),f=a.i(46139);async function g(a,b,c=""){let d,h=((a,b,c="")=>`hs:${a}:${b}:${c}`.toLowerCase())(a,b,c);try{let a=await f.default.get(h);if(a)return JSON.parse(a)}catch{}let i=await (0,e.getConnection)(),j="",k="";if("hs"===a){d=await i.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE RTRIM(hs_code) LIKE ${b+"%"}
      ORDER BY hs_code
    `;let a=await i.query`
      SELECT hs_code_description
      FROM hscode_list
      WHERE hs_code = ${b}
    `;j=a.recordset?.[0]?.hs_code_description||""}else if("product"===a)d=await i.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code_description LIKE ${"%"+b+"%"}
      ORDER BY hs_code
    `,j=`Harmonized system code of ${b}`;else if("hs-product"===a)d=await i.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${b+"%"}
        AND hs_code_description LIKE ${"%"+c.replace(/\s+/g,"%")+"%"}
      ORDER BY LEN(hs_code)
    `,j=`HS Code ${b} related to ${c}`,k=`HS ${b} + Product`;else if("chapter"===a)d=await i.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${b+"%"} AND LEN(hs_code) = 4
      ORDER BY hs_code
    `,k=`Chapter - ${b}`;else{if("heading"!==a)return null;d=await i.query`
      SELECT hs_code, hs_code_description AS item_description
      FROM hscode_list
      WHERE hs_code LIKE ${b+"%"} AND LEN(hs_code) >= 6
      ORDER BY hs_code
    `,k=`Heading - ${b}`}let l={rows:d.recordset||[],heading:j,tc1Heading:k};return await f.default.set(h,JSON.stringify(l),"EX",86400),l}let h=[{question:"What is HS Code/HSN Code?",answer:`
      <p class="mb-4">
        As we come across new product launches every day, there was a need to create a system to track the import and export of a nation. 
        A <strong>Harmonized System Code</strong> or <strong>Harmonized System of Nomenclature</strong> was developed by the 
        <strong>World Customs Organization (WCO)</strong> in 1988. 
        Since then, HS Codes have been reformed five times — in 1996, 2002, 2007, 2012, and 2017.
      </p>
      <p class="mb-4">
        The sole purpose of Global HS Codes is to identify different goods and products which assist authorities in charging 
        <strong>custom duties</strong>, <strong>surcharges</strong>, taxes, and monitoring import/export activities. 
        An HS Code list includes specific names and HS numbers to classify various goods and commodities.
      </p>
    `},{question:"Why are HS Codes important?",answer:`
      <p class="mb-4">
        HS Codes are essential in international trade as they cover over <strong>5000+</strong> commodities and 
        <strong>95% of global trade</strong>. Customs authorities use HS Codes to identify goods and commodities and apply tariffs and taxes.
      </p>
      <p class="mb-4">
        If you don’t include the correct HS Code on your commercial bill and shipment details, it can result in 
        incorrect tax charges and shipment delays.
      </p>
    `},{question:"General format of HS/HSN Code",answer:`
      <p class="mb-4">
        An HS Code can be <strong>6 to 10 digits</strong> long. The first six digits remain the same for all countries 
        as per WCO rules, while the last four digits may vary by country.
      </p>
      <p class="mb-4">
        Globally, the HS Code list includes <strong>21 sections</strong> and <strong>99 chapters</strong> 
        followed by <strong>1,244 headings</strong> and <strong>5,244 subheadings</strong>.
      </p>
      <p class="font-semibold mb-2">Example Structure:</p>
      <div class="overflow-x-auto mb-4">
        <table class="min-w-full border border-gray-300 text-sm">
          <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th class="px-4 py-2 border">Part</th>
              <th class="px-4 py-2 border">Meaning</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Chapter (88)</td>
              <td class="px-4 py-2 border">First two digits represent the chapter.</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Heading (66)</td>
              <td class="px-4 py-2 border">Next two digits represent headings.</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Subheading (44)</td>
              <td class="px-4 py-2 border">Further two digits represent subheadings.</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Regional Tariff (22)</td>
              <td class="px-4 py-2 border">Last two digits represent regional tariff.</td>
            </tr>
          </tbody>
        </table>
      </div>
    `},{question:"How can you find the HS Code for your product?",answer:`
      <p class="mb-4">
        By using our <strong>HS Code Search</strong> option, you can find the HS Code of your desired goods and products. 
        Simply enter the product name, perform the search, and your HS Code will appear.
      </p>
      <p class="mb-2">Example Table:</p>
      <div class="overflow-x-auto">
        <table class="min-w-full border border-gray-300 text-sm">
          <thead class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <tr>
              <th class="px-4 py-2 border">Type</th>
              <th class="px-4 py-2 border">Product Category</th>
              <th class="px-4 py-2 border">HS Code</th>
            </tr>
          </thead>
          <tbody>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Section</td>
              <td class="px-4 py-2 border">Textiles & Textile Articles</td>
              <td class="px-4 py-2 border">******</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Chapter (88)</td>
              <td class="px-4 py-2 border">Knitted or crocheted fabrics</td>
              <td class="px-4 py-2 border">88</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Heading (66)</td>
              <td class="px-4 py-2 border">Fabrics, knitted or crocheted, width 30cm</td>
              <td class="px-4 py-2 border">8866</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Subheading (44)</td>
              <td class="px-4 py-2 border">Artificial filament fabrics, printed</td>
              <td class="px-4 py-2 border">886644</td>
            </tr>
            <tr class="odd:bg-white even:bg-gray-50">
              <td class="px-4 py-2 border">Regional Tariff (22)</td>
              <td class="px-4 py-2 border">********</td>
              <td class="px-4 py-2 border">88664422</td>
            </tr>
          </tbody>
        </table>
      </div>
    `},{question:"Does HS Code differ per country?",answer:`
      <p>
        Yes. HS Codes differ per country for classification of goods. 
        The first six digits remain fixed worldwide, while the remaining digits are defined by each country.
      </p>
    `},{question:"How are HS Codes categorized in vietnam?",answer:`
      <p class="mb-2">In vietnam, ITC HS Codes are divided into two schedules:</p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>Schedule I</strong> – Rules and procedures for import policies.</li>
        <li><strong>Schedule II</strong> – Rules and procedures for export operations.</li>
      </ul>
    `},{question:"What does HS/HSN Code list of vietnam cover?",answer:`
      <p>
        The vietnamn HS/HSN Code list covers 21 sections, 99 chapters, 1244 headings, and 5222 subheadings. 
        Each section is classified into chapters, chapters into headings, and headings into subheadings.
      </p>
    `},{question:"How do I find the ITC-HS Code for my product?",answer:`
      <p class="mb-4">
        Example: Suppose you are looking for the ITC-HS Code of a painting. 
        After searching, you find that the code is <strong>970110</strong>.
      </p>
      <ul class="list-disc list-inside space-y-1">
        <li><strong>97</strong> – Chapter</li>
        <li><strong>01</strong> – Heading</li>
        <li><strong>10</strong> – Subheading</li>
      </ul>
    `},{question:"Why choose Exim Trade Data's Global HS Code List?",answer:`
      <p>
        Exim Trade Data offers HS code lists of over <strong>60+ countries</strong>. 
        You can search by product name and access sample global import/export trade data for insights into world trade, 
        risk avoidance, and business opportunities.
      </p>
    `},{question:"What is the HS Code system of vietnam?",answer:`
      <p>
        In vietnam, HS Codes are known as <strong>ITC HS Codes</strong> (vietnamn Trade Clarification / vietnamn Tariff Code). 
        These 8-digit codes classify goods for export-import operations. The first six digits follow WCO rules, 
        and the last two are assigned by the DGFT.
      </p>
    `}];async function i({params:a}){a=await a;let b=a?.searchresult||[],c="Global HS Code List | Harmonized System Codes for Import Export",d="Explore the global HS Code list for import export trade. Find Harmonized system codes, product classifications, custom tariffs, and international trade data by HS Code, Chapter and Heading.",e="global hs code list, hs code search, harmonized system codes, import export hs code, custom tariffs codes, international trade hs codes";if(0===b.length)return{title:c,description:d,keywords:e};let f=b[0],h=b[1];if(f.startsWith("chapter-")){let a=f.replace("chapter-",""),b=await g("chapter",a),h=b?.rows?.[0]?.item_description||"";return c=`Chapter ${a} - ${h} | Global HS Code List | Exim Trade Data`,{title:c,description:d=`Explore Chapter ${a} of the Global HS Code List: detailed Harmonized System codes for ${h.toLowerCase()}. Find import-export classification codes and product descriptions.`,keywords:e=`Chapter ${a}, ${h} HS Codes, harmonized system ${h.toLowerCase()}, global hs code list`}}if(f.startsWith("heading-")){let a=f.replace("heading-",""),b=await g("heading",a),h=b?.rows?.[0]?.item_description||"";return c=`Heading ${a} - ${h} | Global HS Code List`,{title:c,description:d=`Explore Heading ${a} in the Global HS Code List- covering ${h.toLowerCase()} with detailed harmonized system (HS) classification codes used in international trade.`,keywords:e=`Heading ${a}, ${h} HS Code, harmonized system codes, global hs code list, import export classification`}}if(f.startsWith("hs-code-")&&1===b.length){let a=f.replace("hs-code-",""),b=await g("hs",a),h=b?.heading||"";return c=`HS Code ${a} - ${h} | Global HS Code List`,{title:c,description:d=`Discover HS Code ${a} in the Global HS Code List: classification for ${h.toLowerCase()} used in international trade. Learn about HSN Codes for precise import-export documentation.`,keywords:e=`HS Code ${a}, ${h} HS Code, harmonized system code, hsn code, global hs code list, import export classification, HS Code ${a} description`}}if(f.startsWith("product-")&&1===b.length){let a=f.replace("product-","").replace(/-/g," "),b=a.charAt(0).toUpperCase()+a.slice(1);return c=`HS Codes for ${b} Products | Global HS Code List`,{title:c,description:d=`Explore Harmonized System Code for ${b} Products in the Global HS Code List. Find HS Classifications for ${b.toLowerCase()} and related items to support accurate import-export documentation and customs compliance.`,keywords:e=`HS Code ${b}, ${b.toLowerCase()} hs code, harmonized system code ${b.toLowerCase()}, global hs code list, import export ${b.toLowerCase()} classification`}}if(f.startsWith("hs-code-")&&h?.startsWith("product-")){let a=f.replace("hs-code-",""),b=h.replace("product-","").replace(/-/g," "),g=b.charAt(0).toUpperCase()+b.slice(1);c=`HS Code ${a} - ${g} | Global HS Code List | Exim Trade Data`,d=`Browse HS Code ${a} entries for ${g.toLowerCase()} in the Global HS Code List. Find harmonized system codes for ${g.toLowerCase()} and related items used in global import export classification.`,e=`HS Code ${a}, HS Code ${g}, ${g.toLowerCase()} hs code, harmonized system code ${g.toLowerCase()}, global hs code list, import export mobile classification`}return{title:c,description:d,keywords:e}}function j(a){return a.startsWith("hs-code-")?{type:"hs",value:a.replace("hs-code-","")}:a.startsWith("hs-")?{type:"hs",value:a.replace("hs-","")}:a.startsWith("product-")?{type:"product",value:a.replace("product-","").replace(/-/g," ")}:a.startsWith("chapter-")?{type:"chapter",value:a.replace("chapter-","")}:a.startsWith("heading-")?{type:"heading",value:a.replace("heading-","")}:null}async function k({params:a}){let e=(a=await a).searchresult,f="",i="",k="";if(1===e.length){let a=j(e[0]);if(!a)return(0,b.jsx)("p",{children:"Invalid search"});f=a.type,i=a.value}if(2===e.length){let a=j(e[0]),b=j(e[1]);a?.type==="hs"&&b?.type==="product"&&(f="hs-product",i=a.value,k=b.value)}let l=await g(f,i,k);if(!l)return(0,b.jsx)("p",{className:"p-8 text-red-600",children:"Invalid search."});let{rows:m,heading:n,tc1Heading:o}=l,p=["bg-white","bg-slate-50","bg-slate-100"];return(0,b.jsxs)("main",{children:[(0,b.jsx)(c.default,{}),(0,b.jsx)("section",{className:" px-4 py-12 text-center bg-white",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h2",{className:"text-3xl font-bold text-black mb-4",children:"hs"==f?`Harmonize system code of ${i} - ${n}`:`${"chapter"==f?`${n} import export Hs Code Data`:`${"heading"==f?`HS Codes Heading of ${i} - ${n}`:"Harmonize system code of live"}`}`}),(0,b.jsx)("h3",{className:"text-2xl  text-black mb-4",children:"Find Complete Global HS Code List of 5000+ commodities by Chapter, Headings and Subheadings. Discover HS Code for your product with our easy to use HS Code Finder."}),(0,b.jsx)("div",{className:"mt-10 border border-gray-300  shadow-md",children:(0,b.jsxs)("table",{className:"min-w-full text-left text-black border-collapse",children:[(0,b.jsx)("thead",{className:"sticky top-16 z-10",children:(0,b.jsxs)("tr",{className:"bg-gray-200",children:[(0,b.jsx)("th",{className:"px-6 py-4 text-base font-semibold border-b border-gray-300 w-40",children:"hs"==f?`Heading - ${i}`:o??"HS Code"}),(0,b.jsx)("th",{className:"px-6 py-4 text-base font-semibold border-b border-gray-300 w-[55%] border-l",children:n??"HS Code Description"}),(0,b.jsx)("th",{className:"px-6 py-4 text-base font-semibold border-b border-gray-300 border-l",children:"Import Data"}),(0,b.jsx)("th",{className:"px-6 py-4 text-base font-semibold border-b border-gray-300 border-l",children:"Export Data"})]})}),(0,b.jsx)("tbody",{children:m.map((a,c)=>(0,b.jsxs)("tr",{className:`${p[c%3]} hover:bg-gray-100 transition`,children:[(0,b.jsx)("td",{className:"px-6 py-4 font-semibold border-b border-gray-200",children:(0,b.jsx)("a",{href:`/global-hs-code-list/${"heading"==f?`hs-code-${a.hs_code}`:`${"hs"==f?`hs-code-${a.hs_code}`:`heading-${a.hs_code}`}`}`,className:"block w-full",children:"chapter"==f?`Heading ${a.hs_code}`:a.hs_code})}),(0,b.jsx)("td",{className:"px-6 py-4 border-b border-gray-200 border-l",children:(0,b.jsx)("a",{href:`/global-hs-code-list/${"heading"==f?`hs-code-${a.hs_code}`:`${"hs"==f?`hs-code-${a.hs_code}`:`heading-${a.hs_code}`}`}`,className:"block  w-full",children:a.item_description})}),(0,b.jsx)("td",{className:"px-4 py-4 border-b border-gray-200 border-l",children:(0,b.jsxs)("a",{href:`/search/country-vietnam/type-import/hscode-${a.hs_code}`,className:"block bg-blue-600 text-white p-2 text-x cursor-pointer underline text-center w-full",children:["HS Code - ",a.hs_code]})}),(0,b.jsx)("td",{className:"px-4 py-4 border-b border-gray-200 border-l",children:(0,b.jsxs)("a",{href:`/search/country-vietnam/type-export/hscode-${a.hs_code}`,className:"block text-center bg-gray-400 p-2 text-white underline cursor-pointer  w-full",children:["HS Code - ",a.hs_code]})})]},c))})]})})]})}),(0,b.jsx)(d.default,{title:"FAQs About Global HS Code List",faqs:h})]})}a.s(["default",()=>k,"generateMetadata",()=>i],70961)},27344,a=>{a.v(b=>Promise.all(["server/chunks/ssr/[root-of-the-server]__81f6e0fc._.js"].map(b=>a.l(b))).then(()=>b(84197)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e1a51dfb._.js.map