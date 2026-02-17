module.exports=[70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},14747,(e,t,r)=>{t.exports=e.x("path",()=>require("path"))},27699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},92509,(e,t,r)=>{t.exports=e.x("url",()=>require("url"))},22734,(e,t,r)=>{t.exports=e.x("fs",()=>require("fs"))},88947,(e,t,r)=>{t.exports=e.x("stream",()=>require("stream"))},4446,(e,t,r)=>{t.exports=e.x("net",()=>require("net"))},79594,(e,t,r)=>{t.exports=e.x("dns",()=>require("dns"))},46786,(e,t,r)=>{t.exports=e.x("os",()=>require("os"))},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},55004,(e,t,r)=>{t.exports=e.x("tls",()=>require("tls"))},21517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},24836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},33405,(e,t,r)=>{t.exports=e.x("child_process",()=>require("child_process"))},66895,e=>{"use strict";var t=e.i(84834),r=e.i(73324),n=e.i(68756),a=e.i(68517),s=e.i(41486),o=e.i(43456),i=e.i(81444),p=e.i(83466),l=e.i(13519),d=e.i(48130),u=e.i(5153),c=e.i(20306),x=e.i(5065),h=e.i(80301),g=e.i(97265),m=e.i(93695);e.i(46692);var f=e.i(2827),v=e.i(71244),y=e.i(64318);async function R(e){try{let{fullName:t,email:r,CompanyName:n,CompanyType:a,Designation:s,ddlcountry:o,txtwebsite:i,txtphone:p,Timezone:l,AppointmentDate:d,AppointmentTime:u,Message:c,Plan:x}=await e.json();if(!t||!r||!n||!p||!d||!u||!l)return v.NextResponse.json({error:"Missing required fields"},{status:400});let h=y.default.createTransport({service:"gmail",auth:{user:"contact@eximtradedata.com",pass:"fmdn jlsa ifhi onuz"}}),g={from:"contact@eximtradedata.com",to:"enquiry@eximtradedata.com",subject:"New Appointment Scheduled",html:`
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #004aad;">🚀 New Appointment Scheduled</h2>
          <p><strong>Name:</strong> ${t}</p>
          <p><strong>Email:</strong> ${r}</p>
          <p><strong>Company Name:</strong> ${n}</p>
          <p><strong>Company Type:</strong> ${a||"-"}</p>
          <p><strong>Designation:</strong> ${s||"-"}</p>
          <p><strong>Country:</strong> ${o||"-"}</p>
          <p><strong>Website:</strong> ${i||"-"}</p>
          <p><strong>Phone:</strong> ${p}</p>
          <p><strong>Timezone:</strong> ${l}</p>
          <p><strong>Appointment Date:</strong> ${d}</p>
          <p><strong>Appointment Time:</strong> ${u}</p>
          <p><strong>Message:</strong> ${c||"-"}</p>
          <p><strong>Plan:</strong> ${x||"-"}</p>
          <hr style="margin: 30px 0;" />
          <p style="font-size: 12px; color: #888;">
            This enquiry was submitted from the Exim Trade Data website.
          </p>
        </div>
      `},m={from:"contact@eximtradedata.com",to:r,subject:"Your Exim Trade Data Appointment Confirmation",html:`
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px;">
          <h2 style="color: #004aad;">Hi ${t},</h2>

          <p>
            Thank you for scheduling an appointment with
            <strong>Exim Trade Data</strong>.
          </p>

          <p><strong>📍 Location:</strong> Online (meeting link will be shared before the session)</p>
          <p><strong>🗓 Date:</strong> ${d}</p>
          <p><strong>⏰ Time:</strong> ${u} (${l})</p>

          <p>
            We're looking forward to our meeting. If you need to reschedule or
            have any questions, feel free to reply to this email.
          </p>

          <p style="margin-top: 30px;">
            Warm regards,<br />
            <strong>The Exim Trade Data Team</strong>
          </p>

          <img
            src="https://gtdservice.com/images/logo.svg"
            alt="Exim Trade Data Logo"
            style="margin-top: 10px; width: 120px; height: auto;"
          />

          <hr style="margin: 30px 0;" />
          <p style="font-size: 12px; color: #888;">
            This is an automated response.
          </p>
        </div>
      `};return await h.sendMail(g),await h.sendMail(m),v.NextResponse.json({message:"Emails sent successfully!"},{status:200})}catch(e){return console.error("Send Email Error:",e),v.NextResponse.json({error:"Failed to send email"},{status:500})}}e.s(["POST",()=>R],77092);var w=e.i(77092);let E=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/Appointment/route",pathname:"/api/Appointment",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Developer/freelance/exim/exim/app/api/Appointment/route.js",nextConfigOutput:"",userland:w}),{workAsyncStorage:A,workUnitAsyncStorage:T,serverHooks:C}=E;function q(){return(0,n.patchFetch)({workAsyncStorage:A,workUnitAsyncStorage:T})}async function b(e,t,n){E.isDev&&(0,a.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let v="/api/Appointment/route";v=v.replace(/\/index$/,"")||"/";let y=await E.prepare(e,t,{srcPage:v,multiZoneDraftMode:!1});if(!y)return t.statusCode=400,t.end("Bad Request"),null==n.waitUntil||n.waitUntil.call(n,Promise.resolve()),null;let{buildId:R,params:w,nextConfig:A,parsedUrl:T,isDraftMode:C,prerenderManifest:q,routerServerContext:b,isOnDemandRevalidate:N,revalidateOnlyGenerated:P,resolvedPathname:$,clientReferenceManifest:j,serverActionsManifest:k}=y,O=(0,i.normalizeAppPath)(v),S=!!(q.dynamicRoutes[O]||q.routes[$]),D=async()=>((null==b?void 0:b.render404)?await b.render404(e,t,T,!1):t.end("This page could not be found"),null);if(S&&!C){let e=!!q.routes[$],t=q.dynamicRoutes[O];if(t&&!1===t.fallback&&!e){if(A.experimental.adapterPath)return await D();throw new m.NoFallbackError}}let _=null;!S||E.isDev||C||(_="/index"===(_=$)?"/":_);let H=!0===E.isDev||!S,I=S&&!H;k&&j&&(0,o.setManifestsSingleton)({page:v,clientReferenceManifest:j,serverActionsManifest:k});let M=e.method||"GET",U=(0,s.getTracer)(),F=U.getActiveScopeSpan(),K={params:w,prerenderManifest:q,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts},cacheComponents:!!A.cacheComponents,supportsDynamicResponse:H,incrementalCache:(0,a.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:A.cacheLife,waitUntil:n.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,n,a)=>E.onRequestError(e,t,n,a,b)},sharedContext:{buildId:R}},L=new p.NodeNextRequest(e),z=new p.NodeNextResponse(t),B=l.NextRequestAdapter.fromNodeNextRequest(L,(0,l.signalFromNodeResponse)(t));try{let o=async e=>E.handle(B,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=U.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let n=r.get("next.route");if(n){let t=`${M} ${n}`;e.setAttributes({"next.route":n,"http.route":n,"next.span_name":t}),e.updateName(t)}else e.updateName(`${M} ${v}`)}),i=!!(0,a.getRequestMeta)(e,"minimalMode"),p=async a=>{var s,p;let l=async({previousCacheEntry:r})=>{try{if(!i&&N&&P&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let s=await o(a);e.fetchMetrics=K.renderOpts.fetchMetrics;let p=K.renderOpts.pendingWaitUntil;p&&n.waitUntil&&(n.waitUntil(p),p=void 0);let l=K.renderOpts.collectedTags;if(!S)return await (0,c.sendResponse)(L,z,s,K.renderOpts.pendingWaitUntil),null;{let e=await s.blob(),t=(0,x.toNodeOutgoingHttpHeaders)(s.headers);l&&(t[g.NEXT_CACHE_TAGS_HEADER]=l),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,n=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=g.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:s.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:n}}}}catch(t){throw(null==r?void 0:r.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:N})},!1,b),t}},d=await E.handleResponse({req:e,nextConfig:A,cacheKey:_,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:q,isRoutePPREnabled:!1,isOnDemandRevalidate:N,revalidateOnlyGenerated:P,responseGenerator:l,waitUntil:n.waitUntil,isMinimalMode:i});if(!S)return null;if((null==d||null==(s=d.value)?void 0:s.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(p=d.value)?void 0:p.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",N?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),C&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let m=(0,x.fromNodeOutgoingHttpHeaders)(d.value.headers);return i&&S||m.delete(g.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||m.get("Cache-Control")||m.set("Cache-Control",(0,h.getCacheControlHeader)(d.cacheControl)),await (0,c.sendResponse)(L,z,new Response(d.value.body,{headers:m,status:d.value.status||200})),null};F?await p(F):await U.withPropagatedContext(e.headers,()=>U.trace(d.BaseServerSpan.handleRequest,{spanName:`${M} ${v}`,kind:s.SpanKind.SERVER,attributes:{"http.method":M,"http.target":e.url}},p))}catch(t){if(t instanceof m.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:O,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:I,isOnDemandRevalidate:N})},!1,b),S)throw t;return await (0,c.sendResponse)(L,z,new Response(null,{status:500})),null}}e.s(["handler",()=>b,"patchFetch",()=>q,"routeModule",()=>E,"serverHooks",()=>C,"workAsyncStorage",()=>A,"workUnitAsyncStorage",()=>T],66895)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__e264136a._.js.map