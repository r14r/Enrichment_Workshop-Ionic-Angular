System.register([],(function(t){"use strict";return{execute:function(){const e=t("startHardwareBackButton",()=>{const t=document;let e=false;t.addEventListener("backbutton",()=>{if(e){return}const r=[];const s=new CustomEvent("ionBackButton",{bubbles:false,detail:{register(t,e){r.push({priority:t,handler:e})}}});t.dispatchEvent(s);if(r.length>0){let t=Number.MIN_SAFE_INTEGER;let s;r.forEach(({priority:e,handler:n})=>{if(e>=t){t=e;s=n}});e=true;n(s).then(()=>e=false)}})});const n=async t=>{try{if(t){const e=t();if(e!=null){await e}}}catch(e){console.error(e)}};const r=t("OVERLAY_BACK_BUTTON_PRIORITY",100);const s=t("MENU_BACK_BUTTON_PRIORITY",99)}}}));