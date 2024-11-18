import{d as j,N as D,h as i,i as U,l as C,k as q,o as s,c as t,F as E,j as c,x as r,a as B,m as g,O as G,q as F,G as P,f as I,B as z,P as O,n as T}from"./framework.BX0NulVQ.js";import{_ as K}from"./Icon.vue_vue_type_script_setup_true_lang.B56VepCh.js";const ee=Symbol("formContextKey"),H=Symbol("formItemContextKey"),J={key:0,class:"cray-input__prepend"},L={class:"cray-input__wrapper"},Q={key:0,class:"cray-input__prefix"},W=["type","disabled","readonly","autocomplete","placeholder","autofocus","form"],X={key:1,class:"cray-input__append"},Y=["disabled","readonly","autocomplete","placeholder","autofocus","form"],ae=j({name:"CrayInput",inheritAttrs:!1,__name:"Input",props:{type:{default:"text"},modelValue:{},size:{},disabled:{type:Boolean},clearable:{type:Boolean},showPassword:{type:Boolean},placeholder:{},readonly:{type:Boolean},autocomplete:{default:"off"},autofocus:{type:Boolean},form:{}},emits:["update:modelValue","input","change","focus","blur","clear"],setup(M,{expose:_,emit:A}){const l=M,h=D(),o=A,a=i(l.modelValue?l.modelValue:"");U(()=>l.modelValue,()=>{l.modelValue!=null&&(a.value=l.modelValue)});const u=i(!1),p=i(!1),d=i(),f=C(()=>l.clearable&&a.value&&u.value),b=C(()=>l.showPassword&&!l.disabled&&a.value),N=()=>{p.value=!p.value},R=async()=>{d.value.focus()},k=()=>{o("update:modelValue",a.value),o("input",a.value),y("input")},w=()=>{o("change",a.value),y("change")},V=e=>{u.value=!0,o("focus",e)},$=e=>{u.value=!1,o("blur",e),y("blur")},S=()=>{a.value="",o("update:modelValue",""),o("clear"),o("input",""),o("change","")},m=q(H,null),y=e=>{m==null||m.validate(e).catch(n=>console.error(n.errors))};return _({ref:d,showClear:f}),(e,n)=>(s(),t("div",{class:T(["cray-input",{[`cray-input--${e.type}`]:e.type,[`cray-input--${e.size}`]:e.size,"is-disabled":e.disabled,"is-prepend":e.$slots.prepend,"is-append":e.$slots.append,"is-prefix":e.$slots.prefix,"is-suffix":e.$slots.suffix,"is-focus":u.value}])},[e.type==="text"?(s(),t(E,{key:0},[e.$slots.prepend?(s(),t("div",J,[c(e.$slots,"prepend")])):r("",!0),B("div",L,[e.$slots.prefix?(s(),t("span",Q,[c(e.$slots,"prefix")])):r("",!0),g(B("input",F({class:"cray-input__inner",type:e.showPassword?p.value?"text":"password":e.type,ref_key:"inputRef",ref:d},P(h),{disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":n[0]||(n[0]=v=>a.value=v),onInput:k,onChange:w,onFocus:V,onBlur:$}),null,16,W),[[G,a.value]]),e.$slots.suffix||f.value||b.value?(s(),t("span",{key:1,class:"cray-input__suffix",onClick:R},[f.value?(s(),I(K,{key:0,icon:"circle-xmark",class:"cray-input__clear",onClick:z(S,["stop"]),onMousedown:n[1]||(n[1]=z(()=>{},["prevent"]))})):r("",!0),b.value?(s(),I(K,{key:1,icon:p.value?"eye":"eye-slash",class:"cray-input__password",onClick:N},null,8,["icon"])):r("",!0),c(e.$slots,"suffix")])):r("",!0)]),e.$slots.append?(s(),t("div",X,[c(e.$slots,"append")])):r("",!0)],64)):g((s(),t("textarea",F({key:1,class:"cray-textarea__wrapper"},P(h),{ref_key:"inputRef",ref:d,disabled:e.disabled,readonly:e.readonly,autocomplete:e.autocomplete,placeholder:e.placeholder,autofocus:e.autofocus,form:e.form,"onUpdate:modelValue":n[2]||(n[2]=v=>a.value=v),onInput:k,onChange:w,onFocus:V,onBlur:$}),null,16,Y)),[[O,a.value]])],2))}});export{ae as _,H as a,ee as f};